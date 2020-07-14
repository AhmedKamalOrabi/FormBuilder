import { get } from 'lodash-es';
import { IUser } from '../interfaces/IUser';

export class CreateUserModel implements IUser {
  public userName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public country: string;

  constructor(user = {}) {
    this.userName = get(user, 'user_name', '');
    this.email = get(user, 'email', '');
    this.password = get(user, 'password', '');
    this.confirmPassword = get(user, 'confirmPassword', '');
    this.country = get(user, 'country', '');
  }
}
