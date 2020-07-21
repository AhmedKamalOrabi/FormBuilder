import React from 'react';
import { Form } from '../components/form';
import { FeatureModel } from './feature.model';
import { UserModel } from '../models/UserModel';
import { IUser } from '../interfaces/IUser';

interface AddUserProps {}

export const AddUser: React.FC<AddUserProps> = (
  props: AddUserProps
): JSX.Element => {
  return <Form<IUser> featureModel={FeatureModel} model={new UserModel()} />;
};
