/*========== FUNCTIONS ==========*/
const closeWindow = (element, delay) => {
  element.classList.add('opacity-hidden');

  setTimeout(() => element.classList.add('display-none'), delay);
}

const openWindow = (element, delay) => {
  element.classList.remove('display-none');

  setTimeout(() => element.classList.remove('opacity-hidden'), delay);
}

/*========== MODAL WINDOW ==========*/
const rulesButton = document.querySelector('.game__rules-button');
const closeButton = document.querySelector('.game__modal-close');
const modalWindow = document.querySelector('.game__modal');

rulesButton.addEventListener('click', () => {
  if(modalWindow.classList.contains('display-none')){
    openWindow(modalWindow, 10);
  } else {
    closeWindow(modalWindow, 450);
  }
});

closeButton.addEventListener('click', () => {
  closeWindow(modalWindow);
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

selectorButtons.forEach(element => {
  element.addEventListener('click', () => {
    closeWindow(selectorsWindow, 210);
    setTimeout(() => openWindow(resultsWindow, 10), 210);
  });
});