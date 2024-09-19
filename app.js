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

    let soma = carta.value;
    console.log(soma)
    return linha;
}

const botao = document.getElementById('pegar-carta');
botao.addEventListener('click', function () {
    main()
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
}



