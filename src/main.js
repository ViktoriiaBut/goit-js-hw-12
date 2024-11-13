import getPictures from './js/pixabay-api.js';
import renderPictures from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
export const gallery = document.querySelector('.gallery');


searchForm.addEventListener('submit', event => {
    event.preventDefault();
    gallery.innerHTML = '';  // Очистка галереи перед новым поиском

    const searchValue = event.target.elements.query.value;
  if (searchValue.trim() === '') return;
  getPictures(searchValue, renderPictures);
});

    