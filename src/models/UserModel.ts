import { get } from 'lodash-es';
import { IUser } from '../interfaces/IUser';

export class UserModel implements IUser {
  public userName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
  public country: string;
  public movie: string;
  public action: string;
  public gender: string;
  public color: string;
  public status: string;
  public picture: FileList;
  public dateOfBirth: string;

  constructor(user = {}) {
    this.userName = get(user, 'user_name', '');
    this.email = get(user, 'email', '');
    this.password = get(user, 'password', '');
    this.confirmPassword = get(user, 'confirmPassword', '');
    this.country = get(user, 'country', '');
    this.movie = get(user, 'movie', '');
    this.action = get(user, 'action', 'left');
    this.gender = get(user, 'gender', 'male');
    this.color = get(user, 'color', 'red');
    this.status = get(user, 'status', false);
    this.picture = get(user, 'picture', null);
    this.dateOfBirth = get(user, 'dateOfBirth', '');
  }
}
