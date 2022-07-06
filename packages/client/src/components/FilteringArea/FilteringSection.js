import React from 'react';
import PropTypes from 'prop-types';

export const FilteringSection = ({ title, data, iconName }) => {
  const iconLink = `/assets/vectors/${iconName}.svg`;
  return (
    <div className="filtering-category">
      <div className="filtering-category-mobile-view">
        <h4 className="filtering-category-title">{title}</h4>
        <div className="filtering-horizontal-flex">
          <img src={iconLink} alt="category" />
          <button type="button" className="show-all-button">
            Show all
          </button>
        </div>
      </div>
      <div className="filtering-checkbox-mobile-view">
        {data.map((record) => {
          return (
            <div className="filtering-checkbox-element">
              <input
                type="checkbox"
                className="filtering-checkbox"
                value={record.id}
                id={record.title}
              />
              <label className="filtering-option" htmlFor={record.title}>
                {record.title}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

FilteringSection.defaultProps = {
  title: '',
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: 0,
      title: '',
    }),
  ),
  iconName: '',
};

FilteringSection.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
  iconName: PropTypes.string,
};
