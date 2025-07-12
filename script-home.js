// script-home.js - Para carregar destaques na página inicial

document.addEventListener('DOMContentLoaded', () => {
    const latestStoriesPreviewDiv = document.getElementById('latest-stories-preview');

    if (latestStoriesPreviewDiv && typeof contos !== 'undefined') {
        // Pega as 2 primeiras histórias (ou menos, se houver menos de 2)
        const featuredContos = contos.slice(0, 2); // O 'slice(0, 3)' pega os elementos do índice 0 até o 1

        // Limpa o conteúdo "Carregando prévias..."
        latestStoriesPreviewDiv.innerHTML = '';

        if (featuredContos.length > 0) {
            featuredContos.forEach(conto => {
                const linkHistoria = document.createElement('a');
                linkHistoria.href = `historia-detalhe.html?id=${conto.id}`;
                linkHistoria.classList.add('preview-card'); // Classe para estilização

                const imagemMiniatura = document.createElement('img');
                imagemMiniatura.src = conto.imagem;
                imagemMiniatura.alt = conto.titulo;
                imagemMiniatura.classList.add('preview-card-image');

                const tituloHistoria = document.createElement('h4');
                tituloHistoria.textContent = conto.titulo;

                linkHistoria.appendChild(imagemMiniatura);
                linkHistoria.appendChild(tituloHistoria);

                latestStoriesPreviewDiv.appendChild(linkHistoria);
            });
        } else {
            latestStoriesPreviewDiv.innerHTML = '<p>Nenhuma história para destacar ainda. Volte em breve!</p>';
        }
    }
});