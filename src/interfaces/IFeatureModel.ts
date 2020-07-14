import { IControl } from './IControl';

export interface IFeatureModel<T = any, U = any> {
  attributes: IControl<T, U>[];
}
