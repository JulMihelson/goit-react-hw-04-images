// import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
// import axios from 'axios';

export const ImageGallery = ({ photos }) => {
  return (
    <>
      <ul>
        {photos.map(item => (
          <ImageGalleryItem
            key={item.id}
            id={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
