// import { getArrayPhoto } from './array-photo.js';
// import { generateThumbnails } from './picture.js';
// import { onBigPicture } from './big-picture.js';
// import './form.js';
// import { resetScale } from './scale.js';
// import { init, reset} from './effect.js';
import { renderGallery } from './gallery.js';
import { getData, sentData } from './api.js';
import { showAlert, debounce } from './util.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { init as initFilter, getFilteredPictures } from './filter.js';

setOnFormSubmit(async (data) => {
  try {
    await sentData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  initFilter(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch {
  showAlert();
}

// generateThumbnails(getArrayPhoto());
// onBigPicture();
// eslint-disable-next-line no-console
// console.log(getArrayPhoto());
