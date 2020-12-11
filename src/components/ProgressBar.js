import PropTypes from 'prop-types';

export default function ProgressBar({ progress }) {
  const THREE = 3;
  return (
    <div className="progress-bar">
      <div className="gray-bar" />
      <div className="color-bar" style={ { width: `${progress * THREE}px` } } />
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
};
