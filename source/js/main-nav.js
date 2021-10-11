const mainNavButton = document.querySelector('.page-header__button')
const mainNavList = document.querySelector('.main-nav')

mainNavButton.onclick = function(evt) {
  evt.preventDefault()
  mainNavButton.classList.toggle('page-header__button--open')
  mainNavList.classList.toggle('main-nav--open')
  mainNavList.classList.toggle('main-nav--closed')
}
