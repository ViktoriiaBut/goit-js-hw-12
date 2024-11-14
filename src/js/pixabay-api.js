
const apiKey = '46313967-d4d30fae59777882921d7e8bb'; // мой ключ

export function getPictures(query) {
    const searchParams = new URLSearchParams({
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 9    
    });

       const url = `https://pixabay.com/api/?${searchParams}`;
            
       return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        });
    }

export default getPictures;
