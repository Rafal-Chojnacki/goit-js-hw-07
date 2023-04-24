import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const items = []
for (let i = 0; i < galleryItems.length; i++) {
  const item = document.createElement('li')
  item.classList.add('gallery__item')
  item.insertAdjacentHTML("beforeend", `<a class="gallery__item" href="${galleryItems[i].original}">
  <img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" />
</a>` );
  items.push(item)
};
gallery.append(...items)
let lightbox = new SimpleLightbox('.gallery a', { /* options */ });
