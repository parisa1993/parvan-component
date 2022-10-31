import React, { useEffect, useState } from "react";
import "./DropDown.scss";

export interface KeyValue {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  key: string;
  value: string;
}

export interface DropDownProps extends React.HTMLAttributes<HTMLSelectElement> {
  onChange: any;
  name?: string;
  disabled?: boolean;
  selectClass?: string;
  placeholder?: string;
  options?: KeyValue[];
}

const DropDown = (props: DropDownProps) => {
  const { onChange, name, disabled, selectClass, placeholder, options } = props;
  const [value, setValue] = useState<KeyValue | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setToggle(false);
    onChange(value);
  }, [value, onChange]);

  return (
    <div className="dropdown">
      <input name={name} type="hidden" value={value?.value} />
      <div
        className={
          "dropdown-selected " +
          (disabled ? "dropdown-disabled " : "") +
          selectClass
        }
        onClick={() => {
          if (disabled) return;
          setToggle(!toggle);
        }}
      >
        <span
          className={value === null ? "dropdown-placeholder" : "dropdown-value"}
        >
          {value === null ? placeholder : value?.value}
        </span>
        <span className={toggle ? "dropdown-icon-toggle" : "dropdown-icon"}>
          &nbsp;
        </span>
      </div>
      <div
        className={"dropdown-items " + (toggle ? "dropdown-items-active" : "")}
      >
        <ul>
          {options?.map((item) => (
            <li
              key={item.key}
              className={
                value?.key === item.key
                  ? "dropdown-select selected"
                  : "dropdown-select"
              }
              onClick={() => setValue(item)}
            >
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
