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
  <div class="popup-content flex flex-col bg-white !h-[unset] min-h-[100vh]">
    <div class="w-full">
      <img src={dictionary[winningItem]} alt="avatar" width="50" />
      <div class="font-bold whitespace-nowrap
      " style="  font-size: clamp(2rem, -0.875rem + 8.333vw, 100px);">
        {winningItem}
      </div>
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
      <button class="bg-black mb-4" on:click={pause}>Pause</button>
      <button class="bg-black mb-4" on:click={closeWinnerPopup}>Close</button>
      <div class="flex gap-3 max-md:grid">
        <TMATicket status={"En cours"} filteredList={filteredList} openTicket={openTicket} />
        <TMATicket status={"Relecture"} filteredList={filteredList} openTicket={openTicket} />
        <TMATicket status={"En préprod"} filteredList={filteredList} openTicket={openTicket} />
      </div>
    </div>
  </div>
</div>
