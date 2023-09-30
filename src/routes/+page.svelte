<script>
  import { onMount } from "svelte";

  let firstName = 'Sacha';
  let lastName = 'Duvivier';
  let jobTitle = 'Développeur Fullstack Symfony';
  let email = 'sduvivier@walibuy.com';
  let phone = '+33781701638';
  let logoUrl = '';
  let banner = '';

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

banner = "Votre signature vient d'être copiée dans votre Presse papier!";
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
<h1 class="text-6xl p-4 font-bold mt-20">Votre signature personnalisée <span class="bg-black color-white px-2 text-white">sweeek.</span></h1>
<div class="p-4 border border-black m-4 flex gap-5 flex-wrap">
  <div class="border border-black p-4 font-bold flex-1"><div class="p-4">Voici un exemple de mail:</div>
  <div class=" border p-4">Salut Sacha,
<br/><br/>J'espère que tu passes une bonne journée jusqu'à présent ! J'avais quelques idées en tête pour améliorer notre façon de travailler sur les projets et je voulais les partager avec toi.
<br/><br/>Réunions Hebdomadaires : Je pense qu'il serait super de mettre en place des réunions rapides chaque semaine pour discuter des progrès et des défis. Qu'en penses-tu ?
<br/><br/>Feedback Constant : J'aime l'idée d'encourager un feedback régulier. Ça peut vraiment aider à résoudre les problèmes avant qu'ils ne deviennent énormes.
<br/><br/>Formation et Développement : On pourrait aussi organiser des sessions de formation informelles. Je suis sûr(e) qu'il y a des trucs et astuces que chacun de nous pourrait partager.
<br/><br/>Quand est-ce que tu es dispo pour se rencontrer cette semaine et en discuter de vive voix ? Je suis libre mercredi après-midi et jeudi matin. Bien sûr, si ces jours ne te conviennent pas, je suis flexible !
<br/><br/>Merci d'avance pour ton temps. J'ai hâte d'entendre tes pensées sur ces idées.
<br/><br/>À bientôt !
<br/><br/>Cordialement,
  </div>
<div class="signature" contenteditable="true">
  <div style="background-color: black;
  color: white;
  padding: 20px;
  width: 90%;
  font-family: 'Satoshi', sans-serif; margin: auto;">
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
  <div class="bg-black text-white p-4 w-fit cursor-pointer font-bold">

    <label >
      <input class="block p-4 border hidden border-black w-full max-w-lg" type="file" id="logo" accept="image/*" bind:this={logoInput}>
      [Image Personnalisée]
    </label>
  </div>

  Prénom *
  <input class="block p-4 border border-black w-full max-w-lg" type="text" id="firstName" placeholder="Prénom" bind:value={firstName} required>
  Nom *
  <input class="block p-4 border border-black w-full max-w-lg" type="text" id="lastName" placeholder="Nom" bind:value={lastName} required>
  Rôle *
  <input class="block p-4 border border-black w-full max-w-lg" type="text" id="jobTitle" placeholder="Ton rôle" bind:value={jobTitle} required>

  Email *
  <input class="block p-4 border border-black w-full max-w-lg" type="email" id="email" placeholder="email@sweeek.fr" bind:value={email} required>

  <div>
  <label for="phone">Phone:</label>
  <input class="block p-4 border border-black w-full max-w-lg" type="tel" id="phone" placeholder="" bind:value={phone}>
  <button class="bg-black text-white p-4 mt-4 font-bold" on:click={clickToSave}>Clique pour Copier</button>
</form>
</div>
<style>
  .signature > div{
    width: 100%!important;
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