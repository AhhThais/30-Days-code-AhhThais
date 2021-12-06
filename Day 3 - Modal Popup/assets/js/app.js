const modal = document.querySelector('.js__modal')
const openModalBtn = document.querySelector('.js__modal__btn')
const iconCloseModal = document.querySelector('.js__close__icon')
const buttonCloseModal = document.querySelector('.js__close__btn')


console.log('Hello Wolrd');

function removeHide() {
	modal.classList.remove('hide')
}
function addHide() {
    modal.classList.add('hide')
}

openModalBtn.addEventListener('click', removeHide)
iconCloseModal.addEventListener('click', addHide)
buttonCloseModal.addEventListener('click', addHide)
