<script>
	import TMATicket from './TMATicket.svelte';
  import { faArrowRight, faArrowUp, faFaceAngry, faFaceFlushed, faFaceSadTear, faFaceSmileWink, faSmile } from "@fortawesome/free-solid-svg-icons";
  import { onMount } from 'svelte';
  import Fa from "svelte-fa/src/fa.svelte";

  export let dictionary;
  export let winningItem;
  export let time;
  export let filteredList;
  export let openTicket;
  export let pause;
  export let closeWinnerPopup;
  export let supabase;
  export let banner;
  export let ressenti = null;

  // add event listener on scroll
  onMount(() => {
    document.querySelector('.winner-popup').addEventListener('scroll', (e)=> {

      // if scroll is more than 100px, add class to the button
      if (e.target.scrollTop > 50) {
          document.querySelector('.scrolltimer').classList.add('show');
        } else {
            document.querySelector('.scrolltimer').classList.remove('show');
          }
        });
  });

  function submitHowYouFeel(clickedEmoji) {
    if (ressenti) {
      return;
    }
    const feeling = clickedEmoji.target.closest('a').getAttribute('data-emoji');
    clickedEmoji.target.closest('a').style.color = 'rgb(74 222 128)';
    ressenti = feeling;
    supabase.from('feelings').insert([
      { feel: feeling, date: new Date(), user_id: winningItem }
    ]).then(() => {
      banner = `Le ressenti de ${winningItem} a été enregistré avec succès. Merci !`;
    }).catch(error => {
      console.log(error);
    });
  }
</script>

<div class="winner-popup !block">
  <div class="popup-content flex flex-col bg-white !h-[unset] min-h-[100vh]">
    <div class="w-full">
      <img src={dictionary[winningItem]} alt="avatar" width="50" />
      <div class="flex flex-wrap">
      <div class="border flex flex-col absolute w-[22dvw] mt-3 overflow-y-auto h-fit appear-from-left">
          <span class="bg-[#8318ec] text-[#77fbf8] p-2 block uppercase font-bold">Le daily: 3 questions clés !</span>
          <div class="text-start p-2">
              <div class="flex-1 font-bold text-xs">
          - Ce que j'ai fait hier pour atteindre nos objectifs<br/>
          - Ce que je compte faire aujourd'hui pour avancer<br/>
          - Les blocages éventuels qui m'empêchent de progresser<br/>
          </div>
          </div>
      </div>
      <div class="flex-1">
        <div class="font-bold whitespace-nowrap
        " style="  font-size: clamp(2rem, -0.875rem + 8.333vw, 100px);">
            {winningItem}
        </div>
      <!-- add a emoji for how you feel -->
      <div class="flex justify-center gap-8 mb-4">
        <a href="#" on:click={submitHowYouFeel} data-emoji="1" class="hover:text-green-400"><Fa icon={faFaceSmileWink} size="2x" /></a>
        <a href="#" on:click={submitHowYouFeel} data-emoji="0.75" class="hover:text-green-200"><Fa icon={faSmile} size="2x" /></a>
        <a href="#" on:click={submitHowYouFeel} data-emoji="0.50" class="hover:text-orange-300"><Fa icon={faFaceFlushed} size="2x" /></a>
        <a href="#" on:click={submitHowYouFeel} data-emoji="0.25" class="hover:text-red-200"><Fa icon={faFaceSadTear} size="2x" /></a>
        <a href="#" on:click={submitHowYouFeel} data-emoji="0" class="hover:text-red-400"><Fa icon={faFaceAngry} size="2x" /></a>
      </div>

      <div class="">
        <button class="bg-black mb-4" on:click={pause}>Pause</button>
        <button class="bg-black mb-4" on:click={closeWinnerPopup}>Fermer</button>
      </div>
      <div class="scrolltimer mx-auto max-w-xs fixed top-2 right-1 p-2 ">
        {#if time > 30}
          <div class=" text-white bg-black px-4">
            <p class="text-white" style="font-size:70px; ">{time}</p>
          </div>
        {:else if time > 10 && time < 31}
          <div class=" text-white bg-black px-4">
            <p class="text-red-500" style="font-size:70px;">{time}</p>
          </div>
        {:else}
          <div class=" text-white bg-black px-4">
            <p class="text-red-700" style="font-size:70px;">{time}</p>
          </div>
        {/if}
      </div>
      </div>
      </div>


      <div class="flex gap-3 max-md:grid">
        <TMATicket status={"En cours"} filteredList={filteredList} openTicket={openTicket} />
        <TMATicket status={"Relecture"} filteredList={filteredList} openTicket={openTicket} />
        <TMATicket status={"En préprod"} filteredList={filteredList} openTicket={openTicket} />
      </div>
    </div>
  </div>
</div>
