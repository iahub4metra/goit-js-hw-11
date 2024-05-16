import { getRequestApi } from "./js/pixabay-api";
import { renderImages, showLoader, hideLoader, iziToastShow} from "./js/render-functions";
import simpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const btnEl = document.querySelector('.btnSubmit');
const formEl = document.querySelector('.form');
const inputEl = document.querySelector('#inputSearch');
const listEl = document.querySelector('.list');
const loaderEl = document.querySelector('.loader');
const lightbox = new simpleLightbox('.list a', {
        sourceAttr: "href",
        animationSpeed: 100,
        fadeSpeed: 50,
        animationSlide: false,
        scrollZoom: false,
        captionsData: 'alt',
        captionDelay: 250,
});
   

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputData = inputEl.value.trim(); 
    if (inputData === "") {
        iziToastShow();
    } else {
        listEl.innerHTML = "";
        showLoader(loaderEl)
        getRequestApi(inputData)
            .then(data => {
                renderImages(data, listEl)
                lightbox.refresh();
            })
            .finally(() => {
                hideLoader(loaderEl)
            })
    }
})

