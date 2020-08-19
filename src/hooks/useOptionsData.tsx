import { useState, useEffect } from 'react';

interface OptionsDataParams {
  optionsData?: any[];
  getOptionsData?(param?: any): Promise<any[]>;
}

export const useOptionsData = ({
  optionsData,
  getOptionsData,
}: OptionsDataParams) => {
  const [options, setOptions] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      if (typeof getOptionsData === 'function') {
        const data = await getOptionsData();
        setOptions(data);
      }
    }
    if (!optionsData) {
      getData();
    } else {
      setOptions(optionsData);
    }
  }, [optionsData, getOptionsData]);

  return options;
};
