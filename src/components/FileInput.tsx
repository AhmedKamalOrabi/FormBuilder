import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Color } from '../types';

type HTMLInputEvent = React.ChangeEvent<HTMLInputElement> &
  React.ChangeEvent<EventTarget>;

interface FileInputProps {
  multiple?: boolean;
  onChange(event: HTMLInputEvent): void;
  accept?: string;
  id?: string;
  color?: Color;
  label?: string;
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  })
);

export const FileInput: React.FC<FileInputProps> = ({
  multiple = true,
  onChange,
  accept = 'image/*',
  color = 'primary',
  label = 'Upload',
  id = 'upload',
  name,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept={accept}
        className={classes.input}
        id={id}
        multiple={multiple}
        type="file"
        onChange={onChange}
        name={name}
      />
      <label htmlFor={id}>
        <Button
          startIcon={<CloudUploadIcon />}
          variant="contained"
          color={color}
          component="span"
        >
          {label}
        </Button>
      </label>
    </div>
  );
};
