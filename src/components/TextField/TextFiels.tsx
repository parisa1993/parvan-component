import React from "react";
import "./TextField.scss";

export interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  textFieldClass?: string;
  inputClass?: string;
  labelClass?: string;
  label?: string;
  labelFor?: string;
  type?: string;
  value?: string;
}

const TextField = (props: TextFieldProps) => {
  const { label, textFieldClass, inputClass, labelClass, labelFor } = props;

  return (
    <div
      className={`text-field ${
        label != undefined ? "no_placeholder" : ""
      } ${textFieldClass}`}
    >
      <input {...props} className={`input ${inputClass}`} />
      <label htmlFor={labelFor} className={`label ${labelClass}`}>
        {label}
      </label>
    </div>
  );
};

export default TextField;
