import { ReactNode } from 'react';

export interface IFormControl {
  id?: string;
  name?: string;
  label?: string;
  value?: any;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  shrink?: boolean;
  error?: boolean;
  helperText?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  size?: 'medium' | 'small';
  autoFocus?: boolean;
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
  type?: string;
  kind?: string;
}
