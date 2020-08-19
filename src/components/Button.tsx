/*   This Generic Button component that will work with
 **  Button
 **  Created by Ahmed Ragab
 */

import React from 'react';
import { Grid, Button as MButton, IconButton } from '@material-ui/core';
import { GridClasses } from '../interfaces/IInputControl';
import { Color, Size, Variant } from '../types';

export interface ButtonProps {
  name?: string;
  label?: string;
  id?: string;
  gridClasses?: Partial<GridClasses>;
  color?: Color;
  disabled?: boolean;
  startIcon?: Node;
  endIcon?: Node;
  fullWidth?: boolean;
  href?: string;
  size?: Size;
  variant?: Variant;
  children?: Node;
  content?: 'string' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({
  name,
  label,
  id = `button-${name}-${label}`,
  gridClasses = { xs: 12, sm: 6, md: 3, lg: 3 },
  content = 'string',
  children = 'Submit',
  ...rest
}): JSX.Element => {
  const ComponentTag = content === 'string' ? MButton : IconButton;
  return (
    <Grid
      item
      xs={gridClasses.xs}
      sm={gridClasses.sm}
      md={gridClasses.md}
      lg={gridClasses.lg}
    >
      {/* <ComponentTag /> */}
    </Grid>
  );
};
