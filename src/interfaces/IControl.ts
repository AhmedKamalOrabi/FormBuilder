import { SelectProps } from '../components/controls/select';
import { Color, Placement } from '../types';
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

export interface IControl extends SelectProps {
  kind: Kind;
  renderOption?: any;
  onHandleChange?(event: any, newValue: string | null, name: string): void;
  groupBy?: string;
  exclusive?: boolean;
  row?: boolean;
  color?: Color;
  labelPlacement?: Placement;
  date?: Date;
}
