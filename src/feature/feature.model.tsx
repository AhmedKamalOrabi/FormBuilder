import React from 'react';
import { getCountries } from '../services/countries.service';
import { getPostsByUserId } from '../services/posts.service';
import { IFeatureModel } from '../interfaces/IFeatureModel';
import { IUser } from '../interfaces/IUser';
import { ICountry } from '../interfaces/ICountry';

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
    {
      kind: 'autocomplete',
      label: 'Post',
      name: 'post',
      getOptionsData: getPostsByUserId,
      // renderOption: (option?: any) => <RenderOption option={option} />,
      propertyName: 'title',
    },
    {
      kind: 'toggle-buttons',
      label: 'Action',
      name: 'action',
      exclusive: true,
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
        {
          label: 'Justify',
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
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
        {
          label: 'Other',
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
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
      ],
    },
    {
      kind: 'switch',
      label: 'Status',
      name: 'status',
      size: 'small',
      options: [
        {
          label: 'Active',
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
    {
      kind: 'datepicker',
      name: 'dateOfBirth',
      label: 'Date Birth',
      id: 'dateOfBirth',
      date: new Date(),
    },
  ],
};
