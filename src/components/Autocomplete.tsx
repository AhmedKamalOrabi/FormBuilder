/*   This Generic AutoComplete component that will work with
 **  you can select one or multiple items
 **  Searchable, Async alternatives [React-select,Downshift]
 **  Created by Ahmed Ragab
 */

import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress, Grid } from '@material-ui/core';
import { Autocomplete as MAutocomplete } from '@material-ui/lab';
import { IInputControl } from '../interfaces/IInputControl';
import { IOptionControl } from '../interfaces/IOptionControl';
import { useOptionsData } from '../hooks/useOptionsData';

export interface AutocompleteProps extends IInputControl, IOptionControl {
  onHandleChange?(event: any, newValue: string | null, name: string): void;
  groupBy?: string;
  autoComplete?: string;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  options: optionsData,
  getOptionsData,
  textProperty = 'name',
  label,
  value,
  name,
  error,
  groupBy = 'name',
  autoComplete = 'current-password',
  onHandleChange = () => {},
  gridClasses = { xs: 12, sm: 6, md: 3, lg: 3 },
  ...rest
}): JSX.Element | null => {
  const [loading, setLoading] = useState(true);
  const [keyword, setkeyword] = useState('');

  const handleInputChange = (event: any, newValue: any) => {
    setkeyword(newValue);
  };
  const options = useOptionsData({ optionsData, getOptionsData });

  useEffect(() => {
    if (options.length) {
      setLoading(false);
    }
  }, [options]);
  return (
    <Grid
      item
      xs={gridClasses.xs}
      sm={gridClasses.sm}
      md={gridClasses.md}
      lg={gridClasses.lg}
    >
      <MAutocomplete
        {...rest}
        loading={loading}
        value={value}
        onChange={(event, newValue) => {
          onHandleChange(event, newValue, name);
        }}
        onInputChange={handleInputChange}
        options={options}
        //groupBy={(option) => option[groupBy]}
        style={{ width: 300 }}
        getOptionLabel={(option) => option[textProperty] || ''}
        renderInput={(params) => (
          <TextField
            name={name}
            error={error}
            {...params}
            label={label}
            variant="outlined"
            inputProps={{
              ...params.inputProps,
              autoComplete,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </Grid>
  );
};
