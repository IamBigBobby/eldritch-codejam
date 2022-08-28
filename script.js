// import difficulties from './data/difficulties.js';
// import ancientsIndex from './assets/Ancients/index.js'
import blueCards from './assets/MythicCards/blue/index.js';
import brownCards from './assets/MythicCards/brown/index.js';
import greenCards from './assets/MythicCards/green/index.js';
import acientsData from './data/ancients.js'
import blueCardsData from './data/mythicCards/blue/index.js'
import brownCardsData from './data/mythicCards/brown/index.js'
import greenCardsData from './data/mythicCards/green/index.js'


const ancientsCards = document.querySelectorAll('.ancients-card');
const difficulty = document.querySelector('.difficulty-container-hidden')
const levels = document.querySelectorAll('.difficulty')
const shuffleButton = document.querySelector('.shuffle-button-hidden')
const deck = document.querySelector('.close-deck')
const azathoth = document.querySelector('.Azathoth')
const cthulthu = document.querySelector('.Cthulthu')
const iogSothoth = document.querySelector('.IogSothoth')
const shubNiggurath = document.querySelector('.ShubNiggurath')
const currentCard = document.querySelector('.current-card')
const difficultyEasy = document.querySelector('.easy')
const difficultyNormal = document.querySelector('.normal')
const difficultyHard = document.querySelector('.hard')

const dotGreenFirst = document.querySelector('.green-first')
const dotGreenSecond = document.querySelector('.green-second')
const dotGreenThird = document.querySelector('.green-third')
const dotBrownFirst = document.querySelector('.brown-first')
const dotBrownSecond = document.querySelector('.brown-second')
const dotBrownThird = document.querySelector('.brown-third')
const dotBlueFirst = document.querySelector('.blue-first')
const dotBlueSecond = document.querySelector('.blue-second')
const dotBlueThird = document.querySelector('.blue-third')
const clickDeck = document.querySelector('.deck')

// interface
for (let card of ancientsCards){
card.addEventListener('click', function (){
    difficulty.classList.remove('difficulty-container-hidden');
    difficulty.classList.add('difficulty-container-open');
})
}



for (let level of levels){
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

// algorithms


function pickAzathothAncient(){
        console.log('pick AzathothAcient')
    difficultyNormal.addEventListener('click', function (){
        console.log('normal')
        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
                currentGreenDeck.push(element['id']);
        }

        for (let element of brownCardsData){
                currentBrownDeck.push(element['id']);
        }
 
        for (let element of blueCardsData){

                currentBlueDeck.push(element['id']);
            }
        dotGreenFirst.textContent = acientsData[0]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[0]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[0]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[0]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[0]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[0]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[0]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[0]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[0]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })
    difficultyEasy.addEventListener('click', function (){
        console.log('easy')

        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
            if(element['difficulty'] !== 'hard'){
                currentGreenDeck.push(element['id']);
            }    
        }

        for (let element of brownCardsData){
            if(element['difficulty'] !== 'hard'){
                currentBrownDeck.push(element['id']);
            }
        }
 
        for (let element of blueCardsData){
            if(element['difficulty'] !== 'hard'){
                currentBlueDeck.push(element['id']);
            }
        }
        dotGreenFirst.textContent = acientsData[0]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[0]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[0]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[0]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[0]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[0]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[0]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[0]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[0]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })
    
    difficultyHard.addEventListener('click', function(){
        console.log('hard')

        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
            if(element['difficulty'] !== 'easy'){
                currentGreenDeck.push(element['id']);
            }    
        }

        for (let element of brownCardsData){
            if(element['difficulty'] !== 'easy'){
                currentBrownDeck.push(element['id']);
            }
        }

        for (let element of blueCardsData){
            if(element['difficulty'] !== 'easy'){
                currentBlueDeck.push(element['id']);
            }
        }
        dotGreenFirst.textContent = acientsData[0]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[0]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[0]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[0]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[0]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[0]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[0]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[0]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[0]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    }) 
}
azathoth.addEventListener('click', pickAzathothAncient)


