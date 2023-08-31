const numerosExtensos = new Map([['um', 1], ['dois', 2], ['três', 3],  ['quatro', 4],['cinco', 5],['seis', 6],['sete', 7],['oito', 8],['nove', 9],['dez', 10]]);

function VerificaSeNumeroEValido(chute){
    const numero = +chute;
    let stringDeRetorno;
    const validacao = ConverterExtensosParaNumero(chute);

    if(chute === "game over"){
        stringDeRetorno = '<div>Fim de linha!!</div><button id="jogar-novamente" class="btn">Jogar novamente</button>';
        return RetornarResultado(chute, stringDeRetorno);
    }

    else if(chute === "mudar tema"){
        stringDeRetorno = '<div>Mudança de tema realizada com sucesso</div>'
        document.body.classList.toggle("mudar-tema");
        return RetornarResultado(chute, stringDeRetorno);
    }

    else if(validacao){
        return ResultadoDoChuteValido(validacao);
    }

    else if(VerificaSeTipoENumero(numero)){
        stringDeRetorno = `Valor Inválido!`;
        return RetornarResultado(chute, stringDeRetorno);
    }

    else if(NumeroMaiorOuMenorQueValorPermitido(numero)){
        stringDeRetorno = `<div class="retorno">Diga um número entre ${menorValor} e ${maiorValor}</div>`;
        return RetornarResultado(chute, stringDeRetorno)
    }

    else{
        return ResultadoDoChuteValido(numero);
    }
}

function ResultadoDoChuteValido(chute) {
    let stringMaiorOuMenor = '<i class="fa-solid fa-up-long"></i> O número secreto é maior <i class="fa-solid fa-up-long"></i>';

    if(chute>numeroSorteado){
        stringMaiorOuMenor = '<i class="fa-sharp fa-solid fa-down-long"></i> O número secreto é menor <i class="fa-sharp fa-solid fa-down-long"></i>';
    }

    if(chute === numeroSorteado){
        return document.body.innerHTML = `
        <div>
            <h2>Você acertou!</h2><br>
            <h3>O número secreto era ${numeroSorteado}</h3>
            <button id="jogar-novamente" class="btn">Reiniciar</button>
        </div>`
    }

    return RetornarResultado(chute, stringMaiorOuMenor);
}

function RetornarResultado(chute, stringRetorno){
    return elementoChute.innerHTML = `
    <div>
        Você disse:
    </div>
    <span class="box">${chute}</span>
    <div>
        ${stringRetorno}
    </div>`;
}

function VerificaSeTipoENumero(numero) {
    return Number.isNaN(numero);
}

function NumeroMaiorOuMenorQueValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

function ConverterExtensosParaNumero(numero){
    if(numerosExtensos.has(numero)){
        return numerosExtensos.get(numero);
    }
}

document.body.addEventListener('click', e=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})

