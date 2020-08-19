import { ReactNode } from 'react';
import { Size } from '../types';
export type GridSpace =
  | false
  | 'auto'
  | true
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

type InputType = 'text' | 'password' | 'phone' | 'email' | 'number';

export interface GridClasses {
  xs: GridSpace;
  sm: GridSpace;
  md: GridSpace;
  lg: GridSpace;
}

export interface IInputControl {
  id?: string;
  name: string;
  label?: string;
  value?: any;
  type?: InputType;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  shrink?: boolean;
  error?: boolean;
  defaultValue?: string;
  helperText?: ReactNode;
  autoFocus?: boolean;
  fullWidth?: boolean;
  autoComplete?: string;
  gridClasses?: Partial<GridClasses>;
  size?: Size;
  togglePassword?: boolean;
}
