function VerificaSeNumeroEValido(chute){
    const numero = +chute;
    let stringDeRetorno;

    if(chute === "game over"){
        stringDeRetorno = '<div>Fim de linha!!</div><button id="jogar-novamente" class="btn">Jogar novamente</button>';
        return RetornarResultado(chute, stringDeRetorno);
    }

    else if(VerificaSeTipoENumero(numero)){
        stringDeRetorno = `Valor Inválido!`;
        return RetornarResultado(chute, stringDeRetorno);
    }

    else if(NumeroMaiorOuMenorQueValorPermitido(numero)){
        return elementoChute.innerHTML += `<div class="retorno">Diga um número entre ${menorValor} e ${maiorValor}</div>`;
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
        document.body.innerHTML = `
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

document.body.addEventListener('click', e=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})