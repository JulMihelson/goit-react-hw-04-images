import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ handleOnClick, largeImageURL }) => {
  const currentClick = event => {
    if (event.target === event.currentTarget) {
      handleOnClick();
    }
  };

  useEffect(() => {
    document.addEventListener('keypress', event => {
      if (event.code === 'Backquote') {
        handleOnClick();
      }
    });
  });

  return (
    <div onClick={currentClick} className="Overlay">
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
