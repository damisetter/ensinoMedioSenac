function info(){
    let nome = prompt('qual seu nome?')
    let idade = prompt('qual sua idade?')
    let profissao = prompt('qual sua profissão?')

 let pessoa = {
    nomePessoa: nome,
    idadePessoa: idade,
    profissaoPessoa: profissao
};
console.log('nome:', (pessoa.nomePessoa), 'idade:', (pessoa.idadePessoa), 'profissão:', (pessoa.profissaoPessoa))
}
info()