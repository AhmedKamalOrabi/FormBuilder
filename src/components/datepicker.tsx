import React, { useState } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './DateRange/custom_style.css';
import moment, { Moment } from 'moment';

type PickerDate = Moment | null;

interface DatepickerProps {
  date: PickerDate;
  onDateChange(date: any): void;
  focused: boolean;
  onFocusChange(focused: any): void;
  id?: string;
}

const getMomentDate = (date: any) => (date ? moment(date) : null);

export const Datepicker: React.FC<DatepickerProps> = ({
  date = null,
  id = 'datepicker',
  ...rest
}) => {
  const [_date, setdate] = React.useState<PickerDate>(() =>
    getMomentDate(date)
  );

  React.useEffect(() => {
    setdate(getMomentDate(date));
  }, [date]);

  return (
    <SingleDatePicker
      {...rest}
      onDateChange={() => {}}
      onFocusChange={() => {}}
      id={id}
      date={_date}
    />
  );
};
