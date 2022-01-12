import React from "react";
import "./Note.css";
import Path from "../../util/Path";
import { useNavigate } from "react-router";

const Note = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="note"
        onClick={() => navigate(Path.note + "/" + props.id)}
      >
        {props.title}
      </div>
      <div className="star" onClick={() => alert("estrellita")}>
        ★
      </div>
    </div>
  );
};

export default Note;
