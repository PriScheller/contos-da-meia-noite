// script-detalhe.js - Para a página de detalhes da história

document.addEventListener('DOMContentLoaded', () => {
    // Pega os parâmetros da URL (tudo depois do '?')
    const urlParams = new URLSearchParams(window.location.search);
    // Pega o valor do parâmetro 'id'
    const storyId = urlParams.get('id');

    const storyContentDiv = document.getElementById('story-content');
    const pageTitleMeta = document.getElementById('story-title-meta');

    // Procura a história no array 'contos' que tem o 'id' correspondente
    const historiaEncontrada = contos.find(conto => conto.id === storyId);

    if (historiaEncontrada) {
        // Atualiza o título da aba do navegador
        pageTitleMeta.textContent = `${historiaEncontrada.titulo} - Contos da Meia-Noite`;

        // Preenche o div de conteúdo com os detalhes da história
        storyContentDiv.innerHTML = `
            <h2>${historiaEncontrada.titulo}</h2>
            <p class="author">Por: ${historiaEncontrada.autor}</p>
            <p class="category">Categoria: ${historiaEncontrada.categoria}</p>
            <img src="${historiaEncontrada.imagem}" alt="${historiaEncontrada.titulo}">
            ${historiaEncontrada.conteudo}
        `;
    } else {
        // Se a história não for encontrada (ex: URL digitada errada)
        pageTitleMeta.textContent = `História Não Encontrada - Contos da Meia-Noite`;
        storyContentDiv.innerHTML = `
            <h2>Ops! História Não Encontrada</h2>
            <p>Parece que o conto que você procura se perdeu nas sombras. Que tal explorar <a href="historias.html"> outras narrativas</a>?</p>
        `;
    }
});