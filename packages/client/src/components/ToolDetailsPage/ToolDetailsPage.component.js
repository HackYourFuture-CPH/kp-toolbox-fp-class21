import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import './ToolDetailsPage.css';

export const ToolDetailsPage = () => {
  const [tool, setTool] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function fetchTool(id) {
      const response = await fetch(`${getApiBaseUrl()}/api/tools/${id}`);
      const result = await response.json();
      return result;
    }
    function setFetchTool() {
      setIsLoading(true);
      fetchTool(params.id)
        .then((data) => {
          const toolWithCategries = data[0];
          toolWithCategries.categories = data.categories;
          setTool(toolWithCategries);
        })
        .then(() => {
          setIsLoading(false);
        });
    }
    setFetchTool();
  }, [params.id]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="tool-details-container">
      <p className="breadcrumbs">
        KAOSPILOT toolbox / <span>{tool.name}</span>
      </p>
      <h1>{tool.name}</h1>
      <img
        className="tool-image"
        src={tool.picture}
        alt={`${tool.name} icon`}
      />

      <ul className="tool-criteria-summary">
        <li>
          CATEGORY:
          {tool.categories
            ? tool.categories.map((category, index) => (
                <span key={category.name}>
                  {tool.categories.length - 1 === index
                    ? category.name
                    : `${category.name} // `}
                </span>
              ))
            : ''}
        </li>
        <li>
          TIME FRAME:
          {tool.time_frame_max
            ? `${tool.time_frame_min}-${tool.time_frame_max} minutes`
            : `${tool.time_frame_min} minutes`}
        </li>
        <li>
          NUMBER OF PARTICIPANTS:
          {tool.group_size_max
            ? `${tool.group_size_min}-${tool.group_size_max}`
            : `${tool.group_size_min}`}
        </li>
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
        {tool.instructions.description.length > 0 ? (
          <div className="instructions-description">
            {tool.instructions.description.map((descriptionParagraph) => {
              return <p key={descriptionParagraph}>{descriptionParagraph}</p>;
            })}
          </div>
        ) : (
          ''
        )}
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
