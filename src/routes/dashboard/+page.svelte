<script>
    import { supabase } from "./../../lib/supabaseClient.js";

    let data = [];

    supabase.from('feelings').select('*').then(({ data: feelingsData, error }) => {
        if (error) {
            console.log(error);
        }
        data = feelingsData.reduce((result, feel) => {
            const date = new Date(feel.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
            if (!result[date]) {
                result[date] = [];
            }
            result[date].push(feel);
            return result;
        }, {});
    });

    let avgdata = [];
    supabase.from('feelings').select('*').then(({ data: avgData, error }) => {
        if (error) {
            console.log(error);
        }
        avgdata = avgData;
        // avgdata group by user_id and avg for feel
        avgdata = avgdata.reduce((result, feel) => {
            if (!result[feel.user_id]) {
                result[feel.user_id] = [];
            }
            result[feel.user_id].push(feel);
            return result;
        }, {});
        avgdata = Object.entries(avgdata).map(([user_id, feelings]) => {
            const avg = feelings.reduce((acc, feel) => acc + feel.feel, 0) / feelings.length;
            return { user_id, avg };
        });


    });
    function getEmoji(score) {
        let showingScore = Math.round(score*5);
        if (score >= 0 && score <= 0.2) {
            return `😔 (${showingScore}/5)`;
        } else if (score > 0.2 && score <= 0.4) {
            return `😐 (${showingScore}/5)`;
        } else if (score > 0.4 && score <= 0.6) {
            return `🙂 (${showingScore}/5)`;
        } else if (score > 0.6 && score <= 0.8) {
            return `😊 (${showingScore}/5)`;
        } else if (score > 0.8 && score <= 1) {
            return `😄 (${showingScore}/5)`;
        } else {
            return 'Invalid score';
        }
    }
</script>
<h1 class="text-4xl font-bold ml-6 mt-8">Pourcentage Actuels</h1>
<table class="border border-black m-5">
    <tr>
        <th class="border border-black min-w-[150px] text-center bg-gray-300">Nom</th>
        <th class="border border-black min-w-[150px] text-center bg-gray-300">Pourcentage</th>
    </tr>
    {#each avgdata as avg}
    <tr>
        <td class="border border-black min-w-[150px] text-center">
            <div>{avg.user_id}</div>
        </td>
        <td class="border border-black min-w-[150px] text-center">
            <div>{getEmoji(avg.avg)}</div>
        </td>
    </tr>
        {/each}

</table>

<h1 class="text-4xl font-bold ml-6 mt-8  ">Ressentis</h1>



{#each Object.entries(data) as [date, feelingsData]}
<table class="border border-black m-5">
    <tr>
        <th class="border border-black min-w-[150px] text-center bg-gray-300">Nom</th>
        <th class="border border-black min-w-[150px] text-center bg-gray-300">Ressentis</th>
        <th class="border border-black min-w-[150px] text-center bg-gray-300">Date</th>
    </tr>
    {#each feelingsData as feel}
        <tr>
            <td class="border border-black min-w-[150px] text-center">
                <div>{feel.user_id}</div>
            </td>
            <td class="border border-black min-w-[150px] text-center">
                <div>{getEmoji(feel.feel)}</div>
            </td>
            <td class="border border-black min-w-[150px] text-center">
                <div>{new Date(feel.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</div>
            </td>
        </tr>
    {/each}
</table>
{/each}