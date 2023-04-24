import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const items = []
for (let i = 0; i < galleryItems.length; i++) {
  const item = document.createElement('li')
  item.classList.add('gallery__item')
  item.insertAdjacentHTML("beforeend", `<img data-id="${i}" class = "gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" data-src="${galleryItems[i].original}" width = 372px height = 240px >` );
  items.push(item)
};
gallery.append(...items)

gallery.addEventListener('click', function(e) {
  
  if (e.target.tagName === 'IMG') {
    const imgUrl = e.target.getAttribute('data-src');
    console.log(imgUrl)
    const instance = basicLightbox.create(`<img src="${imgUrl}" width="100%">`,
    {
      onShow: (instance) => {
        document.addEventListener('keydown', e => {
          if (e.keyCode !== 27) { return; }
          
          instance.close(); 
        });
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', e => {
          if (e.keyCode !== 27) { return; }
          instance.close(); 
        });
      }
    });
    instance.show()
  }
});	

