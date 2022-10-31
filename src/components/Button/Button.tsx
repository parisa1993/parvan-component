import React from "react";
import "./Button.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { primary, size, backgroundColor, text } = props;
  const mode =
    primary && primary == true ? "button--primary" : "button--secondary";
  return (
    <button
      {...props}
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      style={{ backgroundColor: backgroundColor }}
    >
      {text}
    </button>
  );
};

export default Button;
