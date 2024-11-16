import getPictures from './js/pixabay-api.js';
import renderPictures from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const loader = document.querySelector('.loader');
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

function showLoader() {
  loader.style.display = 'flex';
}

function hideLoader() {
  loader.style.display = 'none';
}


searchForm.addEventListener ('submit', event => {
    event.preventDefault();
    const searchValue = event.target.elements.query.value;
    
   if (!searchValue) {
  iziToast.error({
    title: 'Error',
    message: 'Please enter a search query!',
  }); 
     return;
  }

  showLoader();
  gallery.innerHTML = ''; // Очистка галереи перед новым поиском
   
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
      hideLoader();  
      refreshSearchForm(); 
    })
     
    function refreshSearchForm() {
    searchForm.reset(); 
  };
});



