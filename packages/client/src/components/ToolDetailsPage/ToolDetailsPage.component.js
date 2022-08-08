import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import './ToolDetailsPage.css';

export const ToolDetailsPage = () => {
  const [tool, setTool] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDataEmpty, setIsDataEmpty] = useState(false);
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
          if (typeof data === 'object') {
            setIsDataEmpty(false);
            setTool(data[0]);
          } else {
            setIsDataEmpty(true);
          }
        })
        .then(() => {
          setIsLoading(false);
        });
    }
    setFetchTool();
  }, [params.id]);

  let pageContent;
  if (isLoading) {
    pageContent = <p className="message">Loading</p>;
  } else if (isDataEmpty) {
    pageContent = <p className="message">Tool not found</p>;
  } else {
    const toolCategoriesList = tool.categories
      ? tool.categories.map((category, index) => (
          <span key={category.name}>
            {tool.categories.length - 1 === index
              ? category.name
              : `${category.name} // `}
          </span>
        ))
      : 'unknown';

    const toolTimeFrame = tool.time_frame_max
      ? `${tool.time_frame_min}-${tool.time_frame_max} minutes`
      : `${tool.time_frame_min} minutes`;

    const toolGroupSize = tool.group_size_max
      ? `${tool.group_size_min}-${tool.group_size_max}`
      : `${tool.group_size_min}`;

    pageContent = (
      <>
        <p className="breadcrumbs">
          <Link to="/">
            {' '}
            KAOSPILOT toolbox / <span>{tool.name}</span>
          </Link>
        </p>
        <h1>{tool.name}</h1>
        <img
          className="tool-image"
          src={tool.picture}
          alt={`${tool.name} icon`}
        />

        <ul className="tool-criteria-summary">
          <li>CATEGORY: {toolCategoriesList}</li>
          <li>
            TIME FRAME: <span>{toolTimeFrame}</span>
          </li>
          <li>
            NUMBER OF PARTICIPANTS: <span>{toolGroupSize}</span>
          </li>
          <li>
            FACILITATION LEVEL: <span> {tool.facilitation_level}</span>
          </li>
          <li>
            MATERIALS: <span>{tool.materials}</span>
          </li>
          <li>
            SOURCE: <span>{tool.source}</span>
          </li>
        </ul>

        <div className="tool-description">
          <p>{tool.pitch}</p>
          <p>{tool.description}</p>
          <p />
          <img
            src="/assets/images/Kaospilot_admissionworkshop9_2016_BW 1.png"
            alt='Kaospilot Admission workshop 2016'
            width="1003.65px"
            height="300px"
          />
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
      </>
    );
  }

  return <div className="tool-details-container">{pageContent}</div>;
};
