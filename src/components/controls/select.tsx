/*   This Generic input component that will work with
 **  input type text,email, password, number
 **  Has toggle password funcationality
 **  Created by Ahmed Ragab
 */

import React, { useEffect, useState } from 'react';
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select as MSelect,
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';
import { InputProps } from './input';

export interface SelectProps extends InputProps {
  options?: any[];
  getOptionsData?(param?: any): Promise<any[]>;
  multiple?: boolean;
  propertyName?: string;
  propertyValue?: string;
  onChange?(event: React.ChangeEvent<{ name?: string; value: unknown }>): void;
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 200,
    },
  })
);

export function Select({
  id,
  label,
  options,
  value,
  onChange,
  getOptionsData,
  propertyName = 'name',
  propertyValue = 'value',
  multiple = false,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  shrink = false,
  error = false,
  startAdornment,
  endAdornment,
  ...rest
}: SelectProps): JSX.Element {
  const [opt, setOpt] = useState<any[]>([]);
  const classes = useStyles();
  useEffect(() => {
    async function getData() {
      if (typeof getOptionsData === 'function') {
        const data = await getOptionsData();
        setOpt(data);
      }
    }
    if (!options) {
      getData();
    } else {
      setOpt(options);
    }
  }, [options, getOptionsData]);

  return (
    <FormControl>
      <InputLabel id={id}>{label}</InputLabel>
      <MSelect
        {...rest}
        multiple={multiple}
        labelId={id}
        value={value}
        id={id}
        variant="outlined"
        onChange={onChange}
        className={classes.formControl}
      >
        {opt.map((option) => (
          <MenuItem key={option[propertyName]} value={option[propertyName]}>
            {option[propertyName]}
          </MenuItem>
        ))}
      </MSelect>
    </FormControl>
  );
}
