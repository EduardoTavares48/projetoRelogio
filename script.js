function atualizarHora() {
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    let fundo = document.querySelector(".fundo");
    let creditos = document.querySelector(".creditos");

    let horario = document.querySelector(".hora");
    horario.textContent =
        corrigirHora(hora) +
        ":" +
        corrigirHora(minutos) +
        ":" +
        corrigirHora(segundos);

    if (hora >= 0 && hora <= 12) {
        //Bom dia
        fundo.cssText = "background-image: url(./img/dia.png)"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        fundo.style.cssText = "background-image: url(./img/tarde.png)"
    } else {
        //Boa noite
        fundo.style.cssText = "background-image: url(./img/noite.png)"
        creditos.style.cssText = "color: white"
    }
}

function corrigirHora(numero) {
    if (numero < 10) {
        numero = "0" + numero;
    }
    return numero;
}

atualizarHora();
setInterval(atualizarHora, 1000);