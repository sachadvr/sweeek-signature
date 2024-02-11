<script>
    import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa/src/fa.svelte";

    export let status;
    export let filteredList;
    export let openTicket;
    let myStatus;

    $: myStatus = status === "En cours" ? ["Demande en cours de traitement"] : status === "Relecture" ? ["En cours de relecture"] : status === "En préprod" ? ["En Pré-Production","Mis en Release", "Testé", "Non Testable"] : ["En cours"];

  </script>

<div class="flex-1 border-2" class:border-blue-300={status === "En cours"} class:border-violet-300={status === "Relecture"} class:border-green-300={status === "En préprod"}>
    <div class="w-full" class:bg-blue-300={status === "En cours"} class:bg-violet-300={status === "Relecture"} class:bg-green-300={status === "En préprod"}>{status}</div>
    <div class="overflow-auto flex flex-col gap-3 p-4">
      {#each filteredList.filter(e=> myStatus.includes(e.fields.status)) as value}
        <div class="p-4 bg-white border border-gray-200 rounded-lg shadow ">
          <div class="flex">
            <h5 class="w-fit mb-2 text-2xl font-bold tracking-tight text-gray-900 "> {value["key"]}
          {#if value["fields"]["storyPoints"] != "undefined" && value["fields"]["storyPoints"] > 0}
              {#each Array(value["fields"]["storyPoints"]) as storyPoint}
              •{/each}
              {/if}
            </h5>
            <a
              href="#"
              on:click={() => {
                openTicket(value);
              }}
              class="inline-flex ml-auto items-center gap-2 px-3 py-2 text-sm font-medium w-fit text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
             <Fa icon={faArrowRight} />
            </a>
          </div>
          <p class="mb-3 font-normal text-gray-700 text-start">{value["fields"]["summary"]}</p>

        </div>
      {/each}
    </div>
  </div>
