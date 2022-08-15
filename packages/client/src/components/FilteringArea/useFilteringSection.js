import { useState, useMemo } from 'react';

export function useFilteringSection() {
  const [options, setOptions] = useState([]);

  return useMemo(
    () => ({
      options,
      setOptions,
    }),
    [options],
  );
}
