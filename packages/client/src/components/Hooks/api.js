export function getTools() {
  const promise = fetch('/api/tools').then((response) => response.json());

  return promise;
}

export function getToolById(toolId) {
  const promise = fetch(`/api/tools/${toolId}`).then((response) =>
    response.json(),
  );

  return promise;
}
