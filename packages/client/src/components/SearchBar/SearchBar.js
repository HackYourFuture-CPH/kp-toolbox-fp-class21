import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

export default function SearchBar({
  filterByToolNameAction,
  searchResultNull,
}) {
  return (
    <div className="searchBarDiv">
      <input
        type="text"
        placeholder="search tools..."
        className="searchInputDiv"
        onChange={(e) => filterByToolNameAction(e.target.value)}
      />
      <img src="/assets/vectors/vector-search.svg" alt="search icon" />
      {searchResultNull ? (
        <p className="search-result-null">
          The tool has not been found. Make sure the spelling is correct or try
          different keywords.
        </p>
      ) : null}
    </div>
  );
}
SearchBar.propTypes = {
  filterByToolNameAction: PropTypes.func,
  searchResultNull: PropTypes.bool.isRequired,
};

SearchBar.defaultProps = {
  filterByToolNameAction: null,
};
