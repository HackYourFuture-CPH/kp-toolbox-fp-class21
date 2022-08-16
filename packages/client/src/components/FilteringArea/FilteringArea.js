import React from 'react';
import PropTypes from 'prop-types';
import './FilteringArea.css';

export const FilteringArea = ({ children }) => {
  return (
    <section className="filtering-area">
      <div className="filtering-title">
        <p>
          filter tools by CATEGORY, NUMBER OF PARTICIPANTS and TIME FRAME [min]
        </p>
      </div>
      {children}
    </section>
  );
};

FilteringArea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
