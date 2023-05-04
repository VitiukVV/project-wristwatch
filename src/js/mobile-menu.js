// Шукаємо елементи в html розмітці
const mobileMenu = document.querySelector('[data-menu-container]');
const openMenuBtn = document.querySelector('[data-open-menu]');
const closeMenuBtn = document.querySelector('[data-close-menu]');
const vitiuk = document.querySelector('body');
// Кінець 1 блоку

// Функція, яка додає та знімає класи через toggle
const toggleMenu = () => {
  const isMenuOpen = mobileMenu.classList.toggle('visually-hidden');
  vitiuk.classList.toggle('no-scroll');
};
// Кінець 2 блоку

// Обробник події по кліку мишки
openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
// Кінець 3 блоку

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.add('visually-hidden');
  vitiuk.classList.remove('no-scroll');
});
