import React from "react";
import "./Note.css";

const Note = (props) => {
  const handleClick = () => {
    alert("hola");
  };
  return (
    <div className="note" onClick={handleClick}>
      {props.title}
      <p onClick={() => alert("adsd")}>★</p>
    </div>
  );
};

export default Note;
