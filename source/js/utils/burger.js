
const burgerToggle = () => {
  const burgerButton = document.querySelector('[data-validate="burger-toggle"]');
  const burgerMenu = document.querySelector('[data-validate="burger-menu"]');
  const burgerIcon = document.querySelector('[data-validate="burger-icon"]');
  const closeIcon = document.querySelector('[data-validate="close-icon"]');

  if (burgerButton && burgerMenu && burgerIcon && closeIcon) {
    burgerButton.addEventListener('click', () => {
      const isActive = burgerMenu.getAttribute('data-active') === 'true';
      burgerMenu.setAttribute('data-active', !isActive);
      burgerMenu.setAttribute('aria-hidden', isActive);
      if (isActive) {
        burgerMenu.setAttribute('inert', '');
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      } else {
        burgerMenu.removeAttribute('inert');
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      }
      burgerButton.setAttribute('aria-pressed', !isActive);
      burgerButton.setAttribute('aria-label', isActive ? 'Открыть меню' : 'Закрыть меню');
    });
  }
};

export {burgerToggle};
