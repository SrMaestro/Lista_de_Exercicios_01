//Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

const produtos = [
    { nome: "Camiseta", preco: 49.90 },
    { nome: "Calça", preco: 89.90 },
    { nome: "Tênis", preco: 199.90 },
    { nome: "Boné", preco: 29.90 }
];


function ordenaPorPrecoDescrecente (array){

    const map1 = array.sort((a, b) => a.preco - b.preco).map(produto => produto.nome);
    return map1
}

console.log(ordenaPorPrecoDescrecente(produtos));
