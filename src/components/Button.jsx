import PropTypes from 'prop-types';
export const Button = ({ onNextPage }) => {
  return (
    <button onClick={onNextPage} type="button">
      Load more
    </button>
  );
};

Button.propTypes = {
  onNextPage: PropTypes.func.isRequired,
};
