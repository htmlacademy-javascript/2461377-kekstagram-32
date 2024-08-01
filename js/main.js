import { getArrayPhoto } from './array-photo.js';
// import { generateThumbnails } from './picture.js';
import { renderGallery } from './gallery.js';
// import { onBigPicture } from './big-picture.js';

renderGallery(getArrayPhoto());
// generateThumbnails(getArrayPhoto());
// onBigPicture();
// eslint-disable-next-line no-console
console.log(getArrayPhoto());
