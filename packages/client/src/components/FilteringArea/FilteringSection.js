/* eslint-disable */
import React, { useContext } from 'react';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import PropTypes from 'prop-types';
import { ToolsContext } from '../../containers/LandingPage/Context';

export const FilteringSection = ({
  title,
  data,
  iconName,
  checkboxName,
  selectedValue,
  setSelectedValue,
  fetchKey,
}) => {
  const { onCheckboxClick, onShowAllButtonClick } = useContext(ToolsContext);
  const iconLink = `/assets/vectors/${iconName}.svg`;

  // function getTools() {
  //   const promise = fetch(`${getApiBaseUrl()}/api/tools`).then((response) =>
  //     response.json(),
  //   );

  //   return promise;
  // }

  const handleShowAll = (e) => {
    onShowAllButtonClick();
    const all = document.getElementsByName(checkboxName);
    console.log('all', all);
    for (let i = 0; i < all.length; i += 1) {
      if (all[i].type === 'checkbox') all[i].checked = false;
    }
    e.target.style.borderColor = '#8c5c02';
    setSelectedValue([]);
  };

  // function getToolsByCategory(id) {
  //   const promise = fetch(
  //     `${getApiBaseUrl()}/api/tools?${fetchKey}[]=${id}`,
  //   ).then((response) => response.json());

  //   return promise;
  // }

  const handleCheck = (e) => {
    // getToolsByCategory(e.target.value, fetchKey)
    // .then((response) => {
    //   console.log('getToolsByCategory', response);
    // });
    onCheckboxClick(e, fetchKey);
    const showAllButton = document.getElementById(`showAll-${checkboxName}`);
    console.log('showAllButton', showAllButton);
    console.log('fetchKey', fetchKey);

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
