function mostrarSeção(secao) {
    // Oculta todas as seções
    document.querySelectorAll('.secoes').forEach(function(elemento) {
        elemento.classList.remove('ativa');
    });
    // Mostra a seção selecionada
    document.getElementById(secao).classList.add('ativa');
}