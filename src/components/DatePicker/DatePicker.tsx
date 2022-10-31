import React from "react";
import { default as DPicker } from "react-datepicker2";
import { Moment } from "moment-jalaali";
import "./DatePicker.scss";

export interface DatePickerProps {
  value: Moment;
  onChange: any;
}

const DatePicker = (props: DatePickerProps) => {
  const { value, onChange } = props;

  const calenderIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z"
        fill="#4F4F4F"
      />
    </svg>
  );
  const crossIcon = (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 1.73935L12.59 0.329346L7 5.91935L1.41 0.329346L0 1.73935L5.59 7.32935L0 12.9193L1.41 14.3293L7 8.73935L12.59 14.3293L14 12.9193L8.41 7.32935L14 1.73935Z"
        fill="#BDBDBD"
      />
    </svg>
  );

  return (
    <div className="datePicker">
      <span className="icon">{calenderIcon}</span>
      <DPicker
        isGregorian={false}
        timePicker={false}
        value={value}
        onChange={onChange}
      />
      {value !== undefined && value != null ? (
        <span className="icon" onClick={() => onChange(undefined)}>
          {crossIcon}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default DatePicker;
