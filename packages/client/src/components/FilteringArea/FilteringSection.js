/* eslint-disable */
import React from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import PropTypes from 'prop-types';

export const FilteringSection = ({
  title,
  data,
  iconName,
  checkboxName,
  selectedValue,
  setSelectedValue,
  fetchKey,
}) => {
  const iconLink = `/assets/vectors/${iconName}.svg`;

  // function getTools() {
  //   const promise = fetch(`${getApiBaseUrl()}/api/tools`).then((response) =>
  //     response.json(),
  //   );

  //   return promise;
  // }

  // function getToolsByCategory(id) {
  //   const promise = fetch(
  //     `${getApiBaseUrl()}/api/tools?${fetchKey}[]=${id}`,
  //   ).then((response) => response.json());

  //   return promise;
  // }

  const handleShowAll = (e) => {
    const all = document.getElementsByName(checkboxName);
    console.log(all);
    for (let i = 0; i < all.length; i += 1) {
      if (all[i].type === 'checkbox') all[i].checked = false;
    }
    e.target.style.borderColor = '#8c5c02';
    setSelectedValue([]);
  };

  const handleCheck = (e) => {
    console.log(e.target.value);
    getToolsByCategory(e.target.value).then((response) => {
      console.log('getToolsByCategory', response);
    });
    const showAllButton = document.getElementById(`showAll-${checkboxName}`);
    showAllButton.style.borderColor = 'rgba(0, 0, 0, 0.2)';
    if (e.target.checked) {
      setSelectedValue(selectedValue.filter((item) => item !== e.target.value));
    } else {
      setSelectedValue((prevValue) => prevValue.concat(e.target.value));
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
        {data.map((record) => {
          console.log('record', record);
          console.log('data', data);
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: 0,
      title: '',
    }),
  ),
  iconName: '',
  checkboxName: '',
  selectedValue: [],
  setSelectedValue: () => {},
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
  checkboxName: PropTypes.string,
  selectedValue: PropTypes.arrayOf(PropTypes.string),
  setSelectedValue: PropTypes.func,
};
