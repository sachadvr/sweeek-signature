<script>
   import { Fr, Es, Gb, Nl, De, It, Be, Pt } from "svelte-flag-icons";
    export let logoInput;
    export let firstName;
    export let lastName;
    export let jobTitle;
    export let email;
    export let phone;
    export let translations;
    export let currentLanguage;
    export let clickToSave;

    let showBelgiumFlags = false;


    function changeLanguage(language) {
    currentLanguage = language;
    jobTitle = translations[currentLanguage].currentJob;
    email = translations[currentLanguage].currentEmail;
  }
</script>
<form class="block p-4 flex-1 flex-shrink-0 w-full">
    <div class="border bg-green-100 p-4 mb-6 w-fit cursor-pointer font-bold">

      <label >
        <input class="p-4 border hidden border-black w-full max-w-lg" type="file" id="logo" accept="image/*" bind:this={logoInput}>
        {translations[currentLanguage].uploadImage}
      </label>
    </div>

    <div class="mt-10 flex gap-3 mb-4">
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

    {translations[currentLanguage].firstName} *
    <input class="block p-4 border border-black w-full max-w-lg" type="text" id="firstName" placeholder={translations[currentLanguage].firstName} bind:value={firstName} required>
    {translations[currentLanguage].lastName} *
    <input class="block p-4 border border-black w-full max-w-lg" type="text" id="lastName" placeholder={translations[currentLanguage].lastName} bind:value={lastName} required>
    {translations[currentLanguage].jobTitle} *
    <input class="block p-4 border border-black w-full max-w-lg" type="text" id="jobTitle" placeholder={translations[currentLanguage].jobTitle} bind:value={jobTitle} required>

    {translations[currentLanguage].email} *
    <input class="block p-4 border border-black w-full max-w-lg" type="email" id="email" placeholder={translations[currentLanguage].email} bind:value={email} required>

    <div>
    <label for="phone">{translations[currentLanguage].phone}</label>
    <input class="block p-4 border border-black w-full max-w-lg" type="tel" id="phone" placeholder={translations[currentLanguage].phone} bind:value={phone}>
    <button class="bg-black text-white p-4 mt-4 font-bold" on:click={clickToSave}>{translations[currentLanguage].copyButton}</button>

    <p class="mt-6">
      {@html translations[currentLanguage].signatureInstructions.replace(/\n/g, "<br/>").replace('{gmail}', `<a href="https://mail.google.com/mail/u/0/#settings/general" target="_blank" class=" border items-center w-fit border-black whitespace-nowrap hover:bg-black hover:text-white transition-all px-1 mt-1">${translations[currentLanguage].gmail}</a>`)}
    </p>
  </form>