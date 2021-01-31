document.addEventListener('DOMContentLoaded',() => {
    /**declare vars */
const cardArray = [
    {
        name:'beach',
        src:'img/beach.jpg'
    },
    {
        name:'beach',
        src:'img/beach.jpg'
    },
    {
        name:'flower',
        src:'img/flower.jpg'
    },
    {
        name:'flower',
        src:'img/flower.jpg'
    },
    {
        name:'moun',
        src:'img/moun.jpg'
    },
    {
        name:'moun',
        src:'img/moun.jpg'
    },
    {
        name:'night',
        src:'img/night.jpg'
    },
    {
        name:'night',
        src:'img/night.jpg'
    },
    {
        name:'sea',
        src:'img/sea.jpg'
    },
    {
        name:'sea',
        src:'img/sea.jpg'
    },
    {
        name:'sunset',
        src:'img/sunset.jpg',
    },
    {
        name:'sunset',
        src:'img/sunset.jpg',
    },
]; 

cardArray.sort(()=> 0.5 - Math.random());

const grid = document.querySelector(".grid");
const result = document.querySelector('#result');

var chosenCards = [];
var chosenCardIds = [];
var winnerCards = [];

//the variables done 
// functions begin

function createGrid(){
    for (let i = 0 ; i < cardArray.length ; i++){
        var image = document.createElement('img');
        image.setAttribute('src' , 'img/puz.jpg');
        image.setAttribute('data-id',i);
        image.addEventListener('click',flipCard);
        grid.appendChild(image);
    }
    
}
createGrid();

//find matches

function findMatch(){
    var card = document.querySelectorAll('img');
    const firstChoice = chosenCardIds[0];
    const secondChoice = chosenCardIds[1];

    if (chosenCards[0]===chosenCards[1]){
        alert('Super 🤩 , you found a match 🥳😄 ')
        card[firstChoice].style.backgroundColor = '#fff';
        card[secondChoice].style.backgroundColor = '#fff';
        winnerCards.push(chosenCards);
    }else{
        card[firstChoice].setAttribute('src' , 'img/puz.jpg');
        card[secondChoice].setAttribute('src' , 'img/puz.jpg');
        alert('Sorry 🙁 , please try again 😊 ');
    }
    chosenCards = [];
    chosenCardIds = [];
    result.textContent = winnerCards.length;

    if (winnerCards.length === cardArray.length/2){
        result.textContent = 'Congratulations !🥳🎉 you found them all 👏🏻 ';
        result.style.color ='green' ;
    }
}

//make a function flipCard

function flipCard(){
    var cardId = this.getAttribute('data-id');
    chosenCards.push(cardArray[cardId].name);
    chosenCardIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].src);
    if (chosenCards.length===2){
        setTimeout(findMatch,500);
    }
}
}


)