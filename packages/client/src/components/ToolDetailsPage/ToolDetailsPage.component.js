import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import getApiBaseUrl from '../../utils/getApiBaseURL';
import './ToolDetailsPage.css';
import { Loader } from '../Loader/Loader.component';
import { Page404 } from '../404/Page404.component';
import { KpImage } from '../KpImage/KpImage';

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
    pageContent = (
      <div className="LoadingMessage">
        <span>Loading...</span>
        <Loader />
      </div>
    );
  } else if (isDataEmpty) {
    pageContent = <Page404 />;
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
        <div className="tool-details-container">
          <p className="breadcrumbs">
            <Link to="/">
              KAOSPILOT toolbox / <span>{tool.name}</span>
            </Link>
          </p>
          <h1 className="tools-name-title">{tool.name}</h1>
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
            <p id="description-pitch">{tool.pitch}</p>
            <p id="description-text">{tool.description}</p>
            <p id="description-tape" />
            <img src={tool.banner} alt="" />
          </div>
          <div className="tool-instructions">
            <h2>Instructions:</h2>
            {tool.instructions.description.length > 0 ? (
              <div className="instructions-description">
                {tool.instructions.description.map((descriptionParagraph) => {
                  return (
                    <p key={descriptionParagraph}>{descriptionParagraph}</p>
                  );
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
        <Link to="/">
          <div className="back-home-button back-home-button--tool-page">
            {' '}
            BACK HOME{' '}
          </div>
        </Link>
        <KpImage />
      </>
    );
  }

  return <div>{pageContent}</div>;
};
