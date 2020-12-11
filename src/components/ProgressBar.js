import PropTypes from 'prop-types';

export default function ProgressBar({ progress }) {
  const SIZE = 2.7;
  return (
    <div className="progress-bar">
      <div className="gray-bar" />
      <div className="color-bar" style={ { width: `${progress * SIZE}px` } } />
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
};
