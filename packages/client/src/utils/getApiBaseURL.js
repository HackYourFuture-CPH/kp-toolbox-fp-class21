const getApiBaseUrl = () => {
  if (
    process.env.NODE_ENV === 'development' &&
    !process.env.REACT_APP_API_BASE_URL
  ) {
    throw new Error(
      'The environment variable REACT_APP_API_BASE_URL is not set',
    );
  }

  return process.env.REACT_APP_API_BASE_URL;
};

export default getApiBaseUrl;
