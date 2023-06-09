import React, { useState } from 'react';
import css from './ImageGalleryItem.modal.css';
import { Modal } from 'components/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ largeImageURL, webformatURL, id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOnClick = () => {
    setModalIsOpen(modalIsOpen => !modalIsOpen);
  };

  return (
    <>
      <li className={css.galleryItem}>
        <img onClick={handleOnClick} src={webformatURL} alt={id} />
      </li>
      {modalIsOpen && (
        <Modal handleOnClick={handleOnClick} largeImageURL={largeImageURL} />
      )}
    </>
  );
};

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
