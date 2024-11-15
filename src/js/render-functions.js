import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a');
const gallery = document.querySelector('.gallery');

 export function renderPictures(pics) {
  console.log(pics);
  console.log(gallery);
  
  const markup = pics
    .map(
       ({ webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => { return `
<li class="gallery-item">
                <a href="${largeImageURL}" class="gallery-link">
                    <img src="${webformatURL}" alt="${tags}" class="gallery-image" /></a>
                  <div class="info">
                    <p class="info-item"><span>Likes:</span> ${likes}</p>
                    <p class="info-item"><span>Views:</span> ${views}</p>
                    <p class="info-item"><span>Comments:</span> ${comments}</p>
                    <p class="info-item"><span>Downloads:</span> ${downloads}</p>
                </div>
            </li>`
          })
       .join('');
  gallery.innerHTML = markup;
  console.log(gallery.innerHTML);
  
  lightbox.refresh();
}
export default renderPictures;

