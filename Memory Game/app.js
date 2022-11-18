const cardArray = [
    {
        name: 'fries',
        img:'fries.png'
    },
    {
        name: 'cheeseburger',
        img:'cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:'hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'ice-cream.png'
    },
    {
        name: 'milkshake',
        img:'milkshake.png'
    },
    {
        name: 'pizza',
        img:'pizza.png'
    },
    {
        name: 'fries',
        img:'fries.png'
    },
    {
        name: 'cheeseburger',
        img:'cheeseburger.png'
    },
    {
        name: 'hotdog',
        img:'hotdog.png'
    },
    {
        name: 'ice-cream',
        img:'ice-cream.png'
    },
    {
        name: 'milkshake',
        img:'milkshake.png'
    },
    {
        name: 'pizza',
        img:'pizza.png'
    },

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
// const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'https://raw.githubusercontent.com/KoaKilla/koakilla.github.io/main/Memory%20Game/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    if (cardsChosen[0] == cardsChosen[1]){
        alert('Match!')
        cards[cardsChosenIds[0]].setAttribute('src', 'https://raw.githubusercontent.com/KoaKilla/koakilla.github.io/main/Memory%20Game/white.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'https://raw.githubusercontent.com/KoaKilla/koakilla.github.io/main/Memory%20Game/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'https://raw.githubusercontent.com/KoaKilla/koakilla.github.io/main/Memory%20Game/blank.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'https://raw.githubusercontent.com/KoaKilla/koakilla.github.io/main/Memory%20Game/blank.png')
        alert('Sorry try again')
    }
    // resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    // if (cardsWon.length === cardArray.length/2){
        // resultDisplay.innerHTML = 'Winner!'
    }
// }

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 100)
    }
}