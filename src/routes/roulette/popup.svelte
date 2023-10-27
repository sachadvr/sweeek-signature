<script>
    export let currentKey;
    export let currentSummary;
    export let currentDescription;
    let source = currentDescription;
    import { marked } from 'marked';
    import j2m from 'jira2md';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faArrowRight, faPlusCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
    export let closeTicket;
    document.querySelector('body').addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTicket();
        }
    });


</script>
<style>
    .bordered-div {
        border: 1px solid black;
        padding: 5px;
        margin: 5px;
    }
</style>
<div class="winner-popup !z-30 !h-[100%]">
    <div class="popup-content flex items-center justify-center flex-col !bg-[transparent] max-w-[1000px]" style="height: unset!important; box-shadow: unset;" >
      <div class="flex flex-col gap-3 relative bg-[#1D2125] text-white">
        <div class="absolute top-3 left-5 text-sm flex gap-2 z-[10]">
            <a
            href="#"
            on:click={closeTicket}
            class="w-4 h-4 items-center justify-center text-white hover:text-red-500 bg-red-500 rounded-full flex"
          ><Fa icon={faXmarkCircle} /></a>
          <a
            href={`https://alicegarden.atlassian.net/browse/${currentKey}`} target="_blank"
            class="w-4 h-4 items-center justify-center text-white hover:text-green-500 bg-green-500 rounded-full flex"
          ><Fa icon={faPlusCircle} /></a>
        </div>
        <div class=" rounded-lg relative">

            <div class="text-xl font-bold pt-2 bg-white text-black pl-20">
                {currentKey}
                <span class="font-normal">
                    {currentSummary}
                </span>
            </div>

            <div class="mt-5 leading-5 p-6">
                {#if currentDescription}{@html marked.parse(j2m.to_markdown(currentDescription)).replace(/\|([^|]+)\|/g, '<div>$1</div>')}{/if}
            </div>

        </div>
        </div>
</div>
</div>