const bigPicture = document.querySelector('.big-picture');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const openBigPicture = document.querySelectorAll('.picture');

function onBigPicture() {
  bigPicture.classList.remove('hidden');
}

openBigPicture.forEach((thumbnail) => {
  thumbnail.addEventListener('click', onBigPicture);
});

closeBigPicture.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});
