window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; //add window, não é necessário mas representa a janela do navegador e o acesso a ele, comumente utilizad apara consumo de APIs
const elementoChute = document.querySelector('#chute');

const recognition = new SpeechRecognition();
recognition.lang  = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak) //ao começar quero pegar o que está no resultado de recognition

function onSpeak(e){
    chute = e.results[0][0].transcript;
    ExibeValornaTela(chute);
    VerificaSeNumeroEValido(chute)
};

function ExibeValornaTela(chute){
    elementoChute.innerHTML = `<div>Você disse:</div>
    <span class="box">${chute}</span>
    <div><i class="fa-solid fa-up-long"></i>  O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>`
}

recognition.addEventListener('end', ()=> recognition.start());

