import { collections } from '../../arrs/collections.js';
import offiicial from '../../img/offiicial.svg';

const containerCollections = document.querySelector('.collections-cards-list');

const cardsHtmlCollections = collections.map(
  ({
    imgDeskOne,
    imgDeskTwo,
    imgMobOne,
    imgMobTwo,
    avatar,
    name,
    username,
    folowers,
    following,
    artworks,
  }) => {
    return `
    <li class="collections-swiper-slide swiper-slide my-div">
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
            class="image-collections-card"
            src="${imgMobTwo}"
            alt="${name}"
          />
          </picture>
          <div class='collections-card'>
            <div class='collections-info'>
              <img class='collections-img-user' src="${avatar}" alt="${name}" />
              <p class='coll-name'>${name}</p>
              <p class='col-username'>
                ${username}
                <svg>
                <use href="${offiicial}"></use>
                </svg>
              </p>
            </div>
            <ul class='collections-stat'>
              <li>
              ${folowers}
              <span>Folowers</span>
              </li>
              <li>
              ${following}
              <span>Following</span>
              </li>
              <li>
              ${artworks}
              <span>Artworks</span>
              </li>
            </ul>
            <button class='my-btn'>Follow</button>
          </div>
        </li>
    `;
  }
);

containerCollections.innerHTML = cardsHtmlCollections.join('');
