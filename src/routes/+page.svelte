<script>
  import { onMount } from "svelte";
  import { Fr, Es, Gb } from 'svelte-flag-icons';

  import {translations} from '../lib/translations'
  let firstName = 'Sacha';
  let lastName = 'Duvivier';
  let currentLanguage = 'fr';
  let jobTitle = translations[currentLanguage].currentJob;
  let email = 'sduvivier@walibuy.com';
  let phone = '+33781701638';
  let logoUrl = '';
  let banner = '';


function changeLanguage(language) {
  currentLanguage = language;
  jobTitle = translations[currentLanguage].currentJob;
}



  let logoFile = null;

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
const clickToSave = () => {
function listener(e) {
  e.clipboardData.setData("text/html", document.querySelector('.signature').innerHTML);
  e.clipboardData.setData("text/plain", document.querySelector('.signature').innerHTML);
  e.preventDefault();
}
document.addEventListener("copy", listener);
document.execCommand("copy");
document.removeEventListener("copy", listener);

banner = translations[currentLanguage].saveMessage;
};
  let logoInput;

  onMount(() => {
    logoInput.addEventListener('change', handleLogoUpload);

  });

  $: if (banner) {
    setTimeout(() => {
      if (!String(document.querySelector('.banner').classList).includes('slideout')) {
        document.querySelector('.banner').classList.add('slideout');
        document.querySelector('.slideout').addEventListener('animationend', () => {
          document.querySelector('.slideout').remove('slideout');
          banner = "";
        })
      }
    }, 3000)
  }
</script>

<div style="font-family: Quicksand;">
{#if banner}
<div class="banner bg-green-300 text-black p-4 font-bold text-5xl absolute w-full top-0 transition-all animate">{banner}</div>
{/if}
<div class="mt-10 flex gap-3 mx-6">
  <Fr on:click={() => {changeLanguage('fr')}} />
  <Gb on:click={() => {changeLanguage('en')}} />
  <Es on:click={() => {changeLanguage('es')}}  />
</div>
<h1 class="mt-8 text-6xl p-4 font-bold" style="line-height:80px;">{@html translations[currentLanguage].signature.replace('{brand}', '<div class="bg-black color-white w-fit inline px-2 text-white">sweeek.</div>')}</h1>
<div class="p-4 border border-black m-4 flex gap-5 flex-wrap">
  <div class="border border-black p-4 font-bold flex-1"><div class="p-4">{translations[currentLanguage].examplePreviewEmail}</div>
  <div class=" border p-4">
    {@html translations[currentLanguage].exampleMessage.replace('{firstName}', firstName).replace(/\n/g, "<br/>")}
  </div>
<div class="signature">
  <div style="background-color: black;
  color: white;
  padding: 20px;
  width: 100%;
  font-family: 'Satoshi', sans-serif;
  margin-left: 1rem; margin-right: 1rem;">
  <table>
      <tr>
      <td style="padding: 0 1rem;">
  {#if logoUrl}
    <img width="250" style="padding-right: 2rem;" src={logoUrl} alt="Logo" class="logo">
  {:else}
    <img width="250"  style="padding-right: 2rem;"  src="https://alicegarden.atlassian.net/s/-3o5b4z/b/5/e932d65b444872da6155b2fc89562bb8/_/jira-logo-scaled.png" alt="Placeholder Logo" class="logo">
  {/if}
  </td>
  <td style="padding: 0 1rem;">

      <div class="label" style="font-weight: 700;">{firstName} {lastName}</div>

      <div class="label">{jobTitle}</div>
      <div class="label">{email}</div>
      <div class="label">{phone}</div>
  </td>

</tr>
</table>
</div></div>
</div>

<form class="block p-4 flex-1 flex-shrink-0 w-full">
  <div class="border bg-green-100 p-4 mb-6 w-fit cursor-pointer font-bold">

    <label >
      <input class="block p-4 border hidden border-black w-full max-w-lg" type="file" id="logo" accept="image/*" bind:this={logoInput}>
      {translations[currentLanguage].uploadImage}
    </label>
  </div>

  {translations[currentLanguage].firstName} *
  <input class="block p-4 border border-black w-full max-w-lg" type="text" id="firstName" placeholder={translations[currentLanguage].firstName} bind:value={firstName} required>
  {translations[currentLanguage].lastName} *
  <input class="block p-4 border border-black w-full max-w-lg" type="text" id="lastName" placeholder={translations[currentLanguage].lastName} bind:value={lastName} required>
  {translations[currentLanguage].jobTitle} *
  <input class="block p-4 border border-black w-full max-w-lg" type="text" id="jobTitle" placeholder={translations[currentLanguage].jobTitle} bind:value={jobTitle} required>

  {translations[currentLanguage].email} *
  <input class="block p-4 border border-black w-full max-w-lg" type="email" id="email" placeholder={translations[currentLanguage].email} bind:value={email} required>

  <div>
  <label for="phone">{translations[currentLanguage].phone} *</label>
  <input class="block p-4 border border-black w-full max-w-lg" type="tel" id="phone" placeholder={translations[currentLanguage].phone} bind:value={phone}>
  <button class="bg-black text-white p-4 mt-4 font-bold" on:click={clickToSave}>{translations[currentLanguage].copyButton}</button>

  <p class="mt-6">
    {@html translations[currentLanguage].signatureInstructions.replace(/\n/g, "<br/>")}
  </p>
</form>
</div>
<style>
  .signature > div{
    margin: 0!important;
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
</style>
</div>