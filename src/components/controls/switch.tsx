import React, { useState, useEffect } from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Switch as MSwitch,
} from '@material-ui/core';

import { Size, Color } from '../../types';

interface SwitchProps {
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
}

export const Switch: React.FC<SwitchProps> = ({
  value,
  label,
  color = 'primary',
  name,
  size = 'medium',
  valueProperty = 'value',
  textProperty = 'label',
  keyProperty = 'value',
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
      <FormGroup>
        {options &&
          options.map((option) => (
            <FormControlLabel
              disabled={disabled}
              key={option[textProperty]}
              control={
                <MSwitch
                  {...rest}
                  size={size}
                  name={name}
                  color={color}
                  checked={value === option[valueProperty]}
                />
              }
              label={option[textProperty]}
            />
          ))}
      </FormGroup>
      <FormHelperText>Be careful</FormHelperText>
    </FormControl>
  );
};
