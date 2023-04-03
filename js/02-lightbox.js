import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageGallery = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

function createImageCardsMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}

imageGallery.insertAdjacentHTML('beforeend', cardsMarkup);

imageGallery.addEventListener('click', onCurrentImageClick);

function onCurrentImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const currentImageAlt = evt.target.getAttribute('alt');
  const caption = `${currentImageAlt}`;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: caption,
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
  });
}

console.log(galleryItems);

// TODO: Модалка відкривається лише з другого кліку по картці