function pickСthulthuAncient(){
    console.log('pick Сthulthu')
    difficultyNormal.addEventListener('click', function (){
        console.log('normal')
        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
                currentGreenDeck.push(element['id']);
        }

        for (let element of brownCardsData){
                currentBrownDeck.push(element['id']);
        }
 
        for (let element of blueCardsData){

                currentBlueDeck.push(element['id']);
            }
        dotGreenFirst.textContent = acientsData[1]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[1]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[1]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[1]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[1]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[1]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[1]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[1]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[1]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })
    difficultyEasy.addEventListener('click', function (){
        console.log('easy')

        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
            if(element['difficulty'] !== 'hard'){
                currentGreenDeck.push(element['id']);
            }    
        }

        for (let element of brownCardsData){
            if(element['difficulty'] !== 'hard'){
                currentBrownDeck.push(element['id']);
            }
        }
 
        for (let element of blueCardsData){
            if(element['difficulty'] !== 'hard'){
                currentBlueDeck.push(element['id']);
            }
        }
        dotGreenFirst.textContent = acientsData[1]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[1]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[1]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[1]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[1]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[1]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[1]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[1]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[1]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })
    
    difficultyHard.addEventListener('click', function(){
        console.log('hard')

        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
            if(element['difficulty'] !== 'easy'){
                currentGreenDeck.push(element['id']);
            }    
        }

        for (let element of brownCardsData){
            if(element['difficulty'] !== 'easy'){
                currentBrownDeck.push(element['id']);
            }
        }

        for (let element of blueCardsData){
            if(element['difficulty'] !== 'easy'){
                currentBlueDeck.push(element['id']);
            }
        }
        dotGreenFirst.textContent = acientsData[1]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[1]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[1]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[1]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[1]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[1]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[1]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[1]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[1]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })    
}
cthulthu.addEventListener('click', pickСthulthuAncient)

function pickIogSothothAncient(){
    console.log('pick IogSothoth')
    difficultyNormal.addEventListener('click', function (){
        console.log('normal')
        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
                currentGreenDeck.push(element['id']);
        }

        for (let element of brownCardsData){
                currentBrownDeck.push(element['id']);
        }
 
        for (let element of blueCardsData){

                currentBlueDeck.push(element['id']);
            }
        dotGreenFirst.textContent = acientsData[2]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[2]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[2]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[2]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[2]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[2]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[2]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[2]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[2]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })
    difficultyEasy.addEventListener('click', function (){
        console.log('easy')

        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
            if(element['difficulty'] !== 'hard'){
                currentGreenDeck.push(element['id']);
            }    
        }

        for (let element of brownCardsData){
            if(element['difficulty'] !== 'hard'){
                currentBrownDeck.push(element['id']);
            }
        }
 
        for (let element of blueCardsData){
            if(element['difficulty'] !== 'hard'){
                currentBlueDeck.push(element['id']);
            }
        }
        dotGreenFirst.textContent = acientsData[2]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[2]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[2]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[2]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[2]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[2]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[2]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[2]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[2]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })
    
    difficultyHard.addEventListener('click', function(){
        console.log('hard')

        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
            if(element['difficulty'] !== 'easy'){
                currentGreenDeck.push(element['id']);
            }    
        }

        for (let element of brownCardsData){
            if(element['difficulty'] !== 'easy'){
                currentBrownDeck.push(element['id']);
            }
        }

        for (let element of blueCardsData){
            if(element['difficulty'] !== 'easy'){
                currentBlueDeck.push(element['id']);
            }
        }
        dotGreenFirst.textContent = acientsData[2]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[2]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[2]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[2]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[2]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[2]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[2]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[2]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[2]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })    
}
iogSothoth.addEventListener('click', pickIogSothothAncient)

