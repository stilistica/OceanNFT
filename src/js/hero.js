import { nftTop } from '../arrs/nftTop';

document.addEventListener('DOMContentLoaded', () => {
  const cardHero = document.querySelector('.hero-grid-3');

  let timeLeftHero = nftTop[0].ends;
  const numbersHero = cardHero.querySelectorAll('.top-number');

  const timerHero = setInterval(() => {
    if (timeLeftHero <= 0) {
      clearInterval(timerHero);

      numbersHero[0].textContent = '0';
      numbersHero[1].textContent = '0';
      numbersHero[2].textContent = '0';
      return;
    }

    timeLeftHero--;

    const hours = Math.floor(timeLeftHero / 3600);
    const mins = Math.floor((timeLeftHero % 3600) / 60);
    const sec = timeLeftHero % 60;

    numbersHero[0].textContent = String(hours).padStart(2, '0');
    numbersHero[1].textContent = String(mins).padStart(2, '0');
    numbersHero[2].textContent = String(sec).padStart(2, '0');
  }, 1000);
});
