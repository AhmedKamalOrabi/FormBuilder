import { SelectProps } from '../components/select';

type Kind = 'input' | 'select';

export interface IControl<T = any, U = any> extends SelectProps<T, U> {
  kind: Kind;
}
