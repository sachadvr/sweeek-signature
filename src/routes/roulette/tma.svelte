<script>
	import TMATicket from './TMATicket.svelte';
  import { faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";

  export let dictionary;
  export let winningItem;
  export let time;
  export let filteredList;
  export let openTicket;
  export let pause;
  export let closeWinnerPopup;

</script>

<div class="winner-popup !block">
  <div class="popup-content flex flex-col bg-white !h-[unset]">
    <div class="w-full">
      <img src={dictionary[winningItem]} alt="avatar" width="50" />
      <p class="font-bold whitespace-nowrap" style="font-size:100px;">
        {winningItem}
      </p>
      <div class="mx-auto max-w-xs">
        {#if time > 30}
          <div class="bg-black text-white">
            <p class="text-white" style="font-size:70px;">{time}</p>
          </div>
        {:else if time > 10 && time < 31}
          <div class="bg-black text-white">
            <p class="text-red-500" style="font-size:70px;">{time}</p>
          </div>
        {:else}
          <div class="bg-black text-white">
            <p class="text-red-700" style="font-size:70px;">{time}</p>
          </div>
        {/if}
      </div>
      <div class="flex gap-3">
        <TMATicket status={"En cours"} filteredList={filteredList} openTicket={openTicket} />
        <TMATicket status={"Relecture"} filteredList={filteredList} openTicket={openTicket} />
        <TMATicket status={"En préprod"} filteredList={filteredList} openTicket={openTicket} />

      </div>
      <button class="bg-black mt-4" on:click={pause}>Pause</button>
      <button class="bg-black mt-4" on:click={closeWinnerPopup}>Close</button>
    </div>
  </div>
</div>
