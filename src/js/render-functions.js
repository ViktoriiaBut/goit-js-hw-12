
const gallery = document.querySelector('.gallery');

 export function renderPictures(pics) {
  
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

       gallery.insertAdjacentHTML("beforeend", markup);
} 

export default renderPictures;