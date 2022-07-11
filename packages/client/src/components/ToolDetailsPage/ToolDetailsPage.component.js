import React from 'react';
import PropTypes from 'prop-types';
import './ToolDetailsPage.css';
import toolData from './stinky-fish.config.json';

export const ToolDetailsPage = ({ toolName, ...props }) => {
  return (
    <div className="tool-details-container">
      <p className="breadcrumbs">
        KAOSPILOT toolbox / <span>{toolName}</span>{' '}
      </p>
      <h1>{toolName}</h1>
      <img
        className="tool-image"
        src="/assets/images/tool-pic-stinky-fish.png"
        alt="stinky fish"
      />

      <ul className="tool-criteria-summary">
        <li>
          CATEGORY: <span>Team</span>
        </li>
        <li>TIME FRAME: 5-30 minutes</li>
        <li>NUMBER OF PARTICIPANTS: 2-40</li>
        <li>FACILITATION LEVEL: Medium</li>
        <li>MATERIALS: Printed A4 papers with a large outline of a fish</li>
        <li>SOURCE: Hyper Island</li>
      </ul>

      <div className="tool-description">
        <p>
          Share fears, anxieties and uncertainties related to the program theme
          to create openness within a group. Share fears, anxieties and
          uncertainties related to the program theme to create openness within a
          group.
        </p>
        <p>
          A short activity to run early in a program focused on sharing fears,
          anxieties and uncertainties related to the program theme. The purpose
          is to create openness within a group. The stinky fish is a metaphor
          for &#34;that thing that you carry around but don&#39;t like to talk
          about; but the longer you hide it, the stinkier it gets.&#34; By
          putting stinky fish (fears and anxieties) on the table, participants
          begin to relate to each other, become more comfortable sharing, and
          identify a clear area for development and learning.
        </p>
      </div>

      <div className="tool-instructions">
        <h2>Instructions:</h2>
        {toolData.description.length > 0 ? (
          <div className="instructions-description">
            {toolData.description.map((descriptionParagraph) => {
              return <p>{descriptionParagraph}</p>;
            })}
          </div>
        ) : (
          ''
        )}
        {toolData.steps.map((step) => (
          <div className="step-container" key={step.header}>
            <h3>{step.header}</h3>
            {step.text.map((textItem) => (
              <p key={textItem}>{textItem}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

ToolDetailsPage.propTypes = {
  toolName: PropTypes.string.isRequired,
};
