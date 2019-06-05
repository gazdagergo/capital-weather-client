import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const List = ({ items }) => (
  <ul className="list">
    {items.map(({ label }) => (
      <li>{label}</li>
    ))}
  </ul>
)

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string
  })),
}

List.defaultProps = {
  items: []
}

export default List;
