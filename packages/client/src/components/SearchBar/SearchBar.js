import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

export default function SearchBar({ filterByToolNameAction }) {
  return (
    <div className="searchBarDiv">
      {/* <i src="/assets/vectors/vector-search.svg"></i> */}
      <img src="/assets/vectors/vector-search.svg" alt="search icon" />
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
