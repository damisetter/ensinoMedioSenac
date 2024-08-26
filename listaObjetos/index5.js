
let carrinho = []
let fruta1 = {
    nome: "Maçã",
    disponibilidade: true
}
let fruta2 = {
    nome: "Banana",
    disponibilidade: true
}
let fruta3 = {
    nome: "Laranja",
    disponibilidade: true
}
carrinho.push(fruta1)
carrinho.push(fruta2)
carrinho.push(fruta3)


function listarItens(carrinho) {
    carrinho.forEach(fruta => {
        console.log(`Nome: ${fruta.nome}, Disponibilidade: ${fruta.disponibilidade}`)
    })
}


function alterarDisponibilidade(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}

console.log("Itens no carrinho:")
listarItens(carrinho)

alterarDisponibilidade(fruta1)
console.log("\nItens no carrinho após alterar disponibilidade da maçã:")
listarItens(carrinho)


 
