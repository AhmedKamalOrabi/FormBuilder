import React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch as MSwitch,
  Grid,
} from '@material-ui/core';

import { Color } from '../types';
import { IInputControl } from '../interfaces/IInputControl';
import { IOptionControl } from '../interfaces/IOptionControl';
import { useOptionsData } from '../hooks/useOptionsData';

interface SwitchProps extends IInputControl, IOptionControl {
  onChange(param?: React.ChangeEvent<HTMLInputElement>): void;
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
  options: optionsData,
  getOptionsData,
  gridClasses = { xs: 12, sm: 6, md: 3, lg: 3 },
  ...rest
}) => {
  const options = useOptionsData({ optionsData, getOptionsData });

  return (
    <Grid
      item
      xs={gridClasses.xs}
      sm={gridClasses.sm}
      md={gridClasses.md}
      lg={gridClasses.lg}
    >
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
      </FormControl>
    </Grid>
  );
};
