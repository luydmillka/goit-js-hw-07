import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsContainer = document.querySelector('.gallery');
const galleryItemsMarkup = galleryMarkup(galleryItems);

galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryItemsContainer.addEventListener("click", onGalleryItemsContainerClick);

function onGalleryItemsContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

}

function galleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join('');
}

 let galleryLightBox = new SimpleLightbox('.gallery__item', {
        capture: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
});