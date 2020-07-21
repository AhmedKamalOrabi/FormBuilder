import React, { useState, useEffect } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

interface ToggleButtonsProps {
  value: any;
  name: string;
  onChange(
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null,
    name: string
  ): void;
  options?: any[];
  getOptionsData?(param?: any): Promise<any[]>;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  orientation?: 'vertical' | 'horizontal';
  valueProperty?: string;
  textProperty?: string;
  keyProperty?: string;
  exclusive?: boolean;
  defaultValue?: any;
}

export const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  value,
  name,
  onChange,
  valueProperty = 'value',
  textProperty = 'label',
  keyProperty = 'value',
  options: buttonsOptions,
  getOptionsData,
  ...rest
}) => {
  const [options, setOptions] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      if (typeof getOptionsData === 'function') {
        const data = await getOptionsData();
        setOptions(data);
      }
    }
    if (!buttonsOptions) {
      getData();
    } else {
      setOptions(buttonsOptions);
    }
  }, [buttonsOptions, getOptionsData]);

  return (
    <ToggleButtonGroup
      value={value}
      onChange={(event: any, newValue: any) => onChange(event, newValue, name)}
      {...rest}
    >
      {options &&
        options.map((option) => (
          <ToggleButton
            key={option[keyProperty] || option[valueProperty]}
            value={option[valueProperty]}
            aria-label={option[textProperty]}
            disabled={option.disabled}
          >
            {option[textProperty]}
          </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
};
