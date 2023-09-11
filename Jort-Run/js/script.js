let can = document.getElementById('canvas');
let objeto = can.getContext('2d');
let personagem = can.getContext('2d'); // Corrigi a declaração da variável "personagem"

// Chão
objeto.fillStyle = 'green';
objeto.fillRect(10, 120, 800, 60);

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

// Personagem 
objeto.strokeStyle = 'black'; // Cor das linhas

// Cabeça
objeto.beginPath();
objeto.arc(100, 100, 20, 0, Math.PI * 2); // Cabeça (um círculo)
objeto.stroke();

// Corpo
objeto.moveTo(100, 120); // Mover o cursor para a posição do corpo
objeto.lineTo(100, 180); // Desenhar o corpo (uma linha vertical)
objeto.stroke();

// Braços
objeto.moveTo(80, 140); // Mover o cursor para a posição do braço esquerdo
objeto.lineTo(120, 140); // Desenhar o braço esquerdo (uma linha horizontal)
objeto.moveTo(80, 160); // Mover o cursor para a posição do braço direito
objeto.lineTo(120, 160); // Desenhar o braço direito (uma linha horizontal)
objeto.stroke();

// Pernas
objeto.moveTo(100, 180); // Mover o cursor para a posição da perna esquerda
objeto.lineTo(80, 220); // Desenhar a perna esquerda (uma linha diagonal)
objeto.moveTo(100, 180); // Mover o cursor para a posição da perna direita
objeto.lineTo(120, 220); // Desenhar a perna direita (uma linha diagonal)
objeto.stroke();

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
objeto.fillStyle = 'brown';

// Desenhar o primeiro banco
objeto.fillRect(210, 100, 20, 20);

// Desenhar o segundo banco com uma pequena distância
objeto.fillRect(140, 100, 20, 20);

// Desenhar o terceiro banco com uma pequena distância
objeto.fillRect(70, 100, 20, 20);