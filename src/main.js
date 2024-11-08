import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const searchInput = document.querySelector('input[name="search"]').value;
  gallery.innerHTML = ''; // Очистка галереи перед новым поиском

});