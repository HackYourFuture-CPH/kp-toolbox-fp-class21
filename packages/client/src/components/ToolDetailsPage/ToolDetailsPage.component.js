import React from 'react';
import PropTypes from 'prop-types';
import './ToolDetailsPage.css';

export const ToolDetailsPage = ({ tool, ...props }) => {
  const timeFrame = tool.time_frame_max
    ? `${tool.time_frame_min}-${tool.time_frame_max} minutes`
    : `${tool.time_frame_min} minutes`;

  const groupSize = tool.group_size_max
    ? `${tool.group_size_min}-${tool.group_size_max}`
    : `${tool.group_size_min}`;

  const instructionsDescription =
    tool.instructions.description.length > 0 ? (
      <div className="instructions-description">
        {tool.instructions.description.map((descriptionParagraph) => {
          return <p key={descriptionParagraph}>{descriptionParagraph}</p>;
        })}
      </div>
    ) : (
      ''
    );

  return (
    <div className="tool-details-container">
      <p className="breadcrumbs">
        KAOSPILOT toolbox / <span>{tool.name}</span>
      </p>
      <h1>{tool.name}</h1>
      <img
        className="tool-image"
        src="/assets/images/tool-pic-stinky-fish.png"
        alt="stinky fish"
      />

      <ul className="tool-criteria-summary">
        <li>
          CATEGORY:
          {tool.categories.map((category, index) => (
            <span>
              {tool.categories.length - 1 === index
                ? category
                : `${category} // `}
            </span>
          ))}
        </li>
        <li>TIME FRAME: {timeFrame}</li>
        <li>NUMBER OF PARTICIPANTS: {groupSize}</li>
        <li>FACILITATION LEVEL: {tool.facilitation_level}</li>
        <li>MATERIALS: {tool.materials}</li>
        <li>SOURCE: {tool.source}</li>
      </ul>

      <div className="tool-description">
        <p>{tool.pitch}</p>
        <p>{tool.description}</p>
      </div>

      <div className="tool-instructions">
        <h2>Instructions:</h2>
        {instructionsDescription}
        {tool.instructions.steps.map((step) => (
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
  tool: PropTypes.object.isRequired,
};
