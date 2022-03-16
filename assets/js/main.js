/*========== FUNCTIONS ==========*/

// windows
const closeWindow = (element, delay) => {
  element.classList.add('opacity-hidden');

  setTimeout(() => element.classList.add('display-none'), delay);
};

const openWindow = (element, delay) => {
  element.classList.remove('display-none');

  setTimeout(() => element.classList.remove('opacity-hidden'), delay);
};

// get selectors
const getSelector = (element) => {
  const div = element.target.classList;
  const parentDiv = element.target.parentNode.classList;

  if (parentDiv[0] == 'game__selector'){
    return parentDiv[2];
  } else {
    return div[2];
  }
};

const randomSelector = () => {
  const randomIndex = Math.floor(Math.random() * selectors.length);
  return selectors[randomIndex];
};

// players windows
const addPlayerSelector = (element) => {
  const playerWindow = document.querySelector('.game__result-player')

  playerWindow.innerHTML = `
      <div class="game__result-selector selector ${element}">
        <img src="assets/img/icon-${element}.svg" alt="" class="game__icon">
      </div>

      <span class="game__result-title">you picked</span>
  `;
};

const addComputerSelector = () => {
  const computerWindow = document.querySelector('.game__result-computer')
  const computerSelection = randomSelector().name;

  computerPick.push(computerSelection);
  
  function addComputerDiv() {
    computerWindow.innerHTML = `
      <div class="game__result-selector selector ${computerSelection}">
        <img src="assets/img/icon-${computerSelection}.svg" alt="" class="game__icon">
      </div>

      <span class="game__result-title">the house picked</span>
  `;
  } 

  setTimeout(() => addComputerDiv(), 1000);
};

const removeComputerSelector = () => {
  const computerWindow = document.querySelector('.game__result-computer')
  
  computerWindow.innerHTML = `
    <div class="game__result-background">
                  
    </div>
  `;
};

const removePlayerSelector = () => {
  const playerWindow = document.querySelector('.game__result-player')

  playerWindow.innerHTML = ``;
}

// restart / reset
const addRestart = (string) => {
  const div = document.querySelector('.game__restart');

  restartTitle.textContent = string;
  
  openWindow(div, 1000);
};

const resetGame = () => {
  removePlayerSelector();
  removeComputerSelector();
}

// define winner
const defineWinner = (element) => {
  playerSelector = getSelector(element);
  computerSelector = computerPick[0];
  playerObj = selectors.find(target => target.name === playerSelector);
  computerObj = selectors.find(target => target.name === computerSelector);
  
  if (playerObj.beats === computerObj.name) {
    addRestart('you won');
    scoreCount.textContent++;
    console.log(playerObj);
    console.log(computerObj);
  } else if (computerObj.beats === playerObj.name) {
    addRestart('you lost');
    console.log(computerObj);
    console.log(playerObj);
  } else if (computerObj.name === playerObj.name) {
    addRestart('tie');
    console.log(computerObj);
    console.log(playerObj);
  }
};

/*========== MODAL WINDOW ==========*/
const rulesButton = document.querySelector('.game__rules-button');
const closeButton = document.querySelector('.game__modal-close');
const modalWindow = document.querySelector('.game__modal');

rulesButton.addEventListener('click', () => {
  if(modalWindow.classList.contains('display-none')){
    openWindow(modalWindow, 100);
  } else {
    closeWindow(modalWindow, 300);
  }
});

closeButton.addEventListener('click', () => {
  closeWindow(modalWindow, 300);
})

/*========== RESTART BUTTON ==========*/
let restartTitle = document.querySelector('.game__restart-title');
const restartButton = document.querySelector('.game__restart-button');

restartButton.addEventListener('click', () => {
  closeWindow(resultsWindow, 210);
  setTimeout(() => openWindow(selectorsWindow, 10), 210);
  setTimeout(() => resetGame(), 220);
  setTimeout(() => restartTitle.textContent = ``, 220)
  setTimeout(() => computerPick.pop(), 220)
});

/*========== GAME ==========*/
const computerPick = [];
const selectorsWindow = document.querySelector('.game__container-selectorsWindow');
const resultsWindow = document.querySelector('.game__container-resultsWindow');
const selectorButtons = document.querySelectorAll('.game__selector');
let scoreCount = document.querySelector('.header__count');
const selectors = [
  {
    name: 'rock',
    beats:'scissors'
  },

  {
    name: 'paper',
    beats:'rock'
  },

  {
    name: 'scissors',
    beats:'paper'
  }
];

function game() {
  selectorButtons.forEach(element => {
    element.addEventListener('click', (element) => {
      const chosenSelector = getSelector(element);
      addPlayerSelector(chosenSelector);
  
      closeWindow(selectorsWindow, 210);
      setTimeout(() => openWindow(resultsWindow, 10), 210);

      addComputerSelector();
      defineWinner(element);
      console.log(computerPick);
    });
  });
  
};

game();