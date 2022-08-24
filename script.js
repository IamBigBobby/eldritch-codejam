const ancients = document.querySelectorAll('.ancients-card');
const difficulty = document.querySelector('.difficulty-container-hidden')
const levels = document.querySelectorAll('.difficulty')
const shuffleButton = document.querySelector('.shuffle-button-hidden')
const deck = document.querySelector('.close-deck')
console.log(ancients);
console.log(difficulty)
console.log(levels)


for (card of ancients){
card.addEventListener('click', function onClick(){
    console.log('card click')
    difficulty.classList.remove('difficulty-container-hidden');
    difficulty.classList.add('difficulty-container-open');
})
}


for (level of levels){
    level.addEventListener('click', function onClick(){
        console.log('level click')
        shuffleButton.classList.remove('shuffle-button-hidden')
        shuffleButton.classList.add('shuffle-button-open')
    })
}


shuffleButton.addEventListener('click', function onClick(){
    console.log('shuffle click')
    shuffleButton.classList.remove('shuffle-button-open')
    shuffleButton.classList.add('shuffle-button-hidden')
    deck.classList.remove('close-deck')
    deck.classList.add('open-deck')
})