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


    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
    `);
    instance.show();

    window.addEventListener('keydown', onEscCloseModal);
    function onEscCloseModal(evt) {
        if (evt.code === 'Escape') {
            instance.close()
        }
    }
}

function galleryMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`
    }).join('');
}

// console.log(galleryItemsMarkup)