// Seleciona o botão de adicionar um novo item
const adicionaProduto = document.querySelector('.adiciona__produto');
// Seleciona a lista de compras
const listaDeCompras = document.querySelector('.lista__de__compras');

// lista de compras
const produtos = [];

// Adiciona produto na lista de compras
function handleAddItens(e) {
    // pega o valor do produto
    const nomeDoProduto = this.querySelector('[nome=item]').value;

    // o objeto produto
    const produto = {
        nome: nomeDoProduto,
        validade: new Date();
    }

    // adiciona o produto junto com os outros produtos
    produtos.push(produto);

    // Para adicionar um obj no localStorage 
    // precisamos antes tranformar o parametro recebido em uma string

    localStorage.setItem('produtos', JSON.stringify(produtos));

}



// Adiciona produto na lista de compras
function handleAddItens(e) {
    // pega o valor do produto
    const nomeDoProduto = this.querySelector('[nome=item]').value;
    // o objeto produto
    const produto = {
        nome: nomeDoProduto,
        validade: new Date(),
    }
}