import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

export default function SearchBar({ filterByToolNameAction }) {
  return (
    <div className="searchBarDiv">
      <input
        type="text"
        placeholder="search tools..."
        className="searchInputDiv"
        onChange={(e) => filterByToolNameAction(e.target.value)}
      />
      <img src="/assets/vectors/vector-search.svg" alt="search icon" />
    </div>
  );
}
SearchBar.propTypes = {
  filterByToolNameAction: PropTypes.func,
};

SearchBar.defaultProps = {
  filterByToolNameAction: null,
};
