const COMMENTS_PORTION = 5;

const bigPictureELement = document.querySelector('.big-picture');
// const commentCountElement = bigPictureELement.querySelector('.social__comment-count');
const commentShownCountElement = bigPictureELement.querySelector('.social__comment-shown-count');
const commentTotalCountElement = bigPictureELement.querySelector('.social__comment-total-count');
const commentListElement = bigPictureELement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureELement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureELement.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

let commentsShown = 0;
let comments = [];

const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = () => {
  commentsShown += COMMENTS_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShown; i++) {
    const comment = createComment(comments[i]);
    fragment.append(comment);
  }

  commentListElement.innerHTML = '';
  commentListElement.append(fragment);
  commentShownCountElement.textContent = commentsShown;
  commentTotalCountElement.textContent = comments.length;
};

const hideBigPicture = () => {
  bigPictureELement.classList.add('hidden');
  bodyElement.classList.remove('modale-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const onCommentLoaderClick = () => renderComments();

const renderPictureDetails = ({ url, likes, description }) => {
  bigPictureELement.querySelector('.big-picture__img img').src = url;
  bigPictureELement.querySelector('.big-picture__img img').alt = description;
  bigPictureELement.querySelector('.likes-count').textContent = likes;
  bigPictureELement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureELement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }
};

cancelButtonElement.addEventListener('click', onCancelButtonClick);
commentsLoaderElement.addEventListener('click', onCommentLoaderClick);

export { showBigPicture };
