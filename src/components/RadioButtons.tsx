import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
} from '@material-ui/core';
import { Placement } from '../types';
import { IInputControl } from '../interfaces/IInputControl';
import { IOptionControl } from '../interfaces/IOptionControl';
import { useOptionsData } from '../hooks/useOptionsData';
import { Color } from '../types';

interface RadioButtonsProps extends IInputControl, IOptionControl {
  labelPlacement?: Placement;
  color?: Color;
  row?: boolean;
}

export const RadioButtons: React.FC<RadioButtonsProps> = ({
  label,
  color = 'primary',
  size = 'medium',
  valueProperty = 'value',
  textProperty = 'text',
  keyProperty = 'value',
  labelPlacement,
  disabled = false,
  options: optionsData,
  getOptionsData,
  row = true,
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
        <RadioGroup {...rest} row={row} value={1}>
          {options &&
            options.map((option) => (
              <FormControlLabel
                labelPlacement={labelPlacement}
                key={option[keyProperty] || option[valueProperty]}
                value={option[valueProperty]}
                control={<Radio color={color} size={size} />}
                label={option[textProperty]}
                disabled={disabled}
              />
            ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};
