let can = document.getElementById('canvas');
let objeto = can.getContext('2d');
let banco = can.getContext('2d');
let canvasWidth = 100;
let canvasHeight = 100;

function cenario(){
    // Chão
    objeto.fillStyle = 'green';
    objeto.fillRect(1, 720, 1800, 1000);

    // Prédio
    objeto.fillStyle = 'grey';
    objeto.fillRect(10, 450, 150, 300);

    // Janelas
    objeto.fillStyle = 'yellow';
    objeto.fillRect(10, 550, 45, 45);

    objeto.fillStyle = 'yellow';
    objeto.fillRect(115, 550, 45, 45);

    objeto.fillStyle = 'yellow';
    objeto.fillRect(10, 650, 45, 45);

    objeto.fillStyle = 'yellow';
    objeto.fillRect(115, 650, 45, 45);

    // Nuvens
    objeto.fillStyle = 'white';

    // Desenhar as elipses que compõem a nuvem 
    objeto.beginPath();
    objeto.ellipse(350, 120, 55, 45, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(375, 120, 55, 45, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(375, 155, 55, 45, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(390, 155, 55, 45, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(650, 255, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(650, 275, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(675, 270, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(695, 285, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();


    objeto.beginPath();
    objeto.ellipse(950, 355, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(950, 375, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(975, 370, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(900, 370, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();


    objeto.beginPath();
    objeto.ellipse(1200, 155, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(1230, 180, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(1190, 180, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    objeto.beginPath();
    objeto.ellipse(1240, 155, 35, 25, 0, 0, Math.PI * 2); 
    objeto.fill();

    // Casa
    objeto.fillStyle = 'grey';
    objeto.fillRect(1450, 615, 125, 125);

    //Porta
    objeto.fillStyle = 'brown';
    objeto.fillRect(1475, 665, 35, 75); // Desenhar a porta

    // Macaneta 
    objeto.fillStyle = 'black';
    objeto.beginPath();
    objeto.arc(1486, 685, 10, 0, Math.PI * 2); // Desenhar a maçaneta
    objeto.fill();

    //Bancos
    // Definir a cor dos bancos
    banco.fillStyle = 'brown';
    banco.fillRect(435, 685, 55, 55);
    banco.fillRect(655, 685, 55, 55);
    banco.fillRect(855, 685, 55, 55);
    banco.fillRect(1055, 685, 55, 55);
    banco.fillRect(1255, 685, 55, 55);

    
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
let velocidade = 10;
let salto = 45;
let gravidade = 0;
let chao = canvasHeight - 2 * personagemTamanho;

// Posições dos bancos
let bancos = [
    { x: 435, y: 685, largura: 55, altura: 55 },
    { x: 655, y: 685, largura: 55, altura: 55 },
    { x: 855, y: 685, largura: 55, altura: 55 },
    { x: 1055, y: 685, largura: 55, altura: 55},
    { x: 1255, y: 685, largura: 55, altura: 55},
];

function desenharPersonagem() {
    // Cabeça
    objeto.beginPath();
    objeto.arc(personagemX, personagemY - personagemTamanho, personagemTamanho, 0, Math.PI * 2);
    objeto.stroke();

    // Corpo
    objeto.moveTo(personagemX, personagemY);
    objeto.lineTo(personagemX, personagemY + 6 * personagemTamanho);
    objeto.stroke();

    // Braços
    objeto.moveTo(personagemX - personagemTamanho, personagemY + personagemTamanho);
    objeto.lineTo(personagemX + personagemTamanho, personagemY + personagemTamanho);
    objeto.stroke();

    // Pernas
    objeto.moveTo(personagemX, personagemY + 6 * personagemTamanho);
    objeto.lineTo(personagemX - personagemTamanho, personagemY + 8 * personagemTamanho);
    objeto.moveTo(personagemX, personagemY + 6 * personagemTamanho);
    objeto.lineTo(personagemX + personagemTamanho, personagemY + 8 * personagemTamanho);
    objeto.stroke();
}

function verificarColisao() {
    for (let banco of bancos) {
        if (
            personagemX + personagemTamanho > banco.x &&
            personagemX < banco.x + banco.largura &&
            personagemY + personagemTamanho > banco.y &&
            personagemY < banco.y + banco.altura
        ) {
            // Colisão com o banco, impedir movimento
            personagemX = Math.min(personagemX, banco.x - personagemTamanho);
            personagemY = Math.min(personagemY, banco.y - personagemTamanho);
        }
    }

    // Garante que o personagem não flutue abaixo do chão
    personagemY = Math.max(personagemY, 7 - personagemTamanho);
}

let pulando = false;
let VelocidadeY = 0;

function atualizar() {
    objeto.clearRect(0, 0, 1800, 800);
    verificarColisao();
    cenario();
    desenharPersonagem();

    // Garante que o personagem não ultrapasse as bordas
    personagemX = Math.min(personagemX, 1800 - personagemTamanho);  // Não ultrapassar a borda direita
    personagemY = Math.max(personagemY, 700 - personagemTamanho);  // Não ultrapassar a borda inferior
    personagemX = Math.max(personagemX, 30);  // Não ultrapassar a borda esquerda

    requestAnimationFrame(atualizar);
}

function lidarComTeclado(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        personagemX -= velocidade;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
        personagemX += velocidade;
    } else if ((e.key === 'ArrowUp' || e.key === 'w') && noChao) {
        
        if (!pulando) {
            pulando = true;
        }
    }
}

// Adicione o ouvinte de eventos ao documento, não à janela
document.addEventListener('keydown', lidarComTeclado);

atualizar();
