import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const apiKey = '46313967-d4d30fae59777882921d7e8bb'; // мой ключ
const loader = document.querySelector('.loader');

function getPictures(searchInput, renderFn) {
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
  
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
.then (data => {
    const pictures = data.hits;
    if (pictures.length === 0) {
       iziToast.show({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: 'red',
          position: 'topCenter',
        });
      } else {
        loader.style.display = 'block';
        
    }
    
    loader.style.display = 'none';
    renderFn(pictures);
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
}
 
export default getPictures;

