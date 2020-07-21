/*   This Generic AutoComplete component that will work with
 **  you can select one or multiple items
 **  Searchable, Async alternatives [React-select,Downshift]
 **  Created by Ahmed Ragab
 */

import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import { Autocomplete as MAutocomplete } from '@material-ui/lab';
import { SelectProps } from './select';

export interface AutocompleteProps<T = any> extends SelectProps {
  onHandleChange?(event: any, newValue: string | null, name: string): void;
  groupBy?: string;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  getOptionsData,
  propertyName = 'name',
  label,
  value,
  name,
  error,
  groupBy = 'name',
  onHandleChange = () => {},
  ...rest
}): JSX.Element | null => {
  const [opt, setOpt] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setkeyword] = useState('');
  useEffect(() => {
    async function getData() {
      if (typeof getOptionsData === 'function') {
        const data = await getOptionsData();
        console.log(data);
        setOpt(data);
        setLoading(false);
      }
    }
    if (!options) {
      getData();
    } else {
      setOpt(options);
    }
  }, [options, getOptionsData]);

  const handleInputChange = (event: any, newValue: any) => {
    setkeyword(newValue);
  };

  return (
    <MAutocomplete
      {...rest}
      loading={loading}
      value={value}
      onChange={(event, newValue) => {
        onHandleChange(event, newValue, name);
      }}
      onInputChange={handleInputChange}
      options={opt}
      groupBy={(option) => option[groupBy]}
      style={{ width: 300 }}
      getOptionLabel={(option) => option[propertyName] || ''}
      renderInput={(params) => (
        <TextField
          name={name}
          error={error}
          {...params}
          label={label}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
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
  );
};
