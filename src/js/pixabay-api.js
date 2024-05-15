import { iziToastShow } from "./render-functions";

export const getRequestApi = (userKeyWords, element, foo, showLoaderFoo, hideLoaderFoo, loader) => {
    showLoaderFoo(loader);
    return fetch(`https://pixabay.com/api/?key=43749964-78fe686efe4660c3d41d86a93&q=${userKeyWords}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
        .then(images => {
            const data = images.hits;
            if (data.length === 0) {
                iziToastShow();
            } else {
                foo(data, element)
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            hideLoaderFoo(loader);
        })
}

