/*----- constants -----*/
const INITIAL_TIME = 30

/*----- app's state (variables) -----*/
// varaible store timer's countdown
let timeRemaining = 0
// store our timer's setInterval so we can clear it
let countdown = null
// boolean for game over
let gameOver = false
// keep track of clicked wires
let wireState = {
    blue: false,
    green: false,
    red: false,
    white: false,
    yellow: false
}
// array of wires that need to be clicked to win the game
let wiresToCut = []

/*----- cached element references -----*/
// event listeners on the wires
let wireboxEl = null

/*----- event listeners -----*/
// each wire element
let wires = []

// backdrop image
let backgroundEl = null

// timer
let timerEl = null

// reset button
let resetButtonEl = null

//this function should run every second
function updateClock() {
    console.log('countdown the timer!')
    //decrement timeRemaining, end game is there is no time left
    timeRemaining--;
    if(timeRemaining <= 0) {
        console.log('The game is over, the bomb exploded')
    }
    //update the clock text with time remaining
}

// runs to set up game state
function initializeGame() {
    console.log('set the game up!')
    //set the remaining time variable 
    timeRemaining = INITIAL_TIME
    //start the countdown varibale 
   countdown =  setInterval(updateClock, 1000) //updates clock every sec
}

// handles reset button click
function resetGame() {
    console.log('reset game! 👾')
}

// handles reset button click
function cutWire(event) {
    console.log('cut a wire!', event)
}

// handle game over state 
function endGame(isGameWon) {
    console.log('END GAME 💣')
}

/*----- event listeners -----*/
document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded!');
    // <main> element to manippulte the backgorund 
    backgroundEl = document.querySelector('main')
    // countdown timer element
    timerEl = document.querySelector('#timer')
    // reset button to reset the game
    resetButtonEl = document.querySelector('#reset')
    resetButtonEl.addEventListener('click', resetGame)
    // wirebox and click event listener
    wireboxEl = document.querySelector('#wirebox')
    wireboxEl.addEventListener('click', cutWire)
    // each wire element in an array
    wires = wireboxEl.children
    // init the game
    initializeGame()
}) 