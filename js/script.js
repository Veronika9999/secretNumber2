let secretNumber = getRandomInt (1,10);
function getRandomInt (min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(secretNumber);
let numbers = document.querySelectorAll('.number');
let attempt = document.querySelector('.attempt-number');
let attemptNumber = 3;
let buttons = document.querySelector('.buttons');
let text = document.querySelector('.start p');
let start = document.querySelector('.start')
let audio = document.createElement('audio');
let newGame = document.querySelector('.new');
newGame.onclick = function(){
    audio.setAttribute('src', 'audio/nezhnoe-sms-krasivoe-nezhnoe-sms.mp3');
    audio.play();
    for (let number = 0; number < 10; number ++){
        numbers[number].disabled = false;
        numbers[number].classList.remove('false');
    }
    attemptNumber = 3;
    attempt.innerHTML = attemptNumber
    text.innerHTML = 'Чего ждёшь? Пробуй!';
    secretNumber = getRandomInt(1,10);
    text.classList.remove('result'); 
    newGame.classList.remove('button_red');
    newGame.classList.remove('button_green');
    console.log(secretNumber);
}

buttons.onclick = function(){
    let target = event.target;
    let dnk = event
    if(target.classList.contains('number')){
        let userNumber = eval(target.innerHTML);
        if(secretNumber == userNumber){
            text.classList.remove('result');
            text.innerHTML = 'Молодец! Ты угадал!';
            for (let number = 0; number < 10; number ++){
                numbers[number].disabled = true;
                numbers[number].classList.add('false');
            }
            audio.setAttribute('src', 'audio/4cccc379d8da21a.mp3');
            audio.play();
            newGame.classList.add('button_green');
        }else{
           text.classList.add('result');
            start.classList.add('red');
            setTimeout(() => {
                start.classList.remove('red');
            }, 200);
            if(secretNumber < userNumber){
                text.innerHTML = 'Не верно! Секретное число меньше чем ' + userNumber ;
            }else{
                text.innerHTML = 'Не верно! Секретное число больше чем ' + userNumber;
            }
            attemptNumber = attemptNumber - 1;
            attempt.innerHTML = attemptNumber;
            if( attemptNumber == 0){
                text.innerHTML = 'Ты истратил все попытки. Попробуй заново.';
                for (let number = 0; number < 10; number ++){
                    numbers[number].disabled = true;
                    numbers[number].classList.add('false');
                }
                newGame.classList.add('button_red');
                audio.setAttribute('src', 'audio/75dff623679a9db.mp3');
                audio.play();
            }
        }
    }
}