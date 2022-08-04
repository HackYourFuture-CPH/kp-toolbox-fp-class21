import React from 'react';
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
  const iconLink = `/assets/vectors/${iconName}.svg`;

  const handleShowAll = (e) => {
    getAllTools();
    const all = document.getElementsByName(checkboxName);
    for (let i = 0; i < all.length; i += 1) {
      if (all[i].type === 'checkbox') all[i].checked = false;
    }
    e.target.style.borderColor = '#8c5c02';
    setSelectedOptions([]);
  };

  const handleCheck = (e) => {
    const showAllButton = document.getElementById(`showAll-${checkboxName}`);
    showAllButton.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    if (e.target.checked) {
      setSelectedOptions(
        selectedOptions.filter((item) => item !== e.target.value),
      );
      e.target.style.borderColor = '#8c5c02';
      addQueryParam(e, fetchKey);
    } else {
      setSelectedOptions((prevValue) => prevValue.concat(e.target.value));
      removeQueryParam(e, fetchKey);
    }
  };

  return (
    <div className="filtering-category">
      <div className="filtering-category-mobile-view">
        <h4 className="filtering-category-title">{title}</h4>
        <div className="filtering-horizontal-flex">
          <img src={iconLink} alt="category" />
          <button
            type="button"
            className="show-all-button"
            id={`showAll-${checkboxName}`}
            onClick={handleShowAll}
          >
            Show all
          </button>
        </div>
      </div>
      <div className={`filtering-checkbox-mobile-view-for-${checkboxName}`}>
        {/* if the data from DB will be use instead of the data from config file, you can pass needed keys as props not to create a separate file for each filtering section  */}
        {options.map((record) => {
          return (
            <div className="filtering-checkbox-element" key={title + record.id}>
              <input
                type="checkbox"
                className="filtering-checkbox"
                value={record.id}
                id={record.title}
                name={checkboxName}
                onChange={(e) => handleCheck(e)}
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
