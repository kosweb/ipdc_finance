const mainNavButton = document.querySelector('.page-header__button')
const mainNavList = document.querySelector('.main-nav')

mainNavButton.onclick = function(evt) {
  evt.preventDefault()
  mainNavButton.classList.toggle('page-header__button--open')
  mainNavList.classList.toggle('main-nav--open')
  mainNavList.classList.toggle('main-nav--closed')
}

const searchButton = document.querySelector('.page-header__search-button');
const searchForm = document.querySelector('.page-header__search-form');
const searchField = document.querySelector('.page-header__search-field');

searchButton.onclick = function(evt) {
	evt.preventDefault();
	searchButton.classList.toggle('page-header__search-button--open');
	searchForm.classList.toggle('page-header__search-form--open');
	searchField.focus();
};

