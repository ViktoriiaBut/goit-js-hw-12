import axios from 'axios';

const apiKey = '46313967-d4d30fae59777882921d7e8bb'; // мой ключ


export const fetchImages = query => {
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
        if (!response.ok) {
            throw new Error('Error fetching images');
        }
        return response.json();
    })
    .then(data => data.hits);
};