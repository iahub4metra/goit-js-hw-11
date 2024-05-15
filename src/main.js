import { getRequestApi } from "./js/pixabay-api";
import { renderImages, showLoader, hideLoader } from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const btnEl = document.querySelector('.btnSubmit');
const formEl = document.querySelector('.form');
const inputEl = document.querySelector('#inputSearch');
const listEl = document.querySelector('.list');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    listEl.innerHTML = "";
    getRequestApi(inputEl.value, listEl, renderImages, showLoader, hideLoader, loaderEl)
})
listEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'IMG') {
        const lightbox = new SimpleLightbox('.list-item a', {
        sourceAttr: "href",
        animationSpeed: 100,
        fadeSpeed: 50,
        animationSlide: false,
        scrollZoom: false,
        captionsData: 'alt',
        captionDelay: 250,
    });
    }
    
})
