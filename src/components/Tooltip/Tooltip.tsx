import React from "react";
import "./Tooltip.scss";

export interface TooltipProps {
  text?: string;
  element: any;
}

const Tooltip = (props: TooltipProps) => {
  const { text, element } = props;
  return (
    <div className="tooltip">
      {element}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};

export default Tooltip;
