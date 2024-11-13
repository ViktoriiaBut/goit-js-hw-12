import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const apiKey = '46313967-d4d30fae59777882921d7e8bb'; // мой ключ
const loader = document.querySelector('.loader');

function getPictures(query, renderFn) {
    const searchParams = new URLSearchParams({
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 9    
    });

       const url = `https://pixabay.com/api/?${searchParams}`;
      
        loader.style.display = 'block';
        
        fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          const pictures = data.hits;
          if (pictures.length === 0) {
            iziToast.error({
              title: 'No pictures found',
              message: 'Try another query',
              messageColor: 'black',
              messageSize: '14px',
              position: 'topCenter',
              timeout: 3000,
              closeOnClick: true,
            });
          }
          
          loader.style.display = 'none';
          renderFn(pictures);
        })
        .catch(error => console.log(error));
    }


export default getPictures;
