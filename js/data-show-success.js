import { isEscapeKey } from './util.js';

const dataSuccessTemplate = document.querySelector('#success').content;
const sectionSuccessElement = dataSuccessTemplate.querySelector('.success');
const innerSuccessElement = dataSuccessTemplate.querySelector('.success__inner');
const buttonSuccessElement = sectionSuccessElement.querySelector('.success__button');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onSuccessCloseClick();
  }
};

const onDocumentClick = (evt) => {
  if (!innerSuccessElement.contains(evt.target)) {
    onSuccessCloseClick();
  }
};

const showTextSuccess = () => {
  document.body.append(sectionSuccessElement);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick);
};

function onSuccessCloseClick() {
  sectionSuccessElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
}

buttonSuccessElement.addEventListener('click', onSuccessCloseClick);

export { showTextSuccess };
