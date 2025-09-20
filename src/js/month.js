import { sellers } from '../arrs/sellers.js';
import sprite from '../img/sprite.svg';

document.addEventListener('DOMContentLoaded', () => {
  function renderSellers() {
    let sellersRender = sellers;
    const listSellers = document.querySelector('.month-list');

    if (window.innerWidth < 786) {
      sellersRender = sellers.filter(s => [2, 5, 8, 11].includes(s.id));
    }
    if (window.innerWidth < 1440 && window.innerWidth >= 768) {
      sellersRender = sellers.slice(0, 8);
    }

    const htmlSellers = sellersRender.map((s, idx) => {
      return `
  <li class='month-item'>
    <div class='month-info'>
      <p class="seller-number">${idx + 1}</p>
      <img src="${s.avatar}" alt="${s.name}">
      <div class='month-user'>
        <h4>${s.name}</h4>
        <p class='month-eth'>
          <svg>
            <use href="${sprite}#icon-eth"></use>
          </svg>
          ${s.eth}
        </p>
      </div>
    </div>
    <div class='month-prosent ${s.color}'>${s.prosents}</div>
  </li>
  `;
    });

    listSellers.innerHTML = htmlSellers.join('');
  }

  renderSellers();

  window.addEventListener('resize', renderSellers);
});
