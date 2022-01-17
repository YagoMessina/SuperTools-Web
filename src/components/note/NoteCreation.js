import React from "react";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./NoteDetail";
import { doPost } from "../../util/Http";

const NoteCreation = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    doPost(
      "/api/note",
      {
        title: title,
        body: body,
        favourite: false,
      },
      (response) => {
        setMessage("Nota Creada");
      },
      (error) => setMessage(error.response.data.message)
    );
  };

  const selected = {
    display: "flex",
  };

  return (
    <div>
      <Navbar />
      <main className="note-detail">
        <form onSubmit={handleSubmit}>
          <label className="head" style={title !== "" ? selected : null}>
            Titulo
          </label>
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <label className="head" style={body !== "" ? selected : null}>
            Cuerpo
          </label>
          <textarea
            placeholder="Cuerpo"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
          <input type="submit" value="Guardar" />
          <p className="error">{message}</p>
        </form>
      </main>
    </div>
  );
};

export default NoteCreation;
