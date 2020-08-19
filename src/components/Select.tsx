/*   This Generic select component that will work with
 **  Created by Ahmed Ragab
 */

import React from 'react';
import {
  Select as MSelect,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import { IInputControl } from '../interfaces/IInputControl';
import { IOptionControl } from '../interfaces/IOptionControl';
import { useOptionsData } from '../hooks/useOptionsData';

export interface SelectProps extends IInputControl, IOptionControl {}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  autoComplete = 'current-password',
  id = `select-${name}-${label}`,
  shrink,
  readOnly,
  getOptionsData,
  options: optionsData,
  valueProperty = 'value',
  textProperty = 'text',
  keyProperty = 'id',
  gridClasses = { xs: 12, sm: 6, md: 3, lg: 3 },
  ...rest
}): JSX.Element => {
  const options = useOptionsData({ optionsData, getOptionsData });
  return (
    <Grid
      item
      xs={gridClasses.xs}
      sm={gridClasses.sm}
      md={gridClasses.md}
      lg={gridClasses.lg}
    >
      <FormControl fullWidth variant="outlined">
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <MSelect id={id} labelWidth={70}>
          {options.map((option) => (
            <MenuItem
              key={option[keyProperty] || option[valueProperty]}
              value={option[valueProperty]}
            >
              {option[textProperty]}
            </MenuItem>
          ))}
        </MSelect>
      </FormControl>
    </Grid>
  );
};
