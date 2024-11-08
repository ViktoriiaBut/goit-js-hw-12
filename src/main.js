
import getPictures from './js/pixabay-api';
import renderPictures from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');


searchForm.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';  // Очистка галереи перед новым поиском

   
  const searchValue = event.target.elements.searchquery.value;
  if (searchValue.trim() === '')
     return getPictures(searchValue, renderPictures);
  
});

