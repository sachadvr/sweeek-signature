<script>
    export let currentKey;
    export let currentSummary;
    export let currentDescription;
    let source = currentDescription;
    import { marked } from 'marked';
    import j2m from 'jira2md';
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faArrowRight, faPlusCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
    export let closeTicket;
    document.querySelector('body').addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTicket();
        }
    });

    // Fonction pour convertir le format ADF (Atlassian Document Format) en markdown
    function adfToMarkdown(node) {
        if (!node) return '';
        
        if (typeof node === 'string') {
            return node;
        }
        
        if (!node.type) return '';
        
        switch (node.type) {
            case 'doc':
                if (node.content && Array.isArray(node.content)) {
                    return node.content
                        .map(adfToMarkdown)
                        .filter(Boolean) // Filtrer les chaînes vides
                        .join('\n\n');
                }
                return '';
                
            case 'paragraph':
                if (node.content && Array.isArray(node.content) && node.content.length > 0) {
                    const text = node.content.map(adfToMarkdown).join('').trim();
                    return text || '';
                }
                return '';
                
            case 'text':
                let text = node.text || '';
                // Gérer les marques (marks) comme les liens, gras, italique, etc.
                // L'ordre est important : d'abord les marques de formatage, puis les liens
                if (node.marks && Array.isArray(node.marks)) {
                    // Appliquer les marques de formatage d'abord
                    node.marks.forEach(mark => {
                        if (mark.type === 'strong') {
                            text = `**${text}**`;
                        } else if (mark.type === 'em') {
                            text = `*${text}*`;
                        } else if (mark.type === 'code') {
                            text = `\`${text}\``;
                        }
                    });
                    // Ensuite appliquer les liens (qui doivent englober le texte formaté)
                    node.marks.forEach(mark => {
                        if (mark.type === 'link' && mark.attrs && mark.attrs.href) {
                            text = `[${text}](${mark.attrs.href})`;
                        }
                    });
                }
                return text;
                
            case 'bulletList':
                if (node.content && Array.isArray(node.content)) {
                    return node.content.map(adfToMarkdown).join('\n');
                }
                return '';
                
            case 'listItem':
                if (node.content && Array.isArray(node.content)) {
                    const items = node.content.map(adfToMarkdown).filter(Boolean);
                    // Si plusieurs items, les joindre avec des sauts de ligne
                    const content = items.join('\n');
                    // Ajouter le préfixe de liste uniquement au premier niveau
                    return `- ${content}`;
                }
                return '';
                
            case 'inlineCard':
                if (node.attrs && node.attrs.url) {
                    return `[${node.attrs.url}](${node.attrs.url})`;
                }
                return '';
                
            default:
                // Pour les types non gérés, essayer de traiter le contenu s'il existe
                if (node.content && Array.isArray(node.content)) {
                    return node.content.map(adfToMarkdown).join('');
                }
                return '';
        }
    }

    // Fonction pour convertir la description en markdown de manière sécurisée
    function getDescriptionMarkdown(description) {
        if (!description) return '';
        if (typeof description === 'string') {
            return j2m.to_markdown(description);
        }
        // Si c'est un objet ADF (Atlassian Document Format)
        if (typeof description === 'object' && description.type === 'doc') {
            return adfToMarkdown(description);
        }
        return '';
    }

    $: descriptionMarkdown = getDescriptionMarkdown(currentDescription);
    $: descriptionHtml = descriptionMarkdown 
        ? marked.parse(descriptionMarkdown).replace(/\|([^|]+)\|/g, '<div>$1</div>')
        : '';

</script>
<style>
    .bordered-div {
        border: 1px solid black;
        padding: 5px;
        margin: 5px;
    }
</style>
<div class="winner-popup !z-30 !h-[100%] !items-start">
    <div class="popup-content flex items-center justify-center flex-col !bg-[transparent] max-w-[1000px]" style="height: unset!important; box-shadow: unset;" >
      <div class="flex flex-col gap-3 relative bg-[#1D2125] text-white">
        <div class="absolute top-3 left-5 text-sm flex gap-2 z-[10]">
            <a
            href="#"
            on:click={closeTicket}
            class="w-4 h-4 items-center justify-center text-white hover:text-red-500 bg-red-500 rounded-full flex"
          ><Fa icon={faXmarkCircle} /></a>
          <a
            href={`https://alicegarden.atlassian.net/browse/${currentKey}`} target="_blank"
            class="w-4 h-4 items-center justify-center text-white hover:text-green-500 bg-green-500 rounded-full flex"
          ><Fa icon={faPlusCircle} /></a>
        </div>
        <div class=" rounded-lg relative">

            <div class="text-xl font-bold pt-2 bg-white text-black pl-20">
                {currentKey}
                <span class="font-normal">
                    {currentSummary}
                </span>
            </div>

            <div class="mt-5 leading-5 p-6 overflow-auto">
                {#if descriptionHtml}
                    {@html descriptionHtml}
                {/if}
            </div>

        </div>
        </div>
</div>
</div>
