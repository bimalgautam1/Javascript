const minNum = 1;
const maxNum = 2;

const answer = Math.floor(Math.random()*(maxNum-minNum + 1) + minNum);

console.log(answer);
let attemps = 0;
let running = true;

while(running){
    let guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Please enter a valid Number`);    
        continue;
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter number  between ${minNum}-${maxNum}`);
        continue;
    }
    else{
        attemps++;
    }
    if(guess < answer){
        window.alert(`Too low! Try Again`);
    }
    else if(guess>answer){
        window.alert(`Too High! Try Again`);
    }
    else if(guess === answer){
        window.alert(`Congratulation, The answer was ${answer}. It took you ${attemps} attempts.`);
    }
    running = false;
}