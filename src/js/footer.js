import sprite from '/img/sprite.svg';

document.addEventListener("DOMContentLoaded", () => {
const collapse = document.querySelectorAll('.collapse');

collapse.forEach(el => {
  const btn = document.querySelector(`[data-bs-target="#${el.id}"]`);
  const svgUse = btn.querySelector('use');

  el.addEventListener('show.bs.collapse', () => {
    svgUse.setAttribute('href', `${sprite}#icon-close`);
  });
  el.addEventListener('hide.bs.collapse', () => {
    svgUse.setAttribute('href', `${sprite}#icon-open`);
  });
})
});

