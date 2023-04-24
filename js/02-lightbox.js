import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const items = []
for (const image of galleryItems) {
  const item = document.createElement('li')
  item.classList.add('gallery__item')
  item.insertAdjacentHTML("beforeend", `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
</a>` );
  items.push(item)
};
gallery.append(...items)
let lightbox = new SimpleLightbox('.gallery a', 
{
  captionDelay: 250,
  captionsData: "alt"
});
