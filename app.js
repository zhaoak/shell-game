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
let pearlLocation = 0;
tryAgainButton.disabled = true;
let shell_list = [shellOneButton, shellTwoButton, shellThreeButton];

/* Events */
shellOneButton.addEventListener('click', () => {
    pearlLocation = setRandomPearlLocation(3);
    let gameOutcome = 'lose'; // gameOutcome must be defined in this scope
    if (pearlLocation === 1) {
        gameOutcome = 'win';
    } else {
        gameOutcome = 'lose';
    }
    updateStats(gameOutcome);
    displayResults(pearlLocation, shellOneButton, gameOutcome);
});

shellTwoButton.addEventListener('click', () => {
    pearlLocation = setRandomPearlLocation(3);
    let gameOutcome = 'lose'; // gameOutcome must be defined in this scope
    if (pearlLocation === 2) {
        gameOutcome = 'win';
    } else {
        gameOutcome = 'lose';
    }
    updateStats(gameOutcome);
    displayResults(pearlLocation, shellTwoButton, gameOutcome);
});

shellThreeButton.addEventListener('click', () => {
    pearlLocation = setRandomPearlLocation(3);
    let gameOutcome = 'lose'; // gameOutcome must be defined in this scope
    if (pearlLocation === 3) {
        gameOutcome = 'win';
    } else {
        gameOutcome = 'lose';
    }
    updateStats(gameOutcome);
    displayResults(pearlLocation, shellThreeButton, gameOutcome);
});

tryAgainButton.addEventListener('click', () => {
    resetGame(pearlLocation);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)

// updates game screen once user has clicked a shell: moves shell, displays pearl, highlights selected shell, changes header, disables shell buttons
// shellSelected should be reference to selected shell itself, but pearlLocation can just be an int
function displayResults(pearlLocation, shellSelected, gameOutcome) {
    for (let i = 0; i < shell_list.length; i++) {
        shell_list[i].disabled = true;
        shell_list[i].classList.remove('shellButtonSelectScreen');
        shell_list[i].classList.add('shellButtonResultScreen');
    }

    tryAgainButton.disabled = false;

    if (gameOutcome === 'lose') {
        shellSelected.classList.remove('shellButtonResultScreen');
        shellSelected.classList.add('shellButtonResultScreenSelectedLocation');
        userPrompt.textContent = 'Too bad!';
    } else {
        // we don't display red "wrong guess" border when user guesses correctly
        userPrompt.textContent = 'You found the pearl!';
    }

    // reveal pearl
    shellContainer.children[pearlLocation - 1].firstElementChild.style.display = 'inline';
}

// returns to initial game screen: resets shells, changes header, clears selected shell border indicator. pearlLocation should be int
function resetGame(pearlLocation) {
    shellContainer.children[pearlLocation - 1].firstElementChild.style.display = 'none';
    userPrompt.textContent = 'Where could it be now?';
    for (let i = 0; i < shell_list.length; i++) {
        shell_list[i].classList.remove('shellButtonResultScreen');
        shell_list[i].classList.remove('shellButtonResultScreenSelectedLocation');
        shell_list[i].classList.add('shellButtonSelectScreen');
        shell_list[i].disabled = false;
    }

    tryAgainButton.disabled = true;
}

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

// resets stats to zero, also resets game to initial state
function resetStats() {
    wins = 0;
    losses = 0;
    winCounter.textContent = wins;
    loseCounter.textContent = losses;
}
