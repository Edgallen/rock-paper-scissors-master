/*========== FUNCTIONS ==========*/
const closeWindow = (element) => {
  element.classList.add('opacity-hidden');

  setTimeout(() => element.classList.add('display-none'), 450);
}

const openWindow = (element) => {
  element.classList.remove('display-none');

  setTimeout(() => element.classList.remove('opacity-hidden'), 10);
}

/*========== MODAL WINDOW ==========*/
const rulesButton = document.querySelector('.game__rules-button');
const closeButton = document.querySelector('.game__modal-close');
const modalWindow = document.querySelector('.game__modal');

rulesButton.addEventListener('click', () => {
  if(modalWindow.classList.contains('display-none')){
    openWindow(modalWindow);
  } else {
    closeWindow(modalWindow);
  }
});