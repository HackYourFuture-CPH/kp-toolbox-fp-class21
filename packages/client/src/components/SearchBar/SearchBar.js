import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

export default function SearchBar({ filterByToolNameAction }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search bar..."
        className="searchInputDiv"
        onChange={(e) => filterByToolNameAction(e.target.value)}
      />
    </div>
  );
}
SearchBar.propTypes = {
  filterByToolNameAction: PropTypes.func,
};

SearchBar.defaultProps = {
  filterByToolNameAction: null,
};
