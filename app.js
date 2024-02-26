console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
function randomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

let randomNum = randomNumber()
console.log(randomNum)

const userGuess = (event) => {
    event.preventDefault()
    let guess = new FormData(event.target)
    let formattedGuess = Object.fromEntries(guess)
    console.log(formattedGuess)
    if (parseInt(formattedGuess.guess) == randomNum) {
        correct(formattedGuess.guess)
        let playAgain = document.getElementById('playAgain')
        let button = document.createElement('button')
        button.innerText = 'Play Again'
        button.addEventListener('click', (event)=>{
            window.location.reload()
        })
        playAgain.appendChild(button)
    } else if (parseInt(formattedGuess.guess) <= randomNum) {
        low()
        addIncorrect(formattedGuess)
    } else if (parseInt(formattedGuess.guess) >= randomNum) {
        high()
        addIncorrect(formattedGuess)
    }
    
}

const addIncorrect = (guess) => {
    let guessContainer = document.getElementById('guessContainer')
    let li = document.createElement('li')
    li.innerText = `${guess.guess}`
    guessContainer.appendChild(li)
}

const correct = (guess) => {
    let guessResult = document.getElementById('guessResult')
    guessResult.innerText = `${guess} is correct. You win!`
}

const low = () => {
    let guessResult = document.getElementById('guessResult')
    guessResult.innerText = 'Too LOW!'
}

const high = () => {
    let guessResult = document.getElementById('guessResult')
    guessResult.innerText = 'Too HIGH!'
}

const playAgain = () => {
    window.location.reload()
}
