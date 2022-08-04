import { useState, useMemo } from 'react';

export function useFilteringSection() {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return useMemo(
    () => ({
      options,
      setOptions,
      selectedOptions,
      setSelectedOptions,
    }),
    [options, selectedOptions],
  );
}
