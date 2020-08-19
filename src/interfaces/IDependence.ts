type Action = 'hide' | 'disabled' | 'readOnly' | 'fetch';
export interface IDependence {
  name: string;
  value: any;
  action: Action;
}
