import React, { Fragment, useState } from 'react';
import { Input } from './input';
import { Select } from './select';
import { Grid } from '@material-ui/core';
import { IFeatureModel } from '../interfaces/IFeatureModel';
import { IControl } from '../interfaces/IControl';

interface FormProps<T = any> {
  featureModel: IFeatureModel;
  model: T;
}

export function Form<T = any>(props: FormProps<T>) {
  const [state, setState] = useState<any>(props.model);

  const handleChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = currentTarget;
    setState({ ...state, [name]: value });
  };

  const handleSelectChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <Grid container>
        {props.featureModel.attributes.map(
          ({ label, name, type, kind, ...rest }: IControl) => {
            return (
              <Fragment key={label}>
                {kind === 'input' && (
                  <Input
                    {...rest}
                    name={name}
                    value={state[name]}
                    label={label}
                    type={type}
                    shrink
                    onChange={handleChange}
                  />
                )}
                {kind === 'select' && (
                  <Select
                    {...rest}
                    value={state[name]}
                    label={label}
                    name={name}
                    type={type}
                    onChange={handleSelectChange}
                  />
                )}
              </Fragment>
            );
          }
        )}
      </Grid>
    </form>
  );
}
