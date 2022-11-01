/* Imports */

/* Get DOM Elements */
const userPrompt = document.getElementById('userPrompt');
const shellOneButton = document.getElementById('shellOneButton');
const shellTwoButton = document.getElementById('shellTwoButton');
const shellThreeButton = document.getElementById('shellThreeButton');
const winCounter = document.getElementById('winCounter');
const loseCounter = document.getElementById('loseCounter');
const gameCounter = document.getElementById('gameCounter');
const tryAgainButton = document.getElementById('tryAgainButton');

/* State */
let wins = 0;
let losses = 0;

/* Events */
shellOneButton.addEventListener('click', () => {
    shellOneButton.style.border = 'thick dotted lightblue';
    const pearlLocation = setRandomPearlLocation(3);
    console.log(pearlLocation);
    let gameOutcome = 'lose'; // gameOutcome must be defined in this scope
    if (pearlLocation === 1) {
        gameOutcome = 'win';
    } else {
        gameOutcome = 'lose';
    }
    updateStats(gameOutcome);
    displayResults(pearlLocation, 1, gameOutcome);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

// updates game screen once user has clicked a shell: moves shell, displays pearl, highlights selected shell, changes header, disables shell buttons
function displayResults(pearlLocation, gameOutcome) {
    shellOneButton.disabled = true;
    shellTwoButton.disabled = true;
    shellThreeButton.disabled = true;
    tryAgainButton.classList.toggle('hidden');
}

// returns to initial game screen: resets shells, changes header, clears selected shell border indicator
function resetGame() {}

// update internal tracked stats as well as on-page ones
function updateStats(gameOutcome) {
    if (gameOutcome === 'win') {
        wins++;
        winCounter.textContent = wins;
        console.log('win');
    } else {
        losses++;
        loseCounter.textContent = losses;
        console.log('lose');
    }
    gameCounter.textContent = wins + losses;
}

// sets random pearl location, returns a number between 1 and shellCount
function setRandomPearlLocation(shellCount) {
    return Math.ceil(Math.random() * shellCount);
}
