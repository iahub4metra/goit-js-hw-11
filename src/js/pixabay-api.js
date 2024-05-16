export const getRequestApi = (userKeyWords) => {
    return fetch(`https://pixabay.com/api/?key=43749964-78fe686efe4660c3d41d86a93&q=${userKeyWords}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        })
        .then(images => {
            const data = images.hits;
            return data
           
        })
        .catch(error => console.log(error))
}