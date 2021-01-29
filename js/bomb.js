/*----- constants -----*/
const INITIAL_TIME = 5

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

// each wire element
let wires = []

// backdrop image
let backgroundEl = null

// timer
let timerEl = null

// reset button
let resetButtonEl = null

// I want this function to run every second.
function updateClock() {
    // console.log('countdown the timer!')
    // Decrement timeRemaining, if there is no time left, end the game
    timeRemaining = timeRemaining - 1;
    if(timeRemaining <= 0) {
        //end the game
        endGame(false); // endgame.. we lost

    }

    // Update clock text with the timeRemaining
    timerEl.textContent = "0:00:" + timeRemaining;
}

// runs to set up game state
function initializeGame() {
    console.log('set the game up!')
    // Set the remaining time variable
    timeRemaining = INITIAL_TIME;
    wireState = {
        blue: false,
        green: false,
        red: false,
        white: false,
        yellow: false
    }
    wiresToCut = []
    Math.floor(Math.random() * 4)

    // for (i = 0; i <= wires.length; i++) {

    // }
    // Start the countdown interval
    countdown = setInterval(updateClock, 1000) // Runs the updateClock() every second
}

// handles reset button click
function resetGame() {
    console.log('reset game! 👾')
    backgroundEl.style.backgroundImage = "url(img/simcity.jpg)";
    timerEl.style.color = "red";
    timerEl.textContent = "0:00:" + INITIAL_TIME;
    initializeGame()
}

// handles reset button click
function cutWire(event) {
    console.log('cut a wire!', event)
    const wireClicked = null
    // for (wire of wires){
    //     if(wire == true)
    console.log(event.target.id)
    // }
}

// handle game over state 
function endGame(isGameWon) {
    console.log('END GAME 💣')
    // Clear the countdown and update gameOver state variable
    clearInterval(countdown);
    gameOver = true;

    // If the passed in isGameWon argument is true, set the timer text to green
    // Otherwise, change the background image to the explosion

    if(isGameWon) {
        // If we won, change text color to green
        console.log("Hooray Patrick! We saved the city!")
        timerEl.style.color = "green"
    } else {
        // But if we lost, change the background image to the exploded city pic
        console.log('Barnacles! The city exploded!')
        backgroundEl.style.backgroundImage = "url(img/explosion.jpg)";
    }
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