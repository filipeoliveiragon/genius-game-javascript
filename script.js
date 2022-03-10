let order = [];
let clickedOrder = [];
let score = 0;

// verde, vermelho, laranja, azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const orange = document.querySelector('.orange');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê Acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

    
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return orange;
    } else if (color == 3){
        return blue;
    }
}


let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

let playGame = ( ) => {
    alert(`Bem vindo ao Genesis! Iniciando novo jogo!`);
    score = 0;

    nextLevel();
}

// green.addEventListener('click', click(0));
// red.addEventListener('click', click(1));
// orange.addEventListener('click', click(2));
// blue.addEventListener('click', click(3));


green.onclick = () => click(0);
red.onclick = () => click(1);
orange.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();