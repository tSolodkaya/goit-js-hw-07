import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryContainer = document.querySelector(".gallery");
const renderGaleryItems = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galeryContainer.innerHTML = renderGaleryItems;
galeryContainer.addEventListener("click", onClick);
let instance = {};

function onClick(event) {
  event.preventDefault();

  if (event.target.tagName != "IMG") {
    return;
  }

  const urlOriginal = event.target.dataset.source;

  instance = basicLightbox.create(
    `<img src="${urlOriginal}" width="800" height="600">`
  );

  instance.show();

  window.addEventListener("keydown", onKeyEscPress);
}

function onCloseModal(event) {
  window.removeEventListener("keydown", onKeyEscPress);
  instance.close();
}
function onKeyEscPress(event) {
  console.log(event);
  if (event.code === "Escape") {
    onCloseModal(event, instance);
  }
}
