import getPictures from './js/pixabay-api.js';
import renderPictures from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector(".load-more");
const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');


function showLoader() {
  loader.style.display = 'flex';
}

function hideLoader() {
  loader.style.display = 'none';
}

let page = 1;
let searchValue = '';
let totalHits = 0;
let loadedHits = 0;

loadMore.style.display = 'none';
searchForm.addEventListener ('submit', handleSubmit); 
loadMore.addEventListener("click", loadMoreImg);

async function handleSubmit(event) {
    event.preventDefault();
    
    const searchValue = event.target.elements.query.value.trim();
    gallery.innerHTML = ''; 

   if (!searchValue) {
  iziToast.error({
    title: 'Error',
    message: 'Please enter a search query!',
  }); 
     return;
  }

  loadMore.style.display = "none";
  page = 1;
  totalHits = 0;
  loadedHits = 0;
  gallery.innerHTML = "";

  showLoader();
  await loadData(searchValue, page);
  hideLoader();
  searchForm.reset();
}

async function loadData(searchValue, page) {
  try {
      const data = await getPictures(searchValue, page);

      if (data.hits.length === 0) {
          loadMore.style.display = "none";
          iziToast.warning({
         title: 'No results',
         message: 'Sorry, there are no images matching your search query.'
          });
          return;
      }
      totalHits = data.totalHits;
      loadedHits += data.hits.length;

      renderPictures(data.hits);
      setupLightbox();

      if (page > 1) {
          scrollPage();
      }
      showLoadMoreBtn();

  } catch (error) {
      iziToast.error({
          color: 'red',
          message: `Error fetching more images: ${error.message}`,
          
      });
  }
}
async function loadMoreImg() {
  page++;
  loadMore.disabled = true;
  showLoader();
  await loadData(searchValue, page);
  hideLoader();
}

function showLoadMoreBtn() {
  if (loadedHits >= totalHits) {
      loadMore.style.display = "none";
      iziToast.error({
        title: 'End of Results',
        message: `We're sorry, but you've reached the end of search results.`,
      });
  } else {
      loadMore.style.display = "block";
      loadMore.disabled = false;
  }
}

function setupLightbox() {
  if (lightbox) {
      lightbox.refresh();
  } else {
      lightbox = new SimpleLightbox('.gallery-item a', {
          captionsData: 'alt',
          captionDelay: 250,
      });
  }
}
function scrollPage() {
  const galleryItem = document.querySelector(".gallery-item");
  if (galleryItem) {
      const { height } = galleryItem.getBoundingClientRect();
      window.scrollBy({
          top: height * 2,
          behavior: "smooth"
      });
  }
}








     