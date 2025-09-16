import Swiper from 'swiper/bundle';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiperTop = new Swiper('.collections-swiper', {
    direction: 'horizontal',
    loop: true,
    keyboard: { enabled: true, onlyInViewport: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    modules: [Pagination, Keyboard, Autoplay],
    resizeObserver: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      0: {
        slidesPerView: 1.15,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  swiperTop.update();
});
