/*========== FUNCTIONS ==========*/
const closeWindow = (element, delay) => {
  element.classList.add('opacity-hidden');

  setTimeout(() => element.classList.add('display-none'), delay);
};

const openWindow = (element, delay) => {
  element.classList.remove('display-none');

  setTimeout(() => element.classList.remove('opacity-hidden'), delay);
};

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

const addPlayerSelector = (element) => {
  const playerWindow = document.querySelector('.game__result-player')

  playerWindow.innerHTML = `
      <div class="game__result-selector selector ${element}">
        <img src="assets/img/icon-${element}.svg" alt="" class="game__icon">
      </div>

      <span class="game__result-title">you picked</span>
  `;
};

const addComputerSelector = (element) => {
  const computerWindow = document.querySelector('.game__result-computer')
  const computerSelection = randomSelector().name;

  computerWindow.innerHTML = `
      <div class="game__result-selector selector ${computerSelection}">
        <img src="assets/img/icon-${computerSelection}.svg" alt="" class="game__icon">
      </div>

      <span class="game__result-title">the house picked</span>
  `;
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

/*========== GAME ==========*/
const selectorsWindow = document.querySelector('.game__container-selectorsWindow');
const resultsWindow = document.querySelector('.game__container-resultsWindow');
const selectorButtons = document.querySelectorAll('.game__selector');
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
    });
  });
  
  addComputerSelector();
};

game();