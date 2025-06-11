window.addEventListener('DOMContentLoaded', function(){
    const mensagemStatus = document.getElementById('status-jogo');
    const escolhaJogador1Display = document.getElementById('escolha-jogador1');
    const escolhaJogador2Display = document.getElementById('escolha-jogador2');
    const btnEscolha = document.querySelectorAll('.btn-escolha');
    const btnReset = document.getElementById('btn-reset');
    let escolhaJogador1 = null;
    let escolhaJogador2 = null;
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaEmojis = {
        pedra: '✊',
        papel: '✋',
        tesoura: '✌️'
    };
    btnEscolha.forEach(btn => {
        btn.addEventListener('click', decideMudanca);
    });

    btnReset.addEventListener('click', resetJogo);
    function decideMudanca(evento) {
        const seJogador1 = evento.target.closest('#jogador1');

        if (seJogador1 && escolhaJogador1 === null) {
            escolhaJogador1 = evento.target.dataset.choice;
            escolhaJogador1Display.textContent = '✔️'; 
            mensagemStatus.textContent = "Vez do Jogador 2";
        } 
        else if (!seJogador1 && escolhaJogador2 === null && escolhaJogador1 !== null) {
            escolhaJogador2 = evento.target.dataset.choice;
            escolhaJogador2Display.textContent = '✔️';
            determinaVencedor();
        }
    }

    function determinaVencedor() {
        escolhaJogador1Display.textContent = escolhaEmojis[escolhaJogador1];
        escolhaJogador2Display.textContent = escolhaEmojis[escolhaJogador2];

        if (escolhaJogador1 === escolhaJogador2) {
            mostraResultado("É um empate");
        } 
        else if (
            (escolhaJogador1 === 'pedra' && escolhaJogador2 === 'tesoura') ||
            (escolhaJogador1 === 'papel' && escolhaJogador2 === 'pedra') ||
            (escolhaJogador1 === 'tesoura' && escolhaJogador2 === 'papel')) 
        {
            mostraResultado('Jogador 1 Ganhou!');
        } 
        else {
            mostraResultado('Jogador 2 Ganhou!');
        }
    }

    function mostraResultado(textoResultado) {
        mensagemStatus.textContent = textoResultado;
    }

    function resetJogo() {
        escolhaJogador1 = null;
        escolhaJogador2 = null;
        mensagemStatus.textContent = "Vez do Jogador 1";
        escolhaJogador1Display.textContent = '?';
        escolhaJogador2Display.textContent = '?';
    }
})