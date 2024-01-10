import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

let searchParams = new URLSearchParams({
    key: "41672793-a8580f18ed6f224a15f8d2674",
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});

let url = `https://pixabay.com/api/?${searchParams}`;

const galleryLightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    nav: true,
    close: true,
    enableKeyboard: true,
    docClose: true,
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(({hits, totalHits}) => {
        if (hits.length === 0) {
            iziToast.error({
                title: "Error",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
                messageColor: "#ffffff",
                titleColor: "#ffffff",
                iconColor: "#ffffff",
                backgroundColor: "#B51B1B",
            });
        } else {
            const render = () => {
            const renderImages = hits.reduce((html, hit) => html + `
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
            `, "")
            gallery.innerHTML = renderImages;
            }
            render();
            galleryLightbox.refresh();
        };
            })
    .catch((error) => console.log(error))
    
    form.reset();
})



