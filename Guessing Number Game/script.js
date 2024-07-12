let secretNum=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click', function(){
    const guess= Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent='⛔ Not Number!';
    }
    else if (guess===secretNum){
        document.querySelector('.message').textContent='🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').textContent=secretNum;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess>secretNum){
        if(score>1){
            document.querySelector('.message').textContent='📈 Too High!';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='💥 You Lost The Game!'
        }
    }
    else if(guess<secretNum){
        if(score>1){
            document.querySelector('.message').textContent='📉 Too Low!';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='💥 You Lost The Game!'
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNum=Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.guess').value='';

});