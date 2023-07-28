const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

//Função que atualiza o valor do value que fica dentro do html
const updateValue = () => {
    value.innerHTML = count; //innerHTML vai atualizar o html
};

let count = 0;

//Variável que iniciará o intervalo e adicionará +1 ao contador, atualizando a tela
let intervalId = 0;

//Para quando clicar e segurar, o número continuar alterando, aumentando
plusButton.addEventListener('mousedown', () => {
    //Variável recebe a função setInterval
    intervalId = setInterval ( () => {
        count += 1;
        //Chamada da função
        updateValue();
    }, 100); //Milésimos de segundo, tempo de resposta
});

//Para quando clicar e segurar, o número continuar alterando, diminuindo
minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval( () => {
        count -= 1;
        //Chamando a função
        updateValue();
    }, 100);
});

//Botão de resetar o contador; usamos "click", pois não vamos clicar e segurar
resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
});

//Para quando soltar o mouse, a contagem parar; clearInterval vai "limpar" a contagem, parando
document.addEventListener('mouseup', () => clearInterval(intervalId));