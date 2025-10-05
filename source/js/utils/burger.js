
const burgerToggle = () => {
  const burgerButton = document.querySelector('[data-validate="burger-toggle"]');
  const burgerMenu = document.querySelector('[data-validate="burger-menu"]');

  if (burgerButton && burgerMenu) {
    burgerButton.addEventListener('click', () => {
      const isActive = burgerMenu.getAttribute('data-active') === 'true';
      burgerMenu.setAttribute('data-active', !isActive);
      burgerMenu.setAttribute('aria-hidden', isActive);
      burgerButton.setAttribute('aria-label', isActive ? 'Открыть меню' : 'Закрыть меню');
    });
  }
};

export {burgerToggle};
