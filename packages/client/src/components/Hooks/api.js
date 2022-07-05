import getApiBaseUrl from "../../utils/getApiBaseURL";

export function getTools() {
  const promise = fetch(`${getApiBaseUrl()}/api/tools`).then((response) => response.json());

  return promise;
}

export function getToolById(toolId) {
  const promise = fetch(`${getApiBaseUrl()}/api/tools/${toolId}`).then((response) =>
    response.json(),
  );

  return promise;
}