import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const List = ({ items }) => (
  <ul className="list">
    {items.map(({ label, href }) => (
      <li><Link to={href}>{label}</Link></li>
    ))}
  </ul>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  })),
}

List.defaultProps = {
  items: []
}

export default List;
