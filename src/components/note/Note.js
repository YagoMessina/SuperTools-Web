import React from "react";
import "./Note.css";
import Path from "../../util/Path";
import { useNavigate } from "react-router";

const Note = (props) => {
  const navigate = useNavigate();

  return (
    <div className="note" onClick={() => navigate(Path.note + "/" + props.id)}>
      {props.title}
      <p>★</p>
    </div>
  );
};

export default Note;
