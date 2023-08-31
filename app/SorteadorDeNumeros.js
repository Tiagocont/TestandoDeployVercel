const maiorValor = 100;
const menorValor = 1;

const tagMenorValor = document.querySelector('#menor-valor');
const tagMaiorValor = document.querySelector('#maior-valor');

tagMenorValor.innerHTML = menorValor;
tagMaiorValor.innerHTML = maiorValor;

const sorteador = ()=>{
    const numeroSorteado = parseInt(Math.random() * maiorValor + 1);
    return numeroSorteado;
}

const numeroSorteado = sorteador()
