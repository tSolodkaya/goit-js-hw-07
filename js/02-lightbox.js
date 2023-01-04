import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryContainer = document.querySelector(".gallery");
const renderGaleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
  })
  .join("");

galeryContainer.innerHTML = renderGaleryItems;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  showCounter: false,
});
