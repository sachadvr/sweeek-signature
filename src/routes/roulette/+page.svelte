<script>

  import "./style.css";

  import { onMount, beforeUpdate, afterUpdate } from "svelte";
    import { select, arc, pie } from "d3";
    import { faCheck, faCog, faExplosion } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa/src/fa.svelte";
    import Popup from "./popup.svelte";
  import Tma from "./tma.svelte";
    let json = [];
    let spinDeg = 0;
    let showWinnerPopup = false;
    let showTMAPopup = false;
    let showLoadingPopup = true;
    let showSettingsPopup = false;
    let isSpinning = false;
    let currentTimer;
    let filteredList = [];
    let time = 60;
    let dictionary = {};
    let copydictionary = {};
    let currentKey = "";
    let currentSummary = "";
    let currentDescription = "";


    const startTimer = () => {
      currentTimer = setInterval(() => {
        time --;
        if (time < 1) {
          closeWinnerPopup()
        }
      }, 1000)
    }

    let colors = [];
    let size = 700

    let selectedItem = null;
    let winningItem = null;
    const closeWinnerPopup = () => {
      showWinnerPopup = false;
      showLoadingPopup = false;
      clearInterval(currentTimer);
      delete dictionary[winningItem];

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
        const anglePerSegment = 360 / Object.keys(dictionary).length;
        const selectedIndex = Math.floor(currentAngle / anglePerSegment);
        const selectedItem = Object.keys(dictionary)[selectedIndex];
        winningItem = selectedItem;
        filteredList = jsonTest.filter((e) => {
          return e.fields.assignee?.displayName == winningItem;
        });
        console.log(filteredList);
        if (Object.keys(dictionary).length > 0) {
          setTimeout(() => {
            showWinnerPopup = true;
            startTimer();
          }, 1000);
        }
      }
    };

    const spinWheel = (e) => {
    (e != null) ? e.stopPropagation() : console.log('Starting Daily');
    if (!isSpinning && Object.keys(dictionary).length > 0) {
      isSpinning = true;
      const randomDegrees = Math.random() * 720 + 1080;
      spinDeg += randomDegrees;
    }
  };


    let segmentColors = [...colors];

    const colorArrayLengthMatcher = () => {
      if (colors.length !== Object.keys(dictionary).length) {
        segmentColors = Array.from(
          { length: Object.keys(dictionary).length },
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
      const dataWithArc = pieGenerator(Object.keys(dictionary));
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
      .attr("xlink:href", (_, i) => dictionary[Object.keys(dictionary)[i]])
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)[0] - (size/13/2)}, ${arcGenerator.centroid(d)[1] - (size/13/2)})`)
      .style("rotate", (d) => '${d}deg')
      .style("clip-path", "url(#clip-circle)")
      .attr("width", size/13)
      .attr("height", size/13);
  };


    afterUpdate(svgRender);
    async function FetchData() {
      try {
          const response = await fetch('https://qwcqxepot0.execute-api.eu-west-3.amazonaws.com/jira/', {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          });

          if (response.ok) {
              const data = await response.json(); // Parse the JSON response
              return data;
          } else {
              throw new Error('Network response was not ok: ' + response.statusText);
          }
      } catch (error) {
          console.error('Error:', error);
          throw error; // Rethrow the error to handle it in the calling code if necessary
      }
  }


    let totalstr = "";
    let word = '';
    const statuses = { WORKING: 0, FINISHED: 1, SHOWBUTTON: 3 };
    let currentStatus = statuses.WORKING;
    let intervalId;

    let jsonTest = [];
    onMount(async () => {

        const json = await FetchData();
        jsonTest = json;

    console.log(json);

   let items = [... new Set(json.map((e) => {
      if (e['fields']['assignee'] != null) {
        return e['fields']['assignee']['avatar'] ;
      }
    }))];

    let itemsNames = [... new Set(json.map((e) => {
      if (e['fields']['assignee'] != null) {
        return e['fields']['assignee']['displayName'];
      }
    }))];
    dictionary = {}
    for (var i = 0; i < items.length; i++) {
      dictionary[itemsNames[i]] = items[i];
    }
    copydictionary = {...dictionary};
    console.log(dictionary);

    const doc = document.querySelector('.wheel').addEventListener('transitionend', () => {
      isSpinning = false;
      getSelectedPrice();
    });
    const wheel = document.querySelector('.wheel').addEventListener('click', (e) => {
      spinWheel(e);
    });
    });


    function setStatus(status) {
      currentStatus = status;
    }

    function isStatus(status) {
      return currentStatus == status;
    }

    const setWord = (str) => {
      totalstr = "";
      word = str;
      return getWriting();
    }

    function openTicket(ticket) {
      currentKey = ticket['key'];
      currentSummary = ticket['fields']['summary'];
      currentDescription = ticket['fields']['description'];
      showTMAPopup = true;
    }
    function closeTicket() {
      showTMAPopup = false;
    }

    const getWriting = async () => {
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


  </script>



      <div class="w-full h-[100vh] bg-white relative flex items-center justify-center" id="scrollToRoulette">

        <div class="wheel-container">
              <svg
              class="pointer"
              width=100
              height=100
              viewBox="0 0 255 254"
              fill=white
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M118.5 1.981C80.351 9.662 54.457 31.12 39.438 67.5C28.45 94.114 14.73 144.387 11.191 171C10.642 175.125 8.826 186.375 7.155 196C3.366 217.818 1 235.791 1 242.754C1 247.063 1.465 248.556 3.414 250.505C4.742 251.832 6.879 253.178 8.164 253.494C9.449 253.81 21.75 252.286 35.5 250.105C49.25 247.925 66.575 245.198 74 244.045C118.943 237.067 150.154 229.118 183 216.287C197.737 210.53 207.318 205.258 216.573 197.812C249.727 171.142 263.702 117.822 248.608 75.59C245.075 65.706 237.393 51 235.763 51C235.278 51 235.143 50.578 235.462 50.061C235.781 49.545 235.469 48.758 234.769 48.311C234.069 47.865 232.85 46.246 232.06 44.713C229.183 39.135 215.78 25.98 206.966 20.085C192.396 10.339 178.49 4.498 162.75 1.512C151.733 -0.577997 130.067 -0.347998 118.5 1.981Z"
              />
            </svg>
              <div style="rotate: {spinDeg}deg" class="wheel" />
            </div>


            {#if showSettingsPopup}
            <div class="winner-popup">
              <div class="popup-content flex items-center justify-center flex-col">
                <div class="flex flex-col gap-3 ">
                  <div class="flex flex-nowrap flex-col border border-black  ">
                    {#each Object.keys(dictionary) as value}
                    <div class="flex-1 flex justify-start gap-2">
                    <input type="checkbox" id={value} name={value} value={value} checked={true} class="w-5" on:change={(e) => {
                      const avatar = dictionary[value];
                      window.dictionary = dictionary;
                      if (e.target.checked) {
                        console.log(copydictionary);
                        dictionary[value] = copydictionary[value];
                      }else {
                        delete dictionary[value];
                      }
                      console.log(dictionary);
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
                <div class="flex flex-col gap-3 relative">
                <div class="flex flex-col items-center" style="font-size:100px; h-[180px] w-[300px]">
        <img class="-mb-5 z-[11] w-full max-w-[500px]" alt="" src="https://alicegarden.atlassian.net/s/-3o5b4z/b/5/e932d65b444872da6155b2fc89562bb8/_/jira-logo-scaled.png">
        Daily
                </div>
              <div class="flex gap-3 w-full absolute -bottom-16">

                {#if jsonTest.length > 0}
                <button on:click={() => {
                  closeWinnerPopup();
                }} class="bg-white text-black text-2xl flex-1 mt-4 flex items-center gap-2 justify-center" style="border: 1px solid black"><Fa icon={faCheck} />C'est parti!</button>
                 <button on:click={() => {
                   openSettings();
                  }} class="bg-black text-white text-2xl flex-1 mt-4 flex items-center gap-2 justify-center" style="border: 1px solid black"><Fa icon={faCog} /> Des absents?</button>
                  {/if}
            </div>
              </div>
            </div>
            </div>
            {/if}
            {#if showTMAPopup}
            <Popup currentKey={currentKey} currentSummary={currentSummary} currentDescription={currentDescription} closeTicket={closeTicket} />
            {/if}
            {#if showWinnerPopup}
            <Tma dictionary={dictionary} closeWinnerPopup={closeWinnerPopup} openTicket={openTicket} pause={pause} time={time} winningItem={winningItem} filteredList={filteredList} showWinnerPopup={showWinnerPopup} showTMAPopup={showTMAPopup}/>
            {/if}



      </div>
