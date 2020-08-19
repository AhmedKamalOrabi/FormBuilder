import React, { useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { IFeatureModel } from '../interfaces/IFeatureModel';
import {
  Input,
  Select,
  Checkbox,
  RadioButtons,
  ToggleButtons,
  Switch,
  FileInput,
} from '.';
import { IDependence } from '../interfaces/IDependence';

interface FormProps<T = any> {
  featureModel: IFeatureModel;
  model: T;
}

type HTMLInputEvent = React.ChangeEvent<HTMLInputElement> &
  React.ChangeEvent<EventTarget>;

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

  const handleAutocompleteChange = (
    event: any,
    newValue: string | null,
    name: string
  ): void => {
    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = props.featureModel.attributes.filter(
      (feature) => feature.name === event.target.name
    )[0];

    if (target.depend) {
      target.depend.forEach(({ name, value, action }: IDependence) => {
        const source = props.featureModel.attributes.filter(
          (feature) => feature.name === name
        )[0];

        if (event.target.value === value) {
          console.log(source)
        }
      });
    }

    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleFileChange = (event: HTMLInputEvent) => {
    const files = event.target.files as FileList;

    setState({
      ...state,
      [event.target.name]: files,
    });
  };

  // const handleDatepicker = (date: any, name: string) => {
  //   setState({
  //     ...state,
  //     [name]: date,
  //   });
  // };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <Grid container spacing={2}>
        {props.featureModel.attributes.map(
          ({ label, name, type, kind, hide, ...rest }: any) => {
            return (
              <Fragment key={label}>
                {!hide && kind === 'input' && (
                  <Input
                    {...rest}
                    name={name}
                    value={state[name]}
                    label={label}
                    type={type}
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
                {/* {kind === 'autocomplete' && (
                  <Autocomplete
                    {...rest}
                    value={state[name]}
                    label={label}
                    name={name}
                    type={type}
                    onHandleChange={handleAutocompleteChange}
                  />
                )} */}
                {kind === 'toggle-buttons' && (
                  <ToggleButtons
                    {...rest}
                    value={state[name]}
                    name={name}
                    onChange={handleAutocompleteChange}
                  />
                )}
                {kind === 'radio' && (
                  <RadioButtons
                    {...rest}
                    value={state[name]}
                    name={name}
                    label={label}
                    onChange={handleChange}
                  />
                )}
                {kind === 'checkbox' && (
                  <Checkbox
                    {...rest}
                    value={state[name]}
                    name={name}
                    label={label}
                    onChange={handleCheckboxChange}
                  />
                )}
                {kind === 'switch' && (
                  <Switch
                    {...rest}
                    value={state[name]}
                    name={name}
                    label={label}
                    onChange={handleToggleChange}
                  />
                )}
                {kind === 'file' && (
                  <FileInput
                    {...rest}
                    name={name}
                    label={label}
                    onChange={handleFileChange}
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
