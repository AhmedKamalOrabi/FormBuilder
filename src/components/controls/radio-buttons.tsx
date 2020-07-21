import React, { useState, useEffect } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import { Size, Color, Placement } from '../../types';

interface RadioButtonsProps {
  value: any;
  name: string;
  label?: string;
  size?: Size;
  onChange(param?: React.ChangeEvent<HTMLInputElement>): void;
  options?: any[];
  getOptionsData?(param?: any): Promise<any[]>;
  disabled?: boolean;
  valueProperty?: string;
  textProperty?: string;
  keyProperty?: string;
  defaultValue?: any;
  row?: boolean;
  color?: Color;
  labelPlacement?: Placement;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  label,
  color,
  size = 'medium',
  valueProperty = 'value',
  textProperty = 'label',
  keyProperty = 'value',
  labelPlacement,
  disabled = false,
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
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup {...rest}>
        {options &&
          options.map((option) => (
            <FormControlLabel
              labelPlacement={labelPlacement}
              key={option[keyProperty]}
              value={option[valueProperty]}
              control={<Radio color={color} size={size} />}
              label={option[textProperty]}
              disabled={disabled}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
};
