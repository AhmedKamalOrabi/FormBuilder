export interface IState<T = any> {
  data: T;
  loading: boolean;
  errors: {};
}
