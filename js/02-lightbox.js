import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryContainer = document.querySelector(".gallery");
const renderGaleryItems = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
  })
  .join("");

galeryContainer.innerHTML = renderGaleryItems;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
