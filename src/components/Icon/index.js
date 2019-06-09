import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name, size, className }) => {
  switch (name) {
    case 'back': return (
      <svg className={className} width={size} height={size} viewBox="0 0 451.847 451.847">
        <path d="M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z"/>
      </svg>    
    )
    default: return null;
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Icon.defaultProps = {
  className: '',
  size: 30
}

export default Icon;