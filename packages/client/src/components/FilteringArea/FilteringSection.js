import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const FilteringSection = ({
  title,
  options,
  iconName,
  checkboxName,
  selectedOptions,
  setSelectedOptions,
  fetchKey,
  addQueryParam,
  removeQueryParam,
  getAllTools,
}) => {
  const [isShowAllSelected, setIsShowAllSelected] = useState(true);

  const iconLink = `/assets/vectors/${iconName}.svg`;

  const handleShowAll = (e) => {
    getAllTools();
    setIsShowAllSelected(true);
    setSelectedOptions([]);
  };

  const handleCheck = (e) => {
    if (selectedOptions.includes(e.target.id)) {
      setSelectedOptions(
        selectedOptions.filter((item) => item !== e.target.id),
      );
      removeQueryParam(e.target.value, fetchKey);
    } else {
      setSelectedOptions((prevValue) => prevValue.concat(e.target.id));
      addQueryParam(e.target.value, fetchKey);
      setIsShowAllSelected(false);
    }
  };

  return (
    <div className="filtering-category">
      <div className="filtering-category-mobile-view">
        <div className="filtering-horizontal-flex">
          <img src={iconLink} alt="category" />
          <button
            type="button"
            className={
              isShowAllSelected || !selectedOptions.length
                ? 'show-all-button checked'
                : 'show-all-button'
            }
            id={`showAll-${checkboxName}`}
            onClick={handleShowAll}
          >
            Show all
          </button>
        </div>
      </div>
      <div className={`filtering-checkbox-mobile-view-for-${checkboxName}`}>
        {/* if the data from DB will be use instead of the data from config file, you can pass needed keys as props not to create a separate file for each filtering section  */}
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option.title);
          return (
            <div className="filtering-checkbox-element" key={title + option.id}>
              <input
                type="checkbox"
                className="filtering-checkbox"
                value={option.id}
                id={option.title}
                name={checkboxName}
                onChange={(e) => handleCheck(e)}
              />
              <label
                className={
                  isSelected ? 'filtering-option checked' : 'filtering-option'
                }
                htmlFor={option.title}
              >
                {option.title}
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: 0,
      title: '',
    }),
  ),
  iconName: '',
  checkboxName: '',
  selectedOptions: [],
  setSelectedOptions: () => {},
  fetchKey: '',
  addQueryParam: () => {},
  removeQueryParam: () => {},
  getAllTools: () => {},
};

FilteringSection.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
  iconName: PropTypes.string,
  checkboxName: PropTypes.string,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  setSelectedOptions: PropTypes.func,
  fetchKey: PropTypes.string,
  addQueryParam: PropTypes.func,
  removeQueryParam: PropTypes.func,
  getAllTools: PropTypes.func,
};
