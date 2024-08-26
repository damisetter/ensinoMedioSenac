function compararFilmes(filme1, filme2) {
    const { ano: ano1 } = filme1;
    const { ano: ano2 } = filme2;

    const lancadoAntes = ano1 < ano2;
    const mesmoAno = ano1 === ano2;

    return `O primeiro filme foi lançado antes do segundo? ${lancadoAntes}
O primeiro filme foi lançado no mesmo ano do segundo? ${mesmoAno}`;
}

const assimqueacaba = {
    nome: 'É assim que acaba',
    ano: 2024
};

const cisnenegro = {
    nome: 'Cisne negro',
    ano: 2010
};

console.log(compararFilmes(assimqueacaba, cisnenegro));
