import React from "react";

type ButtonAsButton = {
  label: string;
  as?: "button";
  href?: never;
  onClick: () => void;
  classes: string;
};

type ButtonAsAnchor = {
  label: string;
  as: "a";
  href: string;
  onClick?: never;
  classes: string;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button: React.FC<ButtonProps> = (props) => {
  if (props.as === "a") {
    return (
      <a href={props.href} className={props.classes}>
        {props.label}
      </a>
    );
  }

  return (
    <button onClick={props.onClick} className={props.classes}>
      {props.label}
    </button>
  );
};

export default Button;