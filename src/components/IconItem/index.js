import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './styles.scss';

const IconItem = ({ iconName, children, className }) => (
  <div className={cx('icon-item', className)}>
    <i className={cx('wi', iconName)}></i>
    <span>{children}</span>
  </div>
)

IconItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,  
};

IconItem.defaultProps = {
  children: null,
  className: ''
}

export default IconItem;
