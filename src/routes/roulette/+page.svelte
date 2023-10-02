<script>


import { onMount, beforeUpdate, afterUpdate } from "svelte";
  import { select, arc, pie } from "d3";
  import myJson from "../../lib/test.json";
  import { faCheck, faCog, faExplosion } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa/src/fa.svelte";

  export let json = []
  let spinDeg = 0;
  let showWinnerPopup = false;
  let showLoadingPopup = true;
  let showSettingsPopup = false;
  let isSpinning = false;
  let currentTimer;
  let filteredList = [];
  export let time = 60;

  const startTimer = () => {
    currentTimer = setInterval(() => {
      time --;
      if (time < 1) {
        closeWinnerPopup()
      }
    }, 1000)
  }

  export let items = [];
  export let itemsNames = [];
  export let colors = [];
  export let size = 500

  let selectedItem = null;
  export let winningItem = null;
  const closeWinnerPopup = () => {
    showWinnerPopup = false;
    showLoadingPopup = false;
    clearInterval(currentTimer);
    items.splice(itemsNames.indexOf(winningItem), 1);
    itemsNames.splice(itemsNames.indexOf(winningItem), 1);
    time = 60;
  };

  const openSettings = () => {
    showWinnerPopup = false;
    showLoadingPopup = false;
    showSettingsPopup = true;
  }
  const closeSettings = () => {
    showWinnerPopup = false;
    showLoadingPopup = true;
    showSettingsPopup = false;
  }
  const pause = (target) => {
    // startTimer()
    if (target.target.innerText == 'Pause') {
      target.target.innerText = 'Resume';
      clearInterval(currentTimer);

    }else {
      startTimer();
      target.target.innerText = 'Pause';
    }
  };
  const getSelectedPrice = () => {
    if (!isSpinning) {
      const currentAngle = (360 - (spinDeg % 360)) % 360;
      const anglePerSegment = 360 / items.length;
      const selectedIndex = Math.floor(currentAngle / anglePerSegment);
      selectedItem = itemsNames[selectedIndex];
      winningItem = selectedItem;
      filteredList= jsonTest.filter((e) => {return e.fields.assignee?.displayName == winningItem });
      console.log(filteredList);
      if (items.length > 1) {
        setTimeout(() => {showWinnerPopup = true;
          startTimer();}, 1000);



      }
    }
  };

  export const spinWheel = (e) => {
  (e != null) ? e.stopPropagation() : console.log('Starting Daily');
  if (!isSpinning && items.length > 1) {
    isSpinning = true;
    const randomDegrees = Math.random() * 720 + 1080;
    spinDeg += randomDegrees;
  }
};


  let segmentColors = [...colors];

  const colorArrayLengthMatcher = () => {
    if (colors.length !== items.length) {
      segmentColors = Array.from(
        { length: items.length },
        (_, i) => colors[i % colors.length]
      );
    }
    if (segmentColors[0] == segmentColors[segmentColors.length - 1]) {
      segmentColors[segmentColors.length - 1] = segmentColors.at(1);
    }
  };

  const svgRender = () => {
    select(".wheel svg").remove();
    colorArrayLengthMatcher();
    const svg = select(".wheel")
      .append("svg")
      .attr("width", size)
      .attr("height", size)
      .append("g")
      .attr("transform", `translate(${size / 2}, ${size / 2})`);
    const pieGenerator = pie().value(1);
    const dataWithArc = pieGenerator(items);
    const arcGenerator = arc().innerRadius(0).outerRadius(size / 2);
    
    // Render pie slices
    svg
      .selectAll("mySlices")
      .data(dataWithArc)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", (_, i) => segmentColors[i]);

      svg.append("defs").append("clipPath")
   .attr("id", "clip-circle")
   .append("circle")
   .attr("cx", size / 26) // x-coordinate of the center of the circle
   .attr("cy", size / 26) // y-coordinate of the center of the circle
   .attr("r", size / 26); // radius of the circle

    // Render images instead of text
    svg
      .selectAll("mySlices")
      .data(dataWithArc)
      .enter()
      .append("image")
      .attr("xlink:href", (_, i) => items[i]) // Set the image path dynamically
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)[0] - (size/13/2)}, ${arcGenerator.centroid(d)[1] - (size/13/2)})`)
      .style("rotate", (d) => '${d}deg')
      .style("clip-path", "url(#clip-circle)") // Apply the clip path
      .attr("width", size/13) // Set the width of the image
      .attr("height", size/13); // Set the height of the image
};


  afterUpdate(svgRender);
  async function FetchData() {
    // const response = await fetch('http://localhost:3000'
    // , {
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Cache-Control": "no-cache",
    //   },
    // });

  const json = myJson;

  items = [... new Set(json['issues'].map((e) => {
    if (e['fields']['assignee'] != null) {
      if (e['fields']['assignee']['avatarUrls']['24x24'] == undefined) {
        console.log(e['fields']['assignee']['avatarUrls']);
      };
      return e['fields']['assignee']['avatarUrls']['24x24'] ;
    }
  }))];

itemsNames = [... new Set(json['issues'].map((e) => {
    if (e['fields']['assignee'] != null) {
      return e['fields']['assignee']['displayName'];
    }
  }))];

  return json;


  }
  export let totalstr = "";
  export let word = '';
  export const statuses = { WORKING: 0, FINISHED: 1, SHOWBUTTON: 3 };
  export let currentStatus = statuses.WORKING;
  let intervalId;

  export let jsonTest = [];
  onMount(async () => {
      json = await FetchData();
      jsonTest = json['issues'];
  const doc = document.querySelector('.wheel').addEventListener('transitionend', () => {
    isSpinning = false;
    getSelectedPrice();
  });
  });









  export let Auteurs = [];

  export let auteur;
  function setStatus(status) {
    currentStatus = status;
  }

  export function isStatus(status) {
    return currentStatus == status;
  }

  export const setWord = (str) => {
    totalstr = "";
    word = str;
    return getWriting();
  }

  export const getWriting = async () => {
  currentStatus = statuses.WORKING;
  let number = 0;

  const writingPromise = new Promise((resolve) => {
    intervalId = setInterval(() => {
      if (number >= word.length) {
        clearInterval(intervalId);
        setStatus(statuses.FINISHED);
        resolve();
        return;
      }
      totalstr += word[number];
      number++;
    }, 50);
  });

  await writingPromise;
};



  $: if (currentStatus === statuses.SHOWBUTTON) {
    setTimeout(() => {
      document.querySelector('#scrollToRoulette').scrollIntoView({ behavior: 'smooth' });
    },1000);
  }

  onMount(() => {
    setTimeout(() => {

setWord('Daily Roulette').then(setTimeout(()=>{
  word = "";
  setWord("by Sacha").then(() => {
    setTimeout(()=> {
      setStatus(statuses.SHOWBUTTON);
    },1500);
  });
}, 1500));
}, 1000);
  });


  $: if (auteur) {
    console.log(auteur);
  }
</script>



<div class="flex items-center justify-center h-[100vh] w-full flex-col relative">
  <div style='font-family: "Source Code Pro","monaco","PT Mono","Courier",monospace; font-size: 40px;'>

    {#if totalstr.length > 0}
    {totalstr}
    {:else}
    <span class="animate-spin"><div>_</div></span>
    {/if}
  </div>
    <img class="absolute bottom-4 left-4 w-40" alt="" src="https://alicegarden.atlassian.net/s/-3o5b4z/b/5/e932d65b444872da6155b2fc89562bb8/_/jira-logo-scaled.png">
</div>

    <div class="w-full h-[100vh] bg-white relative flex items-center justify-center" id="scrollToRoulette">
      <button on:click={() => setWord('Daily - Dashboard').then(setTimeout(()=>{
        word = "";
        setWord("by Sacha").then(() => {
          setTimeout(()=> {
            setStatus(statuses.SHOWBUTTON);
          },1500);
        });}, 1500))}
       class="absolute top-2 left-2 rounded-2xl text-white border-2 border-white p-2 uppercase font-bold ">Recommencer</button>

          <div class="wheel-container">
            <svg
            class="pointer"
            width=50
            height=50
            viewBox="0 0 255 254"
            fill=white
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M118.5 1.981C80.351 9.662 54.457 31.12 39.438 67.5C28.45 94.114 14.73 144.387 11.191 171C10.642 175.125 8.826 186.375 7.155 196C3.366 217.818 1 235.791 1 242.754C1 247.063 1.465 248.556 3.414 250.505C4.742 251.832 6.879 253.178 8.164 253.494C9.449 253.81 21.75 252.286 35.5 250.105C49.25 247.925 66.575 245.198 74 244.045C118.943 237.067 150.154 229.118 183 216.287C197.737 210.53 207.318 205.258 216.573 197.812C249.727 171.142 263.702 117.822 248.608 75.59C245.075 65.706 237.393 51 235.763 51C235.278 51 235.143 50.578 235.462 50.061C235.781 49.545 235.469 48.758 234.769 48.311C234.069 47.865 232.85 46.246 232.06 44.713C229.183 39.135 215.78 25.98 206.966 20.085C192.396 10.339 178.49 4.498 162.75 1.512C151.733 -0.577997 130.067 -0.347998 118.5 1.981Z"
            />
          </svg>
            <div style="rotate: {spinDeg}deg" class="wheel" />
            {#if items.length > 1}
            <button class="spin-button" on:click={spinWheel} style="color: white"> </button>
            {/if}
          </div>
          
          {#if showSettingsPopup}
          <div class="winner-popup">
            <div class="popup-content flex items-center justify-center flex-col">
              <div class="flex flex-col gap-3 ">
                <div class="flex flex-nowrap flex-col border border-black  ">
                  {#each itemsNames as value}
                  <div class="flex-1 flex justify-start gap-2">
                  <input type="checkbox" id={value} name={value} value={value} checked={true} class="w-5" on:change={(e) => {
                    if (e.target.checked) {
                      items.push(items[itemsNames.indexOf(value)]);
                      itemsNames.push(value);
                    }else {
                      items.splice(itemsNames.indexOf(value), 1);
                      itemsNames.splice(itemsNames.indexOf(value), 1);
                    }
                  }}/>
                  <label class="font-bold" for={value}>{value}</label>
                </div>
                  {/each}

                </div>
                <button on:click={() => {
                  closeSettings();
                }} class="bg-black text-white text-2xl flex-1 mt-4 flex items-center gap-2 justify-center" style="border: 1px solid black"><Fa icon={faExplosion} /> Sauvegarder</button>
                </div>
                </div>
                </div>
                {/if}
          {#if showLoadingPopup}
          <div class="winner-popup">
            <div class="popup-content flex items-center justify-center flex-col">
              <div class="flex flex-col gap-3 ">
              <div class="font-bold inline-flex border border-black px-48 py-2 text-black" style="font-size:100px;">Daily</div>
            <div class="flex gap-3 w-full">

              <button on:click={() => {
                closeWinnerPopup();
              }} class="bg-white text-black text-2xl flex-1 mt-4 flex items-center gap-2 justify-center" style="border: 1px solid black"><Fa icon={faCheck} />Commencer le daily?</button>

               <button on:click={() => {
                openSettings();
              }} class="bg-black text-white text-2xl flex-1 mt-4 flex items-center gap-2 justify-center" style="border: 1px solid black"><Fa icon={faCog} /> Des absents?</button>
          </div>
            </div>
          </div>
          </div>
          {/if}
          {#if showWinnerPopup}
          <div class="winner-popup">
            <div class="popup-content flex flex-col">
              <div class="w-full">
                <img src={items[itemsNames.indexOf(winningItem)]} alt="avatar" width="50"/>
              <p class="font-bold whitespace-nowrap" style="font-size:100px;">{winningItem}</p>
              {#if time > 30}
              <div class="bg-black text-white"><p class="text-white" style="font-size:70px;">{time}</p></div>
              {:else if time > 10 && time < 31}
              <div class="bg-black text-white"><p class="text-red-500" style="font-size:70px;">{time}</p></div>
              {:else}
              <div class="bg-black text-white"><p class="text-red-700" style="font-size:70px;">{time}</p></div>
              {/if}

              <div class="overflow-scroll grid-cols-4 gap-2 grid">
              {#each filteredList as key,value}

                <div class="flex flex-col p-4 rounded-xl overflow-hidden h-fit text-white border border-black" style="box-shadow:  5px 5px 10px #7b7b7b,
                -5px -5px 10px #ffffff; ">
                {#if filteredList[value]['key'].startsWith('TMA')}
                <span class="bg-violet-400 text-center -mt-[16px] text-white -mx-[16px]">{filteredList[value]['key'] ?? 'Pas de Nombre'}</span>
                {:else}
                <span class="bg-blue-400 text-center -mt-[16px] text-white -mx-[16px]">{filteredList[value]['key'] ?? 'Pas de Nombre'}</span>
                {/if}
                 <span class="text-black">{filteredList[value]['fields']['summary'] ?? 'Pas de description'}</span> </div>
                {/each}
              </div>
              <button class="bg-black mt-4" on:click={pause}>Pause</button>
              <button class="bg-black mt-4" on:click={closeWinnerPopup}>Close</button>
            </div>
          </div>
          </div>
          {/if}

          <style>
            .wheel-container {
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 100%;
              overflow: hidden;
            }

            .wheel {
              clip-path: circle(45%);
              transition: 2s ease-in-out;
            }

            .spin-button {
              position: absolute;
              border-radius: 50%;
              translate: -50% -50%;
              aspect-ratio: 1/1;
              top: 50%;
              left: 50%;
              background-color: black;
              color: white;
              border: none;
              cursor: pointer;
            }


          .winner-popup {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background overlay */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10;
          }

          .popup-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
            width: 100%;
            align-items: center;
            height: 100%;
          }

          h2 {
            font-size: 24px;
            margin-bottom: 10px;
          }

          p {
            font-size: 18px;
            margin-bottom: 20px;
          }

          button {
            /* background-color: #007bff; Blue button color */
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
          }

          .pointer {
              position: absolute;
              left: 50%;
              translate: -50% -220px;
              rotate: 315deg;
              z-index: 2;
            }
            path {
            stroke: #646464;
            stroke-width: 1px;
            stroke-dasharray: 2,2;
            stroke-linejoin: round;
          }


          </style>

    </div>
