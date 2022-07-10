import React from 'react';
import PropTypes from 'prop-types';
import './ToolDetailsPage.css';
import toolData from './troika-consulting.config.json';

export const ToolDetailsPage = ({ text1, ...props }) => {
  return (
    <div className="tool-delails-background">
      {text1}
      <div className="tool-details">
        <div className="tool-image">
          <p>KAOSPILOT toolbox / STINKY FISH</p>
          <h1>STINKY FISH</h1>
          <img src="/assets/images/tool-pic-stinky-fish.png" />
        </div>
        <div className="tool-criteria-summary">
          <ul>
            <li>CATEGORY:</li>
            <li>TIME FRAME:</li>
            <li>NUMBER OF PARTICIPANTS:</li>
            <li>FACILITATION LEVEL:</li>
            <li>MATERIALS:</li>
            <li>SOURCE:</li>
          </ul>
        </div>
        <div className="tool-pitch">
          <p>
            Share fears, anxieties and uncertainties related to the program
            theme to create openness within a group. Share fears, anxieties and
            uncertainties related to the program theme to create openness within
            a group.
          </p>
        </div>
        <div className="tool-description">
          {toolData.description.map((descriptionParagraph) => {
            return <p>{descriptionParagraph}</p>;
          })}
          <div>
            <img className="tool-picture-placeholder" />
          </div>
          <div className="tool-instruction">
            <h3>Instructions:</h3>
            {toolData.steps.map((step) => (
              <div>
                <p>{step.header}</p>
                {step.text.map((textItem) => (
                  <p>{textItem}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ToolDetailsPage.propTypes = {
  text1: PropTypes.string.isRequired,
};