function pickShubNiggurathAncient(){
    console.log('pick ShubNiggurath')
    difficultyNormal.addEventListener('click', function (){
        console.log('normal')
        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
                currentGreenDeck.push(element['id']);
        }

        for (let element of brownCardsData){
                currentBrownDeck.push(element['id']);
        }
 
        for (let element of blueCardsData){

                currentBlueDeck.push(element['id']);
            }
        dotGreenFirst.textContent = acientsData[3]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[3]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[3]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[3]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[3]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[3]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[3]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[3]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[3]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })
    difficultyEasy.addEventListener('click', function (){
        console.log('easy')

        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
            if(element['difficulty'] !== 'hard'){
                currentGreenDeck.push(element['id']);
            }    
        }

        for (let element of brownCardsData){
            if(element['difficulty'] !== 'hard'){
                currentBrownDeck.push(element['id']);
            }
        }
 
        for (let element of blueCardsData){
            if(element['difficulty'] !== 'hard'){
                currentBlueDeck.push(element['id']);
            }
        }
        dotGreenFirst.textContent = acientsData[3]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[3]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[3]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[3]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[3]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[3]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[3]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[3]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[3]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    })
    
    difficultyHard.addEventListener('click', function(){
        console.log('hard')

        const currentGreenDeck = [];
        const currentBrownDeck = [];
        const currentBlueDeck = [];
        
        for (let element of greenCardsData){
            if(element['difficulty'] !== 'easy'){
                currentGreenDeck.push(element['id']);
            }    
        }

        for (let element of brownCardsData){
            if(element['difficulty'] !== 'easy'){
                currentBrownDeck.push(element['id']);
            }
        }

        for (let element of blueCardsData){
            if(element['difficulty'] !== 'easy'){
                currentBlueDeck.push(element['id']);
            }
        }
        dotGreenFirst.textContent = acientsData[3]['firstStage']['greenCards'];
        dotGreenSecond.textContent = acientsData[3]['secondStage']['greenCards'];
        dotGreenThird.textContent = acientsData[3]['thirdStage']['greenCards'];
        dotBrownFirst.textContent = acientsData[3]['firstStage']['brownCards'];
        dotBrownSecond.textContent = acientsData[3]['secondStage']['brownCards'];
        dotBrownThird.textContent = acientsData[3]['thirdStage']['brownCards'];
        dotBlueFirst.textContent = acientsData[3]['firstStage']['blueCards'];
        dotBlueSecond.textContent = acientsData[3]['secondStage']['blueCards'];
        dotBlueThird.textContent = acientsData[3]['thirdStage']['blueCards'];

        const amountGreen =  Number(dotGreenFirst.textContent) + Number(dotGreenSecond.textContent) + Number(dotGreenThird.textContent);
        const amountBrown =  Number(dotBrownFirst.textContent) + Number(dotBrownSecond.textContent) + Number(dotBrownThird.textContent);
        const amountBlue =  Number(dotBlueFirst.textContent) + Number(dotBlueSecond.textContent) + Number(dotBlueThird.textContent);
        
        // console.log(amountGreen)
        // console.log(amountBrown)
        // console.log(amountBlue)
        
        const currentGreenFinalDeck = [];
        const currentBrownFinalDeck = [];
        const currentBlueFinalDeck = [];

        for (let i = 0; i <= amountGreen - 1; i++){
            const index = Math.floor(Math.random()*currentGreenDeck.length)
            currentGreenFinalDeck.push(currentGreenDeck[index])
            currentGreenDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBrown - 1; i++){
            const index = Math.floor(Math.random()*currentBrownDeck.length)
            currentBrownFinalDeck.push(currentBrownDeck[index])
            currentBrownDeck.splice(index, 1)
        }
        for (let i = 0; i <= amountBlue - 1; i++){
            const index = Math.floor(Math.random()*currentBlueDeck.length)
            currentBlueFinalDeck.push(currentBlueDeck[index])
            currentBlueDeck.splice(index, 1)
        }

        console.log(currentGreenFinalDeck)
        console.log(currentBrownFinalDeck)
        console.log(currentBlueFinalDeck)
        
        // console.log(currentGreenFinalDeck[0])
        // console.log(currentGreenFinalDeck[0 + 1])

        currentCard.style.backgroundColor = 'yellow' 
        
        let numberGreenCard = 0
        function showGreenCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/green/${currentGreenFinalDeck[numberGreenCard]}.png')`;
            console.log(currentGreenFinalDeck[numberGreenCard])
            numberGreenCard++
        }
        let numberBrownCard = 0
        function showBrownCard (){
            currentCard.style.backgroundImage = `url('assets/MythicCards/brown/${currentBrownFinalDeck[numberBrownCard]}.png')`;
            console.log(currentBrownFinalDeck[numberBrownCard])
            numberBrownCard++
        }
        let numberBlueCard = 0
        function showBlueCard() {
            currentCard.style.backgroundImage = `url('assets/MythicCards/blue/${currentBlueFinalDeck[numberBlueCard]}.png')`;
            console.log(currentBlueFinalDeck[numberBlueCard])
            numberBlueCard++      
        }
    

        // console.log(currentFinalDeck)

        clickDeck.addEventListener('click', function(){
            console.log('click on deck')
            if(dotGreenFirst.textContent > 0){
                dotGreenFirst.textContent--
                showGreenCard()
            }
            else if(dotBrownFirst.textContent > 0){
                dotBrownFirst.textContent--
                showBrownCard()
            }
            else if(dotBlueFirst.textContent > 0){
                dotBlueFirst.textContent--
                showBlueCard()
            }
            else if(dotGreenSecond.textContent > 0 && dotGreenFirst.textContent == 0 ){
                dotGreenSecond.textContent--
                showGreenCard()
            }
            else if(dotBrownSecond.textContent > 0 && dotBrownFirst.textContent == 0){
                dotBrownSecond.textContent--
                showBrownCard()
            }
            else if(dotBlueSecond.textContent > 0 && dotBlueFirst.textContent == 0){
                dotBlueSecond.textContent--
                showBlueCard()
            }
            else if(dotGreenThird.textContent > 0 && dotGreenFirst.textContent == 0 && dotGreenSecond.textContent == 0){
                dotGreenThird.textContent--
                showGreenCard()
            }
            else if(dotBrownThird.textContent > 0 && dotBrownFirst.textContent == 0 && dotBrownSecond.textContent == 0){
                dotBrownThird.textContent--
                showBrownCard()
            }
            else if(dotBlueThird.textContent > 0 && dotBlueFirst.textContent == 0 && dotBlueSecond.textContent == 0){
                dotBlueThird.textContent--
                showBlueCard()
            }
        }
        )
    }) 
}
shubNiggurath.addEventListener('click', pickShubNiggurathAncient)