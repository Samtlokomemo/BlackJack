let valor = 0;

//PEGAR OS DADOS DA API
function urlGet(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

//COLOCAR NA TELA
function criarLinha(carta, isSua) {
    let linha = document.createElement("tr");
    let tdImagem = document.createElement("td");
    let img = document.createElement("img");
    img.src = carta.image;
    tdImagem.appendChild(img);

    if (isSua) {
        let span = document.createElement("span");
        span.textContent = "Sua";
        span.classList.add("card-text"); // Adiciona a classe para estilização
        tdImagem.appendChild(span);
    }

    linha.appendChild(tdImagem);
    if (carta.value == "JACK") {
        valor += 11;
    } else if (carta.value == "QUEEN") {
        valor += 12;
    } else if (carta.value == "KING") {
        valor += 13;
    } else if (carta.value == "ACE") {
        valor += 1;
    } else {
        valor += parseInt(carta.value);
    }


    console.log(valor)
    return linha;
}

const botao = document.getElementById('pegar-carta');
botao.addEventListener('click', function () {
    main()
});

const botaoParar = document.getElementById('parar');
botao.addEventListener('click', function () {
    //CÓDIGO DAS CARTAS DO INIMIGO
});

//ONDE TUDO ACONTECE
function main() {
    let deck = urlGet("https://deckofcardsapi.com/api/deck/new/draw/?count=1");
    let usuario = JSON.parse(deck);
    let tabela = document.getElementById("cartas");

    usuario.cards.forEach((carta) => {
        let linha = criarLinha(carta);
        tabela.appendChild(linha);
    });

    let paragrafoSoma = document.getElementById('soma-texto');
    paragrafoSoma.textContent = "PONTOS: " + valor;
}



