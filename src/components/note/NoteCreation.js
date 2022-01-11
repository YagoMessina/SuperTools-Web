import React from "react";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./NoteDetail";

const NoteCreation = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(title + body);
  };

  const selected = {
    display: "flex",
  };

  return (
    <div>
      <Navbar />
      <main className="note-detail">
        <form onSubmit={handleSubmit}>
          <label style={title !== "" ? selected : null}>Titulo</label>
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label style={body !== "" ? selected : null}>Cuerpo</label>
          <label>Cuerpo</label>
          <textarea
            placeholder="Cuerpo"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
          <input type="submit" value="Guardar" />
        </form>
      </main>
    </div>
  );
};

export default NoteCreation;
