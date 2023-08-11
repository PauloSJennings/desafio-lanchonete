class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        //Organizando um array com os nomes e quantidades de cada produto na forma de objetos
        const produtos = itens.map((item) => {
            return { nome: item.split(',')[0], qtd: item.split(',')[1] }
        })

        //Checa se carrinho está vazio ou se alguma quantidade é 0
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!"
        }

        for (let { qtd } of produtos) {
            if (qtd === '0') {
                return "Quantidade inválida!"
            }
        }

        //Calculo de preço
        let valor = 0
        for (let produto of produtos) {
            if (!(arrayProdutos.find((elemento) => elemento.nome === produto.nome))) {
                return "Item inválido!"
            } else {
                valor += arrayProdutos.find((elemento) => elemento.nome === produto.nome).valor * produto.qtd
            }
        }

        //Checa se itens extras estão acompanhados de seus itens principais
        if (produtos.find((elemento) => elemento.nome === 'chantily') && !(produtos.find((elemento) => elemento.nome === 'cafe'))) {
            return "Item extra não pode ser pedido sem o principal"
        }

        if (produtos.find((elemento) => elemento.nome === 'queijo') && !(produtos.find((elemento) => elemento.nome === 'sanduiche'))) {
            return "Item extra não pode ser pedido sem o principal"
        }

        //Lógica de descontos e taxas
        if (metodoDePagamento === 'dinheiro') {
            valor = valor - (valor * 0.05)
        } else if (metodoDePagamento === 'credito') {
            valor = valor + (valor * 0.03)
        } else if (metodoDePagamento !== 'debito') {
            return "Forma de pagamento inválida!"
        }




        return `R$ ${valor.toFixed(2).toString().replace('.', ',')}`;
    }

}

export { CaixaDaLanchonete };


const arrayProdutos = [
    {
        nome: 'cafe',
        valor: 3.00
    },
    {
        nome: 'chantily',
        valor: 1.50
    },
    {
        nome: 'suco',
        valor: 6.20
    },
    {
        nome: 'sanduiche',
        valor: 6.50
    },
    {
        nome: 'queijo',
        valor: 2.00
    },
    {
        nome: 'salgado',
        valor: 7.25
    },
    {
        nome: 'combo1',
        valor: 9.50
    },
    {
        nome: 'combo2',
        valor: 7.50
    }
]


//Alguns casos de teste
// console.log(new CaixaDaLanchonete().calcularValorDaCompra('debito', ['chantily,1']));
// console.log(new CaixaDaLanchonete().calcularValorDaCompra('debito', ['cafe,1', 'chantily,1']));
// console.log(new CaixaDaLanchonete().calcularValorDaCompra('credito', ['combo1,1', 'cafe,2']));
// console.log(new CaixaDaLanchonete().calcularValorDaCompra('dinheiro', ['combo1,1', 'cafe,2']));
// console.log(new CaixaDaLanchonete().calcularValorDaCompra('debito', []));
// console.log(new CaixaDaLanchonete().calcularValorDaCompra('debito', ['cafe,0', 'chantily,1']));
// console.log(new CaixaDaLanchonete().calcularValorDaCompra('debito', ['elefante,1', 'chantily,1']));
// console.log(new CaixaDaLanchonete().calcularValorDaCompra('escambo', ['cafe,1', 'chantily,1']));