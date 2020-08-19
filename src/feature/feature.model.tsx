import React from 'react';
import { getCountries } from '../services/countries.service';
import { getPostsByUserId } from '../services/posts.service';
import { IFeatureModel } from '../interfaces/IFeatureModel';
import { IUser } from '../interfaces/IUser';
import { ICountry } from '../interfaces/ICountry';
import moment from 'moment';

// interface IRadioOption {
//   label: string;
//   value: string;
//   size?: Size;
// }

interface OptionProps {
  option?: any;
}

function countryToFlag(alpha2Code: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? alpha2Code
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : alpha2Code;
}

const RenderOption: React.FC<OptionProps> = ({ option }) => {
  return (
    <React.Fragment>
      <span>{countryToFlag(option.alpha2Code)}</span>
      {option.name} ({option.alpha2Code}){' '}
      <img width={20} src={option.flag} alt={option.name} />
    </React.Fragment>
  );
};

export const FeatureModel: IFeatureModel = {
  attributes: [
    {
      kind: 'input',
      type: 'text',
      name: 'userName',
      label: 'User name',
      placeholder: 'Please enter user name',
      helperText: 'enter valid user name',
      hide: false,
      disabled: false,
      readOnly: false,
    },
    {
      kind: 'input',
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Please enter email',
      hide: false,
      disabled: false,
      readOnly: false,
    },
    {
      kind: 'input',
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Please enter password',
      togglePassword: true,
      hide: false,
      disabled: false,
      readOnly: false,
    },
    {
      kind: 'input',
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirm password',
      placeholder: 'Please enter confirm password',
      togglePassword: true,
      hide: false,
      disabled: false,
      readOnly: false,
    },
    {
      kind: 'select',
      label: 'Country',
      name: 'country',
      getOptionsData: getCountries,
      textProperty: 'name',
      valueProperty: 'name',
      depend: [
        {
          name: 'city',
          value: '',
          action: 'fetch',
        },
      ],
    },
    {
      kind: 'select',
      label: 'City',
      name: 'city',
      getOptionsData: getCountries,
      textProperty: 'name',
      valueProperty: 'name',
    },
    {
      kind: 'autocomplete',
      label: 'Post',
      name: 'post',
      getOptionsData: getPostsByUserId,
      // renderOption: (option?: any) => <RenderOption option={option} />,
      textProperty: 'title',
      valueProperty: 'title',
    },
    {
      kind: 'toggle-buttons',
      label: 'Action',
      name: 'action',
      exclusive: true,
      options: [
        {
          text: 'Left',
          value: 'left',
        },
        {
          text: 'Center',
          value: 'center',
        },
        {
          text: 'Right',
          value: 'right',
        },
        {
          text: 'Justify',
          value: 'justify',
          disabled: true,
        },
      ],
    },
    {
      kind: 'radio',
      name: 'gender',
      label: 'Gender',
      row: true,
      size: 'small',
      color: 'primary',
      labelPlacement: 'end',
      options: [
        {
          text: 'Male',
          value: 'male',
        },
        {
          text: 'Female',
          value: 'female',
        },
        {
          text: 'Other',
          value: 'other',
        },
      ],
    },
    {
      kind: 'checkbox',
      name: 'color',
      label: 'Color',
      options: [
        {
          text: 'Red',
          value: 'red',
        },
        {
          text: 'Green',
          value: 'green',
        },
        {
          text: 'Blue',
          value: 'blue',
        },
      ],
      depend: [
        { name: 'userName', value: 'green', action: 'hide' },
        { name: 'email', value: 'green', action: 'disabled' },
        { name: 'password', value: 'red', action: 'readOnly' },
      ],
    },
    {
      kind: 'switch',
      label: 'Status',
      name: 'status',
      size: 'small',
      options: [
        {
          text: 'Active',
          value: true,
        },
      ],
    },
    {
      kind: 'file',
      name: 'picture',
      label: 'Picture',
      id: 'picture',
    },
    // {
    //   kind: 'datepicker',
    //   name: 'dateOfBirth',
    //   label: 'Date Birth',
    //   id: 'dateOfBirth',
    //   minDate: moment().subtract(1, 'day'),
    //   maxDate: moment().subtract(5, 'days'),
    // },
  ],
};
