/* Imports */

/* Get DOM Elements */
const userPrompt = document.getElementById('userPrompt');
const shellContainer = document.getElementById('shellContainer');
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
tryAgainButton.disabled = true;
let shell_list = [shellOneButton, shellTwoButton, shellThreeButton];

/* Events */
shellOneButton.addEventListener('click', () => {
    const pearlLocation = setRandomPearlLocation(3);
    console.log(pearlLocation);
    let gameOutcome = 'lose'; // gameOutcome must be defined in this scope
    if (pearlLocation === 1) {
        gameOutcome = 'win';
    } else {
        gameOutcome = 'lose';
    }
    updateStats(gameOutcome);
    displayResults(pearlLocation, shellOneButton, gameOutcome);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

// updates game screen once user has clicked a shell: moves shell, displays pearl, highlights selected shell, changes header, disables shell buttons
// shellSelected should be reference to selected shell itself, but pearlLocation can just be an int
function displayResults(pearlLocation, shellSelected, gameOutcome) {
    shellOneButton.disabled = true;
    shellTwoButton.disabled = true;
    shellThreeButton.disabled = true;
    tryAgainButton.disabled = false;

    if (gameOutcome === 'lose') {
        shellSelected.style.border = 'thick dashed red';
        userPrompt.textContent = 'Too bad!';
    } else {
        shellSelected.style.border = 'thick dashed transparent';
        userPrompt.textContent = 'You found the pearl!';
    }

    // reveal pearl
    shellContainer.children[pearlLocation - 1].firstElementChild.style.display = 'inline';
}

// returns to initial game screen: resets shells, changes header, clears selected shell border indicator. pearlLocation should be int
function resetGame(pearlLocation) {}

// update internal tracked stats as well as on-page ones
function updateStats(gameOutcome) {
    if (gameOutcome === 'win') {
        wins++;
        winCounter.textContent = wins;
    } else {
        losses++;
        loseCounter.textContent = losses;
    }
    gameCounter.textContent = wins + losses;
}

// sets random pearl location, returns a number between 1 and shellCount
function setRandomPearlLocation(shellCount) {
    return Math.ceil(Math.random() * shellCount);
}
