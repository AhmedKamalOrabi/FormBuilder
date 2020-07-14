/*   This Generic input component that will work with
 **  input type text,email, password, number
 **  Has toggle password funcationality
 **  Created by Ahmed Ragab
 */

import React, { ReactNode, useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export interface InputProps<T = any> {
  id?: string;
  name: string;
  label: string;
  value?: any;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  shrink?: boolean;
  error?: boolean;
  defaultValue?: string;
  helperText?: ReactNode;
  multiline?: boolean;
  rows?: number;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  togglePassword?: boolean;
  size?: 'medium' | 'small';
  autoFocus?: boolean;
  fullWidth?: boolean;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  type = 'text',
  name,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  shrink = false,
  error = false,
  startAdornment,
  endAdornment,
  togglePassword = false,
  ...rest
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
    <TextField
      {...rest}
      onChange={onChange}
      label={label}
      type={showPassword ? 'text' : type}
      error={error}
      value={value}
      name={name}
      placeholder={placeholder}
      variant="outlined"
      required={required}
      disabled={disabled}
      InputProps={{
        readOnly,
        startAdornment,
        endAdornment: togglePassword ? eyeIConButton : endAdornment,
      }}
      InputLabelProps={{
        shrink,
      }}
    />
  );
};
