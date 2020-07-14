import { getCountries } from '../services/countries.service';
import { IFeatureModel } from '../interfaces/IFeatureModel';
import { IUser } from '../interfaces/IUser';
import { ICountry } from '../interfaces/ICountry';

export const FeatureModel: IFeatureModel<IUser, ICountry> = {
  attributes: [
    {
      kind: 'input',
      type: 'text',
      name: 'userName',
      label: 'User name',
      placeholder: 'Please enter user name',
      error: true,
      helperText: 'enter valid user name',
    },
    {
      kind: 'input',
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Please enter email',
    },
    {
      kind: 'input',
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Please enter password',
      togglePassword: true,
    },
    {
      kind: 'input',
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirm password',
      placeholder: 'Please enter confirm password',
      togglePassword: true,
    },
    {
      kind: 'select',
      type: 'select',
      label: 'Country',
      name: 'country',
      getOptionsData: getCountries,
      shrink: true,
    },
  ],
};
