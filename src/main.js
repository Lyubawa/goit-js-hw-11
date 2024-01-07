import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(`.form`);
const gallery = document.querySelector(`.gallery`);

const searchParams = new URLSearchParams({
    key: `41672793-a8580f18ed6f224a15f8d2674`,
    q: ``,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
});

const url = `https://pixabay.com/api/?${searchParams}`;




form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    fetch("https://pixabay.com/api/?key=41672793-a8580f18ed6f224a15f8d2674&q=cat&image_type=photo&orientation=horizontal&safesearch=true")
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then((images) => {
        if (images.length === 0) {
            iziToast.error({
                title: 'Error',
                message: `Sorry, there are no images matching your search query. Please try again!`,
                position: 'topRight',
                messageColor: '#ffffff',
                titleColor: '#ffffff',
                iconColor: '#ffffff',
                backgroundColor: '#B51B1B',
            });
        } else {
            console.log(images);
        }
            })
    .catch((error) => console.log(error))
    
    const query = event.target.elements.query.value;

    form.reset();
})

