import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const List = ({ items }) => (
  <ul className="list">
    {items.map(({ id, label, href }) => (
      <li key={id}><Link to={href}>{label}</Link></li>
    ))}
  </ul>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    href: PropTypes.string,
  })),
}

List.defaultProps = {
  items: []
}

export default List;
