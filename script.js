'use strict';


document.querySelector('.again').addEventListener('click', function(){
    highscore=0;
    score=20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
 document.querySelector('.guess').value ='';
 document.querySelector('.number').textContent = '?'
document.querySelector('.score').textContent = score;
document.querySelector('body').style.backgroundColor ='#222'
document.querySelector('.number').style.width ='15rem'
document.querySelector('.message').textContent = 'Start guessing...';
document.querySelector('.highscore').textContent = highscore

})

const  guessMyNumber = function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)
//   When input is empty
    if(!guess){
        document.querySelector('.message').textContent = 'Start guessing...'

        // When the player guess correct
    }else if(guess === secretNumber){

        document.querySelector('.message').textContent = '🏆Correct';
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
       if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore
       }
        
        // When guess is wrong    
    }else if(guess !==  secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =guess > secretNumber? 'Too high': 'Too low';
            score--;
            document.querySelector('.score').textContent=score
        }else{
            document.querySelector('.message').textContent ='You lost'
            document.querySelector('.score').textContent= 0;
        }
    }
       
    
}
let score = 20;
let highscore = 0
let secretNumber = Math.trunc(Math.random() * 20) + 1
let checkBtn = document.querySelector('.check');
checkBtn.addEventListener('click', guessMyNumber);
guessMyNumber()