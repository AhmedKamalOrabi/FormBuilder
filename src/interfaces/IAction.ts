export interface IAction<T> {
  type: string;
  data: T;
  error: string;
  errors: {};
}
