const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const statusTittle = document.getElementById('status');
const attempt = document.getElementById('attempt');
const inputValue = document.getElementById('kick');
const result = document.getElementById('result');
const btnRestart = document.getElementById('btnRestart');

const GuessNumber = {
    max: 10,
    attemptsNumber:0,
    numberDraw: function() {
        return Math.round(Math.random() * this.max);
    },
    showButtonRestart: function () {
        btnRestart.style.display = 'flex';
    },
    clearInput: function() {
        inputValue.value ='';
    },
    updateAttempt: function(attempt, value) {
        attempt.innerHTML = 'Tentativa:' + value;
    },
    correctAnswer: function() {
        this,this.showButtonRestart();
        statusTittle.innerHTML = 'Parabéns, você acertou!'
        statusTittle.classList.remove('incorrect-answer');
        statusTittle.classList.add('status-correct');

        result.classList.remove('result-box-default');
        result.classList.add('result-correct-answer');

        this.clearInput();
    },
    incorrectAnswer: function(message) {
        statusTittle.innerHTML = message;
        statusTittle.classList.add('incorrect-answer');

        this.clearInput();
    }    
};

const numberDraw = GuessNumber.numberDraw();

function handleSubmit(e) {
    e.preventDefault();

    const kick = inputValue.value;

    if(!kick) {
        alert('Digite algum valor!');
        return;
    }

    GuessNumber.updateAttempt(attempt, ++GuessNumber.attemptsNumber);

    if(numberDraw == kick) {
        GuessNumber.correctAnswer('ACERTOU!');
    } else if(numberDraw > kick) {
        GuessNumber.incorrectAnswer('O número é maior!');        
    } else if(numberDraw < kick) {
        GuessNumber.incorrectAnswer('O número é menor!');  
    }
};

function restartGame() {
    document.location.reload(true);
}