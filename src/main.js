import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let searchParams = {
    key: "41672793-a8580f18ed6f224a15f8d2674",
    q: "cat",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
};

const galleryLightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    nav: true,
    close: true,
    enableKeyboard: true,
    docClose: true,
});

function searchImages(params) {
   return fetch(`https://pixabay.com/api/?${params}`) 
    .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
   .then(({ hits, totalHits }) => {
            if (hits.length > 0) {
                const renderImages = hits.reduce((html, hit) => {
                    return (
                        html + `
           <li class="gallery-item">
           <a class="gallery-link" href="${hit.largeImageURL}">
           <img
           class="gallery-image"
           src="${hit.webformatURL}"
           alt="${hit.tags}"
           />
           </a>
           <div class="gallery-info">
           <p>likes: ${hit.likes}</p> 
           <p>views: ${hit.views}</p>
           <p>comments: ${hit.comments}</p>
           <p>downloads: ${hit.downloads}</p>
           </div>
           </li>
            `
            );
            }, "")
            gallery.innerHTML = renderImages;
            galleryLightbox.refresh();
       
    } else {
    iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
        messageColor: "#ffffff",
        titleColor: "#ffffff",
        iconColor: "#ffffff",
        backgroundColor: "#B51B1B",
    });
}
        })        
        .catch((error) => console.log(error))
        .finally(() => {
            loader.style.display = 'none'
        });
    }

form.addEventListener("submit", (event) => {
    event.preventDefault();
    gallery.innerHTML = '';
    loader.style.display = 'block';
    const url = new URLSearchParams(searchParams);
    searchParams.q = event.target.elements.search.value.trim();
    searchImages(url);
    event.currentTarget.reset();

})