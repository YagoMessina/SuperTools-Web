import React from "react";
import "./Note.css";

const Note = (props) => {
  const handleClick = () => {
    alert("hola");
  };
  return (
    <div className="note" onClick={handleClick}>
      {props.title}
    </div>
  );
};

export default Note;
