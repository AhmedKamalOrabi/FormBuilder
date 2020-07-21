import React, { useState, useEffect } from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox as MCheckbox,
} from '@material-ui/core';
import { Color, Size, Placement } from '../../types';

interface CheckboxProps {
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

export const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  color,
  name,
  row = true,
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
      <FormGroup row={row}>
        {options &&
          options.map((option) => (
            <FormControlLabel
              key={option[keyProperty]}
              labelPlacement={labelPlacement}
              control={
                <MCheckbox
                  {...rest}
                  value={option[valueProperty]}
                  checked={value === option[valueProperty]}
                  name={name}
                  color={color}
                />
              }
              label={option[textProperty]}
            />
          ))}
      </FormGroup>
    </FormControl>
  );
};
