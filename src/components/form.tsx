import React, { Fragment, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Input } from './controls/input';
import { Select } from './controls/select';
import { Autocomplete } from './controls/autocomplete';
import { IFeatureModel } from '../interfaces/IFeatureModel';
import { IControl } from '../interfaces/IControl';
import { ToggleButtons } from './controls/toggle-buttons';
import { RadioButtons } from './controls/radio-buttons';
import { Checkbox } from './controls/checkbox';
import { Switch } from './controls/switch';
import { FileInput } from './controls/file-input';
import { Datepicker } from './datepicker';

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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <Grid container spacing={2}>
        {props.featureModel.attributes.map(
          ({ label, name, type, kind, ...rest }: any) => {
            return (
              <Grid item key={label}>
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
                {kind === 'autocomplete' && (
                  <Autocomplete
                    {...rest}
                    value={state[name]}
                    label={label}
                    name={name}
                    type={type}
                    onHandleChange={handleAutocompleteChange}
                  />
                )}
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
                {kind === 'datepicker' && (
                  <Datepicker {...rest} name={name} label={label} />
                )}
              </Grid>
            );
          }
        )}
      </Grid>
    </form>
  );
}
