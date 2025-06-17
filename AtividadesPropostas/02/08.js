//8. Agrupamento por Propriedade Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

let vendas = [
    {cliente: "SrMaestro", total: 1200},
    {cliente: "Steve", total: 1000},
    {cliente: "Steve", total: 500},
    {cliente: "Patrick", total: 200},

    
]

// Agrupa os totais por cliente usando reduce
const totaisPorCliente = vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
}, {});

console.log(totaisPorCliente);