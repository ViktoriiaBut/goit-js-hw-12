import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


const apiKey = '46313967-d4d30fae59777882921d7e8bb'; // мой ключ
const loader = document.querySelector('.loader');

axios
   .get('https://pixabay.com/api/', {
      params: {
        key: apiKey,
        q: searchInput,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 9
      }
    })
    
    .then(response => {
      const hits = response.data.hits;
      console.log(hits);

      if (hits.length === 0) {
        iziToast.show({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topCenter',
        });
      } else {
        loader.style.display = 'block';
        const totalImages = hits.length;
        let loadedImages = 0; // Количество загруженных изображений

        hits.forEach(hit => {
          const galleryItem = document.createElement('li');
          galleryItem.classList.add('gallery-item');
          galleryItem.innerHTML = `
            <a href="${hit.largeImageURL}">
              <img src="${hit.webformatURL}" alt="${hit.tags}" class="gallery-image">
            </a>
          `;
          gallery.appendChild(galleryItem);

        });

        lightbox.refresh(); // Обновляем SimpleLightbox
      }
    })
    .catch(error => {
      console.error(error); // Выводим ошибку в консоль на пофиксить
      iziToast.show({
        title: 'Error',
        message: 'Error - while loading images. Please open new images',
        color: 'red',
        position: 'topCenter',
      });
    });

    export default getPictures;