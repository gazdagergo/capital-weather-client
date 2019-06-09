import React from 'react';
import cx from 'classnames';

const IconItem = ({ iconName, children }) => (
  <div className="icon-item">
    <i className={cx('wi', iconName)}></i>
    {iconName}{children}
  </div>
)

export default IconItem;
