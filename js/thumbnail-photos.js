const picturesElement = document.querySelector('.pictures');
const pictureTemplateElement = document.querySelector('#picture').content;
const pictureElement = pictureTemplateElement.querySelector('.picture');

const renderThumbnailPhoto = (dataPhoto) => {
  const fragment = document.createDocumentFragment();

  dataPhoto.forEach(({ url, description, likes, comments, id }) => {
    const pictureCopy = pictureElement.cloneNode(true);
    const image = pictureCopy.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    pictureCopy.querySelector('.picture__comments').textContent = comments.length;
    pictureCopy.querySelector('.picture__likes').textContent = likes;
    pictureCopy.dataset.id = id;
    fragment.append(pictureCopy);
  });

  picturesElement.append(fragment);
  return dataPhoto;
};

export { renderThumbnailPhoto };

