<script>
    export let logoInput;
    export let firstName;
    export let lastName;
    export let jobTitle;
    export let email;
    export let phone;
    export let translations;
    export let currentLanguage;
    export let clickToSave;
</script>
<form class="block p-4 flex-1 flex-shrink-0 w-full">
    <div class="border bg-green-100 p-4 mb-6 w-fit cursor-pointer font-bold">
  
      <label >
        <input class="p-4 border hidden border-black w-full max-w-lg" type="file" id="logo" accept="image/*" bind:this={logoInput}>
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
      {@html translations[currentLanguage].signatureInstructions.replace(/\n/g, "<br/>").replace('{gmail}', `<a href="https://mail.google.com/mail/u/0/#settings/general" target="_blank" class=" border items-center w-fit border-black whitespace-nowrap hover:bg-black hover:text-white transition-all px-1 mt-1">${translations[currentLanguage].gmail}</a>`)}
    </p>
  </form>