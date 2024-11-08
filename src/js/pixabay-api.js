'use strict';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { images } from './images-data.js';

// const galleryElem = document.querySelector('.gallery');
// galleryElem.style.listStyleType = 'none';

// // Деструктуризация
// for (const img of images) {
//   const { preview, original, description } = img;

//   // создание елемента <img>
//   const imgEl = document.createElement('img');
//   imgEl.classList = 'gallery-image';
//   imgEl.width = '360';
//   imgEl.src = preview;
//   imgEl.alt = description;

//   // создание елемента <a>
//   const linkEl = document.createElement('a');
//   linkEl.classList = 'gallery-link';
//   linkEl.href = original;
//   // linkEl.dataset.src = original;
//   linkEl.title = description;

//   // создание елемента <li>
//   const itemEl = document.createElement('li');
//   itemEl.classList = 'gallery-item';

//   // вложение елементів (первый тот в который вкладываем, потом тот что вкладываем)
//   linkEl.appendChild(imgEl);
//   itemEl.appendChild(linkEl);
//   galleryElem.appendChild(itemEl);
// }
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionsData: 'alt',
//   showCounter: false,
// });