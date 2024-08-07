import { isEscapeKey } from './util.js';
import { resetForm } from './form-validate.js';

const picturesListElement = document.querySelector('.pictures');

const imgFormElement = picturesListElement.querySelector('.img-upload__form');
const imgOverlayElement = imgFormElement.querySelector('.img-upload__overlay');
const imgInputElement = imgFormElement.querySelector('.img-upload__input');
const imgCancelButtonElement = imgFormElement.querySelector('.img-upload__cancel');
const textCommentsElement = imgFormElement.querySelector('.text__description');
const textHashtagsElement = imgFormElement.querySelector('.text__hashtags');

const isFieldFocused = () => document.activeElement === textCommentsElement || document.activeElement === textHashtagsElement;

// Обработчики для открытия/закрытия формы
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isFieldFocused()) {
    evt.preventDefault();
    onUploadOverlayClose();
  }
};

const onUploadOverlayChange = () => {
  imgOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

function onUploadOverlayClose() {
  resetForm();
  imgOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

imgInputElement.addEventListener('change', onUploadOverlayChange);

imgCancelButtonElement.addEventListener('click', onUploadOverlayClose);

export { onUploadOverlayClose };
