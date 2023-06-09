import React, { Component } from 'react';
import css from './ImageGalleryItem.modal.css';
import { Modal } from 'components/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    modalIsOpen: false,
  };
  handleOnClick = () => {
    this.setState(prev => ({ modalIsOpen: !prev.modalIsOpen }));
  };
  render() {
    return (
      <>
        <li className={css.galleryItem}>
          <img
            onClick={this.handleOnClick}
            src={this.props.webformatURL}
            alt={this.props.id}
          />
        </li>
        {this.state.modalIsOpen && (
          <Modal
            handleOnClick={this.handleOnClick}
            largeImageURL={this.props.largeImageURL}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
