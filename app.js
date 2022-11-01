/* Imports */

/* Get DOM Elements */
const userPrompt = document.getElementById('userPrompt');
const shellOneButton = document.getElementById('shellOneButton');
const shellTwoButton = document.getElementById('shellTwoButton');
const shellThreeButton = document.getElementById('shellThreeButton');
const winCounter = document.getElementById('winCounter');
const LoseCounter = document.getElementById('loseCounter');
const gameCounter = document.getElementById('gameCounter');

/* State */

/* Events */
shellOneButton.addEventListener('click', () => {
	
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

// updates game screen once user has clicked a shell: moves shell, displays pearl, highlights selected shell, changes header
function displayResults(shellLocation, gameOutcome) {}

// returns to initial game screen: resets shells, changes header
function resetGame() {}

// update internall tracked stats as well as on-page ones
function updateStats(gameOutcome) {}
