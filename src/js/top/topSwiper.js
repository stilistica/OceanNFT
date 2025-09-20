import Swiper from 'swiper/bundle';
import { Pagination, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiperTop = new Swiper('.top-swiper', {
    direction: 'horizontal',
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
        slidesPerView: 1.14,
        spaceBetween: 24,
        loop: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 35.4,
        loop: false,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: false,
      },
    },
  });
  swiperTop.update();
});
