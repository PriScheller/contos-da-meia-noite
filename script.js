// script.js - Para a página de listagem de histórias

document.addEventListener('DOMContentLoaded', () => {
    const listaHistoriasDiv = document.getElementById('lista-historias');

    // Verifica se estamos na página correta (para evitar erros em outras páginas)
    if (listaHistoriasDiv) {
        contos.forEach(conto => {
            // Cria um link (<a>) que será o "cartão" clicável da história
            const linkHistoria = document.createElement('a');
            // A URL terá o formato: historia-detalhe.html?id=ID_DA_HISTORIA
            linkHistoria.href = `historia-detalhe.html?id=${conto.id}`;
            linkHistoria.classList.add('story-card');

            // Cria os elementos internos do cartão
            const imagemMiniatura = document.createElement('img');
            imagemMiniatura.src = conto.imagem;
            imagemMiniatura.alt = conto.titulo;
            imagemMiniatura.classList.add('story-card-image');

            const tituloHistoria = document.createElement('h3');
            tituloHistoria.textContent = conto.titulo;

            const autorHistoria = document.createElement('p');
            autorHistoria.textContent = `Por: ${conto.autor}`;
            autorHistoria.classList.add('story-card-author');

            const categoriaHistoria = document.createElement('span');
            categoriaHistoria.textContent = conto.categoria;
            categoriaHistoria.classList.add('story-card-category');

            // Adiciona os elementos ao link do cartão
            linkHistoria.appendChild(imagemMiniatura);
            linkHistoria.appendChild(tituloHistoria);
            linkHistoria.appendChild(autorHistoria);
            linkHistoria.appendChild(categoriaHistoria);

            // Adiciona o cartão completo à div principal da lista
            listaHistoriasDiv.appendChild(linkHistoria);
        });
    }
});