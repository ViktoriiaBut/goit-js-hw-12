import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const apiKey = '46313967-d4d30fae59777882921d7e8bb'; // мой ключ
const lightbox = new SimpleLightbox('.gallery a');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchInput = document.querySelector('input[name="search"]').value;
  gallery.innerHTML = ''; // Очистка галереи перед новым поиском

  axios
    .get(
      `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&image_type=photo&orientation=horizontal&safesearch=true&_limit=9`
    )
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

          // Обновление прогрес0са загрузки после загрузки каждого изображения
          const image = galleryItem.querySelector('.gallery-image');
          image.onload = () => {
            loadedImages++;
            if (loadedImages === totalImages) {
              loader.style.display = 'none'; // Прячем загрузчик посля загрузки всех изображений
            }
          };
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
});