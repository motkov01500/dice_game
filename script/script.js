'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const DiceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const butNew = document.querySelector('.btn--new');
const butRoll = document.querySelector('.btn--roll');
const butHold = document.querySelector('.btn--hold');
const curSc0El = document.querySelector('#current--0');
const curSc1El = document.querySelector('#current--1');

score0El.textContent = 0;
score1El.textContent = 0;

const scores = [0,0];
var activeplayer = 0;
let playing = true;
const switchPlayer = function()
{
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}



DiceEl.classList.add('hidden');

var currentscore = 0;
butRoll.addEventListener('click',function()
{
    if(playing){
    const dice = Math.trunc(Math.random() *6) + 1;
    
    DiceEl.classList.remove('hidden');
    DiceEl.src = `img/dice-${dice}.png`;
    
    if(dice !== 1)
    {
        currentscore += dice;
        document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    } 
    else
    {
        switchPlayer();
    }
}
});


butHold.addEventListener('click',function() {
if(playing){
   scores[activeplayer] += currentscore;
   document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
   
   if(scores[activeplayer] >= 100)
   {
       DiceEl.classList.add('hidden');
       playing = false;
       document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
       document.getElementById(`player--${activeplayer}`).classList.remove('player--active');
   }
    switchPlayer();
}
});


butNew.addEventListener('click',function()
{
    score0El.textContent = 0;
    score1El.textContent = 0;
    curSc0El.textContent = 0;
    curSc1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
});