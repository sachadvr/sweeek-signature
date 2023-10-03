<script>
  import { onMount } from "svelte";
  import Form from "./Form.svelte";
  import { Fr, Es, Gb, Nl, De, It, Be, Pt } from "svelte-flag-icons";
  import Fa from "svelte-fa/src/fa.svelte";
  import { faCheck } from "@fortawesome/free-solid-svg-icons";
  import { translations } from "../lib/translations";

  let firstName = "Sacha";
  let lastName = "Duvivier";
  let currentLanguage = "fr";
  let jobTitle = translations[currentLanguage].currentJob;
  let email = translations[currentLanguage].currentEmail;
  let phone = "+33123456789";

  let logoUrl;
  let logoInput;
  let logoFile = null;
  let showBelgiumFlags = false;
  let banner = "";

  function changeLanguage(language) {
    currentLanguage = language;
    jobTitle = translations[currentLanguage].currentJob;
    email = translations[currentLanguage].currentEmail;
  }

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        logoUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const clickToSave = (event) => {
    event.preventDefault();

    const signature = document.querySelector(".signature").innerHTML;

    function listener(e) {
      e.clipboardData.setData(
        "text/html",
        signature
      );
      e.clipboardData.setData(
        "text/plain",
        signature
      );
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    banner = translations[currentLanguage].saveMessage;
  };

  onMount(() => {
    logoInput.addEventListener("change", handleLogoUpload);
  });

  $: if (banner) {
    setTimeout(() => {
      if (
        !String(document.querySelector(".banner").classList).includes(
          "slideout"
        )
      ) {
        document.querySelector(".banner").classList.add("slideout");
        document
          .querySelector(".slideout")
          .addEventListener("animationend", () => {
            document.querySelector(".slideout").remove("slideout");
            banner = "";
          });
      }
    }, 3000);
  }
</script>

<div style="font-family: Quicksand;">
  {#if banner}
    <div
      class="z-50 flex gap-3 banner bg-green-300 text-black p-4 font-bold text-4xl max-md:text-3xl fixed w-full top-0 transition-all animate"
    >
      <Fa icon={faCheck} />
      {banner}
    </div>
  {/if}
  <div class="mt-10 flex gap-3 mx-6">
    <Fr
      on:click={() => {
        changeLanguage("fr");
      }}
    />
    <Es
      on:click={() => {
        changeLanguage("es");
      }}
    />
    <Gb
      on:click={() => {
        changeLanguage("en");
      }}
    />
    <It
      on:click={() => {
        changeLanguage("it");
      }}
    />
    <Pt
      on:click={() => {
        changeLanguage("pt");
      }}
    />
    <De
      on:click={() => {
        changeLanguage("de");
      }}
    />
    <Nl
      on:click={() => {
        changeLanguage("nl");
      }}
    />
    <div class="relative">
      <Be
        on:click={() => {
          showBelgiumFlags = !showBelgiumFlags;
        }}
      />
      {#if showBelgiumFlags}
        <div
          class="absolute top-0 left-0 bg-white border translate-y-[50%] border-black p-2 flex gap-2 mt-2"
        >
          <Fr
            on:click={() => {
              changeLanguage("frbe");
              showBelgiumFlags = !showBelgiumFlags;
            }}
          />
          <Nl
            on:click={() => {
              changeLanguage("nlbe");
              showBelgiumFlags = !showBelgiumFlags;
            }}
          />
        </div>
      {/if}
    </div>
  </div>
  <h1
    class="mt-8 text-6xl max-md:text-5xl p-4 font-bold"
    style="line-height:80px;"
  >
    {@html translations[currentLanguage].signature.replace(
      "{brand}",
      '<div class="bg-black color-white w-fit inline px-2 text-white">sweeek.</div>'
    )}
  </h1>
  <div class="p-4 border border-black m-4 flex gap-5 flex-wrap">
    <div class="border border-black p-4 font-bold w-full flex-1">
      <div class="p-4">{translations[currentLanguage].examplePreviewEmail}</div>
      <div class=" border p-4">
        {@html translations[currentLanguage].exampleMessage
          .replace("{firstName}", firstName)
          .replace(/\n/g, "<br/>")}
      </div><div>
      <div class="signature">
          <table
          cellspacing="0"
            style="background-color: white;
  color: black;
  width: 100%;
  min-width: 100%;
  font-family: 'Trebuchet MS', sans-serif;
  "
          >
            <tr style="display:block; padding-bottom: 1rem;">
              <td style="padding: 0 1 rem">
                <table class="label" style="font-weight: 700; font-size: 2em; line-height: 32px; font-family: sans-serif; white-space: nowrap;">
                  <tr>
                    <td>
                      {firstName}
                      {lastName}
                    </td>
                  </tr>

                </table>

                <table class="label" style="font-weight: 500; font-size: 1em;white-space: nowrap;">
                  <tr>
                    <td>{jobTitle}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr style="padding-bottom: 1rem;  ">

              <td style="padding: 0 10px 0 0; line-height: 16px;">
                <table class="label" style="text-decoration: none; color: black; font-size: .7em; min-width: 150px;">
                  <tr style="line-height: 16px;">
                    <td width="16" height="16" style="width:16px;height:16px;">
                      <img width="16" height="16" style="width:16px;height:16px;" src="https://walibuy-image.s3.eu-west-1.amazonaws.com/icons/mail.png" alt="Mail" />
                    </td>
                    <td>
                      <a
                  style="text-decoration:none;color:black; padding-left:3px;"
                  href={'mailto:' +email}
                  >{email}</a
                >
                    </td>
                  </tr>
                  <tr style="line-height: 16px;">
                    <td width="16" height="16" style="width:16px;height:16px;">
                      <img width="16" height="16" style="width:16px;height:16px;" src="https://walibuy-image.s3.eu-west-1.amazonaws.com/icons/website.png" alt="Website" />
                    </td>
                    <td style="padding-left: 3px;">
                      <a
                  style="text-decoration:none;color:black;"
                  href={translations[currentLanguage].linkSweeek}
                  >{translations[currentLanguage].linkSweeek.substring(
                    translations[currentLanguage].linkSweeek.indexOf("//") + 2
                  )}</a
                >
                    </td>
                  </tr>
                    <tr style="line-height: 16px;">
                      <td width="16" height="16" style="width:16px;height:16px;">
                        <img width="16" height="16" style="width:16px;height:16px;" src="https://walibuy-image.s3.eu-west-1.amazonaws.com/icons/phone.png" alt="Phone" />
                      </td>
                      <td style="text-decoration:none;color:black;padding-left: 3px;">
                        {phone}
                      </td>
                    </tr>
                    </table>
              <td style="padding: 0 20px 0 20px; background:none; border-left:solid 2px black; border-left-width:2px 0 0 0; height:2px;">
                <table style="font-size: .7em; font-weight: 100; min-width: 130px; text-align: center; margin: auto;">
                <tr><td><a
                  style="text-decoration:none;color:black;"
                  href="#"
                  >270 Avenue de l'Espace,</a
                ></td></tr>
                <tr><td>
                  <a
                  style="text-decoration:none;color:black;"
                  href="#"
                  >59118 Wambrechies</a
                ></td></tr>
                </table>
              </td>
              <td style="padding: 0 20px 0 20px; background:none; border-left:solid 2px black; border-left-width:2px 0 0 0; height:2px; margin:0px 0px 0px 0px;">


                {#if logoUrl}
                <img
                    width="200"
                    src={logoUrl}
                    alt="Logo"
                    class="logo"
                  />
                {:else}
                <table>
                  <tr><td><img
                    width="200"
                    src="https://walibuy-image.s3.eu-west-1.amazonaws.com/icons/sweeek.png"
                    alt="Placeholder Logo"
                    class="logo"
                  /></td></tr>
                </table>
                {/if}
              </td>
            </tr>
            <tr style="line-height: 15px;">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td style="background:none; border:solid 12px black; border-width:12px 0 0 0; height:12px; margin:0px 0px 0px 0px;">
              </td>
              <td style="background:none; border:solid 12px black; border-width:12px 0 0 0; height:12px; margin:0px 0px 0px 0px;">
              </td>
              <td style="background:none; border:solid 12px black; border-width:12px 0 0 0; height:12px; margin:0px 0px 0px 0px;">
              </td>
            </tr>

            {#if false == true}
            <tr>
              <td
                style="background:none; border:solid 12px black; border-width:12px 0 0 0; height:12px; margin:0px 0px 0px 0px;"
              >
                <a href="https://instagram.com/sweeekofficial/">
                  <img
                    width="15"
                    src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABTlJREFUaEPdmlnMXVMUx39/w4P5qYbSmodQoY2YUqTEi0pIDC3a6iAaWuMLFSEkhieEmhraKjWVhAQvao7Wg6ihJWmrQmoIL8Z6MCz53+zz5eTk3nvOPd+5X+5nPfTk69l77fVfe+21/nudK5JExK7ANcAFwGHATtm7AXn+CWwEngful/S77ZL/iQgb/Bpw8IAYW2bGZuAsSZuUPP/xKDI+A7cJmGgANwF3lEEe0PeLDMDeP2ZADSwza50BbBvAA1tmePZ+mwFE1dGDOG44AAz8O+Br4AfgnxzA34C/C4B3AHbL/d/2wN7A/sDYLCP26qQ6AD5zHgZekWTDhy0RYSBnpzo0oReFvQD4C7gWeETSv70sUnVsRGwHXAHcC+xYZV5VADbehWN1XmlEjAcOAsYAuwMOi0xszB7pj1+APGiH26/AT8AWSd8U9J4JvFoFRFUACyQ9lC0SETOBG4CjqnipwpgNwN2SnsqtsQBYXDa3CgDH/LFZ2ETEA8DCMsU13y+WdJXnpnD6BOh6JqoAuEzS40mpPb+ipnHtpr2bvHwIcDOwMzBD0sq03jzgsW7rlQFwqhybZZuIWN9g2PwMjJfklGuPZ5Rmg6SW1yNiH+Dbbim2DMBWSeOSMh9Y5/wq8gewJtUJj98XODl5OJu/UdLhuZifBjyb/h4naWta10/PbytlANZK8sL2xhTgzRLrtwC3Ai9KMn8fkojw/eJ84DbgQKsEpklaFRHOYM46k9OEKZLeTuvaESfVBfCypHOToouAp7sAsPfmFg0vjo8Ix/ky4MIEwtx+r5SGs+EXS3omrfsScE5dAPakveYduBRY3kGRjfeiLV4VEa4H3rmM5ZrxrsllMl+kPMcg2slsSU8kXS8A59UF8Jyk6UnRXKCVjQrisJmQeT4ijk8ePrIwzglgjqQPkz7vhPP/AW10zpO0NI0zUJ+PtlJ2BlZKmpEUXQ482kbLzKwARcQJwFtd6Lmp+2k5ELOAlqcLMl/SkrSui9sldQGskOTQcVhcCTxYUORsM8beT2HzKVD0fHHtocKYzoPphHcjL0OVPyIM0EBr7cBSSS4mBuAKaRaal9WSzFv8/hTAhamKTJb0fppnfnVGYdLVklzxrddh6/CtBWCJpPlJ0XXAPQUtyyS1lHcA2GndhZJauxkRzkizCwOvl2RG6vcOW4dvXwAslzQnLVSJfCUrykKkMQC9hJCL0HtV4scFKxdCbwCn9yuEejnE5v+l7BHwQZ/omjASh7hKGp0l6ckURscB77TJKpmDnbVOlfRRGu/Y9xkoSmNptEoh+yoVMud4HzqDsFFFHm/Pu5Blxu8CfG5G2gZAY4WsKpVww3V6jko4nE4EJiXjbPQHBSrhOS2a0kYaoxK9kDkbZA+3dqKTRIQ9b07VyXhPbYzM9UqnfV+4BVjVhk672rp1f3uHsMljboxO173QeBfWAq1LCbBfYqdVvzk0dqHp55WyU5Stl3R0SgjDvlJaT/5Sb2baSpl9lEYv9bZz1LdVDGKIfKWtNT9f1GCHwhebu7J2SlrDvacWI+0mZReabK5bi1MlvZ5XFhE+nP6utmfN1uKPwJdZByLTHRGNtxat2yBMqR/uc3PXFyfT9kabu3nH+257n79qSvq+bIurvE8NrKn9bq8XbXGKNQAXLz/rfOBwmvQHDj9bn3x7lapnoFe9Izb+f/GRb9R/ZnU+v3PE9rzZhW7MfmqwDnCPfjSJf/gxKfuxx6GpO+znaBAb78K6eSh1pYuGm1duuB4xgF/v3a7/Iv3cxp+ifL/mP8KQ4TIEcTSgAAAAAElFTkSuQmCC"
                    alt="Instagram"
                    style="display: inline-block; width:15px;height:15px;"
                  />
                </a>
                {#if translations[currentLanguage].linkPinterest}
                  <a href={translations[currentLanguage].linkPinterest}>
                    <img
                      width="15"
                      src="data:image/png;base64, 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"
                      alt="Pinterest"
                      style="display: inline-block; width:15px;height:15px;"
                    />
                  </a>
                {/if}
                {#if translations[currentLanguage].linkTwitter}
                  <a href={translations[currentLanguage].linkTwitter}
                    ><img
                      width="15"
                      src="data:image/png;base64, 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"
                      alt="X"
                      style="display: inline-block; width:15px;height:15px;"
                    /></a
                  >
                {/if}
                <a href={translations[currentLanguage].linkFacebook}>
                  <img
                    width="15"
                    src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmJJREFUaEPtmrtrFUEUh78fFj4RRQ2S0vejEMXCBzaCjZaihZ0PEESxNTY26h+gliJ2QQs7rYNE0EJiZcTE0iqaJiZCjB45l12VcO/O3utO7izsgb1bzNzd33fOnjOzOyMyM7M1wHXgDLADWJm3JXL+DnwEngL3JH1zXfIfM3PBL4CtiYgNyZgETkqaUOb5dzUSn8NNAPsd4CZwJ4ScaPuQA7j39yUqMCRrzAHm+pywM8DXTOk6wI+yNucAVrZ3Rf0WgCfAM2BE0vTi65rZemAQOAg8LrrvUgOMAJckfSrjDDNziM+pADwCLkvyCJSylABeAcclzZdS/ndwTSICP4HdPuh0Iz4bYJMAGJZ0rlvxKQGcluQVp5SZ2SpgedZ5M/C+n0n8C9jUrlT+K8rM9gC3gROATypLW+wyOiVpoEiNmW0B3nY5gP25ZGyAcUnu3Y5mZveBq6VdvqhjbIA3kg4FAF4Cx1IFeC3pcADgA7CzAejVA4H/NREIOTZ2EtciAj+ATok6K8mTtKiM7gVWdOhwAbgSeySel5QP/aGId9VuZj4FP19nAJ+GH6kzwBdgQy0BzGwjMBV65qqoQlFywMyOAqN1BrgIPFwSAMBfPNrZgiT/7lNURtcCy9p0uJV9bC5kqOIRKrpBLQayBqCZTocy/T/amxwIOa+pQs0bmVnzUh9zhaapQmWqUMxFvtgRaC3yxVxmjQ3QWmYdAu6GQtVje2yAG/lWgzFgW48i+zUb9Y0fB/LNHtuB54Cfq7RYEXDxpyRNtgDczGw1cA04C+yqaPW+SgDfbjOebbd5IGnWdf8GkZyyIxcjNxYAAAAASUVORK5CYII="
                    alt="Facebook"
                    style="display: inline-block; width:15px;height:15px;"
                  /></a
                >
              </td>
            </tr>
            {/if}
          </table>
      </div>
    </div>
    </div>

    <Form
      bind:logoInput
      bind:firstName
      bind:lastName
      bind:jobTitle
      bind:email
      bind:phone
      {translations}
      bind:currentLanguage
      {clickToSave}
    />
  </div>
  <style>
    .signature > table {
      display:block;
      overflow: scroll;
      padding: 20px;
    }
    table {
      min-width: 0!important;
      white-space: unset!important;
    }

    @keyframes slidein {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes slideout {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-100%);
      }
    }

    .banner {
      animation: slidein 1s ease-in-out;
    }
    .slideout {
      animation: slideout 1s ease-in-out forwards;
    }
    img {
      max-width: unset!important;
    }
  </style>
</div>