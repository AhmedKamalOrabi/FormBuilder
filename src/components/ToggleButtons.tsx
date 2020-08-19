import React from 'react';
import { Grid } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { IInputControl } from '../interfaces/IInputControl';
import { IOptionControl } from '../interfaces/IOptionControl';
import { useOptionsData } from '../hooks/useOptionsData';

interface ToggleButtonsProps extends IInputControl, IOptionControl {
  onChange(
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null,
    name: string
  ): void;

  orientation?: 'vertical' | 'horizontal';
  exclusive?: boolean;
}

export const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  value,
  name,
  onChange,
  valueProperty = 'value',
  textProperty = 'text',
  keyProperty = 'value',
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
      <ToggleButtonGroup
        value={value}
        onChange={(event: any, newValue: any) =>
          onChange(event, newValue, name)
        }
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
    </Grid>
  );
};
