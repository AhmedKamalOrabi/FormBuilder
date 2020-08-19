import { Color, Placement } from '../types';
import { IInputControl } from './IInputControl';
import { IOptionControl } from './IOptionControl';
import { IDependence } from './IDependence';
type Kind =
  | 'input'
  | 'select'
  | 'autocomplete'
  | 'toggle-buttons'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'file'
  | 'datepicker';

export interface IControl extends IInputControl, IOptionControl {
  kind: Kind;
  renderOption?: any;
  onHandleChange?(event: any, newValue: string | null, name: string): void;
  groupBy?: string;
  exclusive?: boolean;
  row?: boolean;
  color?: Color;
  labelPlacement?: Placement;
  date?: Date;
  onFocusChange?(focused?: any): void;
  minDate?: Date;
  maxDate?: Date;
  depend?: IDependence[];
  hide?: boolean;
}
