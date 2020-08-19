/*   This Generic input component that will work with
 **  input type text,email, password, number, phone
 **  Has toggle password funcationality
 **  TextArea if you send multiline prop and control with rows
 **  Created by Ahmed Ragab
 */

import React, { ReactNode, useState } from 'react';
import { InputAdornment, IconButton, TextField, Grid } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { IInputControl } from '../interfaces/IInputControl';

export interface InputProps extends IInputControl {
  multiline?: boolean;
  rows?: number;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  autoComplete = 'current-password',
  endAdornment,
  togglePassword = false,
  id = `input-${type}-${name}-${label}`,
  shrink,
  onChange,
  readOnly,
  startAdornment,
  fullWidth = true,
  gridClasses = { xs: 12, sm: 6, md: 3, lg: 3 },
  ...rest
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const eyeIConButton = (
    <InputAdornment position="start">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showPassword ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Grid
      item
      xs={gridClasses.xs}
      sm={gridClasses.sm}
      md={gridClasses.md}
      lg={gridClasses.lg}
    >
      <TextField
        {...rest}
        fullWidth={fullWidth}
        autoComplete={autoComplete}
        onChange={onChange}
        label={label}
        type={showPassword ? 'text' : type}
        name={name}
        variant="outlined"
        InputProps={{
          readOnly,
          startAdornment,
          endAdornment: togglePassword ? eyeIConButton : endAdornment,
        }}
        InputLabelProps={{
          shrink,
        }}
      />
    </Grid>
  );
};
