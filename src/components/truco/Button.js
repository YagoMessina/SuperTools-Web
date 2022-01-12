import React from "react";

const Button = (props) => {
  return (
    <button style={{ marginLeft: props.margin }} onClick={props.onClick}>
      {props.name}
    </button>
  );
};
export default Button;
