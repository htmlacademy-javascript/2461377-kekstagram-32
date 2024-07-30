import { getArrayPhoto } from './array-photo.js';
import { generateThumbnails } from './picture.js';
import './big-picture.js';

generateThumbnails(getArrayPhoto());
// eslint-disable-next-line no-console
// console.log(getArrayPhoto());
