import React from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox as MCheckbox,
  Grid,
} from '@material-ui/core';
import { Color, Placement } from '../types';
import { IInputControl } from '../interfaces/IInputControl';
import { IOptionControl } from '../interfaces/IOptionControl';
import { useOptionsData } from '../hooks/useOptionsData';

interface CheckboxProps extends IInputControl, IOptionControl {
  row?: boolean;
  color?: Color;
  labelPlacement?: Placement;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  color = 'primary',
  name,
  row = true,
  size = 'medium',
  valueProperty = 'value',
  textProperty = 'text',
  keyProperty = 'value',
  labelPlacement,
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
    </Grid>
  );
};
