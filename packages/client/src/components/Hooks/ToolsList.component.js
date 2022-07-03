import React, { useState, useEffect } from 'react';
import { getTools } from './api';

export default function ToolsList() {
  const [tools, setResult] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTools().then((response) => {
      setResult(response);
      setIsLoading(false);
    });
  }, []);

  const toolsToRender = isLoading
    ? 'not yet'
    : tools.map((tool) => {
        return <li key={tool.id}>{tool.name}</li>;
      });

  return (
    <div className="container">
      <p>tools: </p>
      <ul className="list">{toolsToRender}</ul>
    </div>
  );
}
