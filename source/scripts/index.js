/* в этот файл добавляет скрипты*/
const buttonWrapper = document.querySelector('.button-wrapper');
const burgerButton = document.querySelector('.burger-button');
const navigationList = document.querySelector('.navigation__list');
const navigation = document.querySelector('.navigation');
const mapImage = document.querySelector('.map__image');

if(navigationList.classList[1] === 'navigation__list--nojs') {
  navigation.classList.remove('navigation--nojs');
  burgerButton.classList.remove('burger-button--hide');
  navigationList.classList.remove('navigation__list--nojs');
  buttonWrapper.classList.remove('button-wrapper--nojs');
  mapImage.classList.remove('map__image--nojs');
}

buttonWrapper.addEventListener('click', () => {

  burgerButton.classList.toggle('burger-button--show');
  navigationList.classList.toggle('navigation__list--show');
});
