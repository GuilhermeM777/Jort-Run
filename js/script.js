let can = document.getElementById('canvas');
let objeto = can.getContext('2d');
let banco = can.getContext('2d');
let canvasWidth = 100;
let canvasHeight = 100;

function cenario(){
    // Chão
    objeto.fillStyle = 'green';
    objeto.fillRect(10, 120, 1000, 1000);

    // Prédio
    objeto.fillStyle = 'grey';
    objeto.fillRect(10, 35, 40, 85);

    // Janelas
    objeto.fillStyle = 'yellow';
    objeto.fillRect(10, 55, 15, 15);

    objeto.fillStyle = 'yellow';
    objeto.fillRect(35, 55, 15, 15);

    objeto.fillStyle = 'yellow';
    objeto.fillRect(10, 85, 15, 15);

    objeto.fillStyle = 'yellow';
    objeto.fillRect(35, 85, 15, 15);

    // Nuvens
    objeto.fillStyle = 'white';

    // Desenhar as elipses que compõem a nuvem 
    objeto.beginPath();
    objeto.ellipse(120, 40, 30, 20, 0, 0, Math.PI * 2); // Movida para cima
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(135, 45, 30, 20, 0, 0, Math.PI * 2); // Movida para cima
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(155, 35, 30, 20, 0, 0, Math.PI * 2); // Movida para cima
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(170, 40, 30, 20, 0, 0, Math.PI * 2); // Movida para cima
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(180, 70, 20, 15, 0, 0, Math.PI * 2); // Menor e movida para a direita
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(195, 75, 20, 15, 0, 0, Math.PI * 2); // Menor e movida para a direita
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(215, 65, 20, 15, 0, 0, Math.PI * 2); // Menor e movida para a direita
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(230, 70, 20, 15, 0, 0, Math.PI * 2); // Menor e movida para a direita
    objeto.fill();

    // Casas
    objeto.fillStyle = 'grey';
    objeto.fillRect(265, 65, 40, 55);

    objeto.fillStyle = 'red';

    // Desenhar um triângulo vermelho em cima das casas
    objeto.beginPath();
    objeto.moveTo(265, 65);  // Ponto superior esquerdo
    objeto.lineTo(305, 65);  // Ponto superior direito
    objeto.lineTo(285, 35);  // Ponto inferior
    objeto.closePath();
    objeto.fill();

    objeto.fillStyle = 'brown';
    objeto.fillRect(285, 85, 10, 35); // Desenhar a porta

    // Adicionar uma maçaneta à porta
    objeto.fillStyle = 'black';
    objeto.beginPath();
    objeto.arc(295, 105, 2, 0, Math.PI * 2); // Desenhar a maçaneta
    objeto.fill();

    //Bancos
    // Definir a cor dos bancos
    banco.fillStyle = 'brown';

    // Desenhar o primeiro banco
    banco.fillRect(210, 100, 20, 20);

    // Desenhar o segundo banco com uma pequena distância
    banco.fillRect(140, 100, 20, 20);

    // Desenhar o terceiro banco com uma pequena distância
    banco.fillRect(70, 100, 20, 20);
}

function verificarColisaoBancos() {
    for (let banco of bancos) {
        // Verifique a sobreposição nos eixos X e Y
        if (
            personagemX + personagemTamanho / 2 > banco.x &&
            personagemX < banco.x + banco.largura &&
            personagemY + personagemTamanho / 2 > banco.y &&
            personagemY < banco.y + banco.altura
        ) {
            return true; // Houve uma colisão
        }
    }
    return false; // Não houve colisão
}

//Movimentação personagem
let personagemTamanho = 5;
let personagemX = canvasWidth / 2;
let personagemY = canvasHeight - 2 * personagemTamanho;
let velocidade = 5;
let pulando = false;
let salto = 10;
let gravidade = 1;
let chao = canvasHeight - 2 * personagemTamanho;

// Posições dos bancos
let bancos = [
    { x: 210, y: 100, largura: 20, altura: 20 },
    { x: 140, y: 100, largura: 20, altura: 20 },
    { x: 70, y: 100, largura: 20, altura: 20 }
];

function desenharPersonagem() {
    // Cabeça
    objeto.beginPath();
    objeto.arc(personagemX, personagemY - personagemTamanho, personagemTamanho, 0, Math.PI * 2);
    objeto.stroke();

    // Corpo
    objeto.moveTo(personagemX, personagemY);
    objeto.lineTo(personagemX, personagemY + 3 * personagemTamanho);
    objeto.stroke();

    // Braços
    objeto.moveTo(personagemX - personagemTamanho, personagemY + personagemTamanho);
    objeto.lineTo(personagemX + personagemTamanho, personagemY + personagemTamanho);
    objeto.stroke();

    // Pernas
    objeto.moveTo(personagemX, personagemY + 3 * personagemTamanho);
    objeto.lineTo(personagemX - personagemTamanho, personagemY + 5 * personagemTamanho);
    objeto.moveTo(personagemX, personagemY + 3 * personagemTamanho);
    objeto.lineTo(personagemX + personagemTamanho, personagemY + 5 * personagemTamanho);
    objeto.stroke();
}

function verificarColisao() {
    for (let banco of bancos) {
        if (
            personagemX + personagemTamanho > banco.x &&
            personagemX - personagemTamanho < banco.x + banco.largura &&
            personagemY + 3 * personagemTamanho > banco.y &&
            personagemY < banco.y + banco.altura
        ) {
            // Colisão com o banco, impedir movimento
            return;
        }
    }
}

function atualizar() {
    objeto.clearRect(0, 0, 1800, 800);
    verificarColisao();
    cenario();
    desenharPersonagem();

    if (pulando) {
        personagemY -= salto;
        salto -= gravidade;
        if (personagemY >= chao) {
            personagemY = chao;
            pulando = false;
            salto = 10;
        }
    }

    requestAnimationFrame(atualizar);
}

function lidarComTeclado(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        personagemX -= velocidade;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        personagemX += velocidade;
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        if (!pulando) {
            pulando = true;
        }
    }
}

// Adicione o ouvinte de eventos ao documento, não à janela
document.addEventListener('keydown', lidarComTeclado);

atualizar();

