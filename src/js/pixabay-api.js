import axios from 'axios';

const apiKey = '46313967-d4d30fae59777882921d7e8bb'; // мой ключ

export async function getPictures(query, currentPage) {
    const searchParams = new URLSearchParams({
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: currentPage    
    });

       const url = `https://pixabay.com/api/?${searchParams}`;
            
try {
  const response = await axios.get(url);
  return response.data;
} catch (error) {
  console.error('Error fetching images:', error);
  throw error;
}
}
export default getPictures;