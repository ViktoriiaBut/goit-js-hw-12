import getPictures from './js/pixabay-api.js';
import renderPictures from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');


searchForm.addEventListener ('submit', event => {
    event.preventDefault();
    gallery.innerHTML = '';  // Очистка галереи перед новым поиском
    const searchValue = event.target.elements.query.value;
    
if (!searchValue) {
  iziToast.error({
    title: 'Error',
    message: 'Please enter a search query!',
  }); 
   return;
  }
   loader.style.display = 'block';

  getPictures(searchValue)
  .then(data => {
   console.log(data);
   
  if (data.hits.length === 0) {
    iziToast.warning({
      title: 'No results',
      message: 'Sorry, there are no images matching your search query.'
    });
     } else {
    renderPictures(data.hits); 
  }
})

    .catch (error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    }) 
  
    .finally(() => {
      loader.style.display = 'none'; 
      refreshSearchForm(); 
    })
     
    function refreshSearchForm() {
    searchForm.reset(); 
  };
});



