import {nftTop}  from '../arrs/nftTop';
import sprite from '../img/sprite.svg';
import offiicial from '/img/offiicial.svg'

const containerTop = document.querySelector('.top-cards-list');

const cardsHtmlTop = nftTop.map(
  ({
    imgDeskOne,
    imgDeskTwo,
    imgMobOne,
    imgMobTwo,
    title,
    avatarUrl,
    accName,
    eth,
    usd,
    ends,
  }) => {
    return `
    <div class="top-swiper-slide swiper-slide">
      <picture>
      <source
        srcset="
          ${imgDeskOne} 1x,
          ${imgDeskTwo} 2x
        "
        media="(min-width: 1440px)"
      />

      <source
        srcset="
          ${imgMobOne} 1x,
          ${imgMobTwo} 2x
        "
        media="(max-width: 1439px)"
      />

      <img
        class="image-top"
        src="${imgMobTwo}"
        alt="${title}"
      />
      </picture>
      <div class='top-card my-div'>
        <div class='top-info'>
          <div class='top-info-title'>
            <h4>${title}</h4>
            <div class='top-user'>
              <img class='top-img-user' src="${avatarUrl}" alt="${title}" />
              <p>${accName}</p>
              <svg>
                <use href="${offiicial}"></use>
              </svg>
            </div>
          </div>
          <div class='top-price'>
            <p class='top-price-title'>Reserve price</p>
            <div class='top-eth-el'>
              <svg>
                <use href="${sprite}#icon-eth"></use>
              </svg>
              <p class='top-eth'>${eth}</p>
              <p class='top-usd'>(${usd})</p>
            </div>
          </div>
        </div>
        <div class='top-ends-btn'>
          <div class='top-card-end'>
            <p class='top-end-title'>Auction Ends in</p>
            <ul class='top-date'>
              <li>
              <p class='top-number'></p>
              <p>Hours</p>
              </li>
              <li>
              <p class='top-number'></p>
              <p>Mins</p>
              </li>
              <li>
              <p class='top-number'></p>
              <p>Secs</p>
              </li>
            </ul>
          </div>
          <button class='my-btn'>
            Place Bid
            <svg class="right-top">
              <use href="${sprite}#icon-right"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
    `;
  }
);

containerTop.innerHTML = cardsHtmlTop.join('');

const cardsTop = containerTop.querySelectorAll('.top-swiper-slide');

cardsTop.forEach((card, index) => {
  let timeLeft = nftTop[index].ends;

  const numbers = card.querySelectorAll('.top-number');

  const timer = setInterval(() => {
    if (timeLeft <= 0 ) {
      clearInterval(timer);
      numbers[0].textContent = '0';
      numbers[1].textContent = '0';
      numbers[2].textContent = '0';
      return;
    }

    timeLeft --;

    const hours = Math.floor(timeLeft / 3600);
    const mins = Math.floor((timeLeft % 3600) / 60);
    const sec = timeLeft % 60;

    numbers[0].textContent = hours;
    numbers[1].textContent = mins;
    numbers[2].textContent = sec;
  }, 1000)
});