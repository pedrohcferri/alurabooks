let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a,b) => a -b);
    exibirLivrosNaTela(livrosOrdenados);
}