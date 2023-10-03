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
                <table style="font-size: .8em; font-weight: 100; min-width: 130px; text-align: center; margin: auto;">
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
                    style="width:200px;"
                    src="data:image/png;base64,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"
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
                      src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABcJJREFUaEPVmnmoVVUUxn9fo83ZgBplQYNGE4qRQRPNKSUNlhIVpGVEZWlBRlk0EdFgmtlARWVmg/VHk9EgRtJAZXOURkEzFBWVza34HufKuefu++65517ltf7wyT1nr72+vdf+1rCPyCQiNgQmA2OBnYD1as/6yN/fgI+Bh4CZkn6xXfI/EWGDnwK27yPGtjJjOTBK0jJlK//W/8j4GrhlwDADuAi4qhXkPvp8mgF49ffoowa2MmupAazogwe2leG15ysMIMq+3RffWx0AfjTRARsBa3V7EboJ4F9gCfAc8HLG2V9I+icXa7YEBgAjgcOAg4FNOwHVDQDfAbcAt0n6qh1jImJt4CTATFgpBnUCwCs+C7hMkt2kskSEXes04Pp2CaUqgO+BcZLsLl2TiDCdPwzsWFZpFQB2k4MlfdhskojYDtgP2AoYCPwNfJ2di0W1PCY1PiJ8Jl4EdisDol0APwH7Snq3qDxzgwnAmcDuvUz+J/AEcLmkt5uA2DojAv/tVdoFMF7S/ITxI4B7gZ1bTZh7bmq1z0+T5B2qk4iwzleANXvT2Q6AxyUdlZhoDHA/sEEbxudfdRY8pgmIO4CJ3QBgxtm16PcRsRewGFi3ovG1YbMknZNYHMcMZ50OgkkpuwMLJR2R1xARGwPvAyk/dbHxGTAI2LwEOLvTSEmvJUDcCkzqFMAkSbcXAFzig1hQbF+eDtwkaUVErJHx++xWvgw8I+nwBIADgEWdAhgs6fOakoiwy5gW+xcUny7Jfls8kPcAJ7fYCaccAyQ5xqyUiFgHcKBMlrhlXGiZJJeceaXOYZ4tGLRYklerQSJiFPBkCVc6QZJr3uICvAEMT40vA8CB58ACgKtNfwWFSYr1OxExDHizBABT6jUJAI8CR1cFMF/S+AIAc76TsLwMkvRNkx0YnQWvVhh8ds5NAEjN1/NamR2YI8nRNe9Cdge7RU3+MpVKShZHEXEBcG0r64EbJU1JAFgAHFN1B+6TVHcAI2IekN8Vpwf9egHwNNDAMAmDpku6IgHAsca5VYOU2YElkvYp7IAnubigbTNJPyQmN2OZWcpE6mYs9kGzNKUMAAclG2c36ZGI8KF+vmDsIan0OiIONceXcB+/MkKSGSfvrqZPL0wy2pcBYGVOn1caHBFOsD4Bts3NNVvSWYkdmJG1LFthcHekvyS7Yx5AVwLZXEl1rBMRZwBzcnPNkHReAoD7mWUKlHmSTkyMv9RVXzP0ZXfAqzJU0qc5N3Ka8Kq3PfttrKRHCqtnww2gjDS4YES4d+t8q2maXhaADXhMUh2VRYSjsaOyZaCkbwsAzFRmrFbygqSDEqtv5jKDNZV2AFjJZEkz/Z+so+DDZXZpSDeyd44F6nYlYcnPWSZqpqmTwgIlQbQLwIHqfAccwLWA+z+WuyWdmjDA9a3T6k2aLOHvThEkLUyMHQc80Grr2gVQ02fDfS72z36YIOmu1GQRcSTgMnT9wvN3gFMkublcXHkXMu8BW6wqAEW9QyQ1PawRsU0Wud2t+DLr4Dl7bUg9skLJO7J3K+P9vOoO5HX74DqRqzPGNYOkP8oYUXunXeO7BWCBpOPyhma3Pg82K9abuJrzfTcHhrYDuhs7MEWSD/VKyRUwjhM+H+bypETEEGAqYBLotYWSUtANAHtKer0A4LrMKP9s13op43Mz0q/OrYBdAOdULnZ6LhurSKcAnOg5f6lrTK3Oa6tOATRE0IjwHYArM6caq1w6BdDQkIqI4wEf4NUinV7ypQ7wXKAhq1xFaHou+Tq5Zq1reGX06fZ701Zgl4H0XLO6PeI2SRWZKOnO2sCIONvfMVRRVHHMhQbgjzyWAjtUUDJV0g09XBnRD/gIGFxBT5UhTl2G1z72cOHhVkmZyik/2ZWS3CM1AAcj8//qEBs/WtLylQEkIpzX2wXMIg7nZT636amDs2shf0FSphNdFaA/t/G1lluPN0tyQOQ/QRaVMhTRrDIAAAAASUVORK5CYII="
                      alt="Pinterest"
                      style="display: inline-block; width:15px;height:15px;"
                    />
                  </a>
                {/if}
                {#if translations[currentLanguage].linkTwitter}
                  <a href={translations[currentLanguage].linkTwitter}
                    ><img
                      width="15"
                      src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAACHRJREFUaEPVWgdsU1kWvTYx9ho7oShLSaEFhEkwEJoQTWYAUQQZqgChoQlE76ETZCAjQEvvIAi9OBF9IkQQXYBoBhNAJCxLIAXZJAqJwSS249G5s99iSfsubIYnRbZ57793z7333PI+EvpuGAyGf2i12nCFQqGUSCTS7+er6rfT6XTk5eWZCwsLLTqdziHIIflWoNTU1NbBwcG/qVSqX6RSaQ0i+tsAICJHcXFxxqdPn84YjcajMTExhZCdARgMhuqtW7f+JTw8/KBCofhnVWlZzLkul4vy8/MNWVlZC5KSkrIYwMuXL3uEhITEqdXqnmI2qeo1Dofjs9ls3mCxWPZKUlJSgqKjo3cFBgbGBAQEKKtaOLHn22y2zIKCgliJyWRq0qRJk1NKpbKdRCL5H06I3awq1tnt9i+5ublxkrS0NE1YWJhBLpdH/UTyk91uLzKbzWsk6enpkaGhoQaFQtGyKjTp7Zl2u704Nzf39woBOJ1OKiws5L+KRvXq1alOnToUEBDgrTz8XElJCX348IFwrlKppNq1a1N5XiEKQHFxMT148IDmzZtHr169Kle4wMBAWrFiBU2aNMlrAF++fKEDBw7QypUrqWbNmvy9e/fuvgGANABx6NAhmjp1KmsGwqpUKreg0JrFYqGIiAi6fPkyhYeHewXiyJEjtGzZMrJarbR06VKaM2dOhRYVZQFBEoCYOXMmA+nYsSNt27aNBYV5AWD27Nl08uRJ6tu3L23fvt09JwbJ58+faffu3aTX6wlJasOGDTR27FiSy+UVPu4RAOx048YNmjJlCmt7zZo17C7VqlXjQy5evMgaKygoYAEGDRpEQUFBlcpvt9vpypUrbN3s7Gzq3bs3HT58mPlU2fAYQFFREe3Zs4f5EBISwhrv3Lkzn/P161fWIuaaN2/On5MnT65MBrp16xZbz2g0sr9v3ryZ2rZtW+lzWOAxgP8+xK6UkJBA9evX588ePXqQVColkBBCJyYmUq1atdgq7dq1K5OEcLuHDx/SyJEj6f3799SvXz/aunUrNWrUSJTwXgPAgyaTid3n/v371L9/f9Z8WFgYH/z48WOaOHEiPXv2jAYOHMhcCQ0NLSXU8+fPaf78+ew+4M3OnTs9Jr9XFhAkefr0KQ0dOpQyMjJo2LBhtH//fo7bIOHt27dp3bp1HJHGjx/PmhUIifl3797RkCFD6MmTJ2wBrC0LZGWm8AkAXODcuXM0ffp0lLYMYMSIEUxqh8NB9+7dYyLjO+YgMOYyMzNpyZIldPz4cWrfvj2dOHGCGjduXG6srwiETwCEjRFWY2NjOS8gfMKlhLFjxw5OSnXr1mUXQcTB54ULF0in03G0atWqVWWKLnfeLwDgDiB1cnIyu9LBgwfd7oK5adOmUUpKCrsKQizcCmUHsiw44kvp4RcA8GmUGjExMVwvQTC4CwSDm12/fp1dC9kVv8GTuXPnshsBiC/DLwAEAfbu3ctlAFwJ37t160YKhYKnd+3axaUBsjm0jt8Is74OvwIAkePj42nTpk3UtWtXWrhwoZsPZrOZli9fzmRu1qwZJ0PkDl+HXwFAGJQYgwcP5giEbHzp0iV3bP/48SMDQp4AcZHkkM19GX4HAGFAWGRjgcCrVq1yu8uZM2c45oMzixcvZh58W9V6CuaHAECkmTFjBp0+fZpkMhln4jFjxrBs4MDVq1dpwoQJHFKR4EaNGuWp3O71fgeAKHP+/Hku5JChMSIjI/nfhBoHkWrt2rW0fv160mq1HH6RJ7wZfgeAGmn48OH0+vVr0mg0VKNGDS7YYJHVq1dzI4QBUiMaPXr0iEMqCC6m9P4epF8BIN4vWrSIUlNTafTo0dw3oEIFH9LS0jhbw+eF/uHmzZucAN++fcvZGr0E1nsy/AYATTiy8N27dzmhoURo2LAhJy7UOqhcoX1k4TZt2rCM4MDRo0d5DmU5EiCaGU+GXwBA47NmzeLGBAKgSENDLgxkarjIxo0bKTo6mhYsWOAuIVDooaRG4gNANEhCbyEGiM8AsrKymLBnz56lLl26cIjs0KFDqbPT09PZXa5du8YV6L59+6hly7+uoOBecDfM9ezZk1AAtmjRQoz83nVkws5oIRHjUV2i1RRqoLIacYRPhFX0Bgit4AL+hNCKrg4AUSdhT1hUzPDaAmi+UTagE6tXrx7FxcUxWSu6lgQfYC1cnQAw2s4+ffq4+wdYBeUHCjy4Ya9evdyELw+MVwBAPlx/bNmyhZsVXGZBY2Iy6ps3b9jfkcA6derE1kO4xbDZbByJ0F+gEMQ6NDoVDY8BCFcm0H5wcDBnWZTOnoQ/1Esg7rFjx9gCSUlJnC8wMIcbilOnTnE3hzVwK79YANEEVx4gKmp9xO5x48axT3sysA+IO2DAAEIQwP0SkpqQH3C9gtAKi8AKyCnlNT2iLYDNoCn4ObQFIOiwfOmmEDKR3HJycriD+5Y/CBC4wsRNB9wNfCjLRUUBgJ+/ePGCD0Pqh2nh/2q12hPFl1qL8hoNENylPPLDNVGegxtRUVGl9hAFACEQpTHucbAhMqlwB+QTAiIu+KCUigY4gIKwrDNFAfBVyB/5/LcAWuINjVwuj/zJXjEVWyyWeInRaGwUERFxQqlUdpJKpT/TSz5rXl7econBYFDpdLrNQUFBI2QymW/s/JE+893eNpvt3/n5+bGscZPJ1L1p06a/K5XKLv9HGbw+yul02rOzs/+VmZm5gwEkJyfLNRrNkAYNGmyUyWR1/87vi0tKSpxWq/ViRkbGPK1W+x+3zwNEVFTUr2q1eoZKpQIfPEuzXutT/INFRUUWq9X6h9lsjk9MTHyj1+tLSpE2ISFBodFoIlUqVbDL5fLtval42Spd6XK5vubk5Ly6c+dOjl6vd/93mz8BHs1dk6AkmIIAAAAASUVORK5CYII="
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