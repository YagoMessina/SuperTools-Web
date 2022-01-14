import React, { useEffect, useState } from "react";
import "./NoteDetail.css";
import Navbar from "../navbar/Navbar";
import { doGet } from "../../util/Http";
import { doPut } from "../../util/Http";

const NoteDetail = (props) => {
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [favourite, setFavourite] = useState("");

  const id = window.location.href.split("/")[4];

  useEffect(() => {
    console.log("mounted");
    doGet(
      "/api/note/" + id,
      (response) => {
        setNote(response.data);
        setTitle(response.data.title);
        setBody(response.data.body);
        setFavourite(response.data.favourite);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const update = (e) => {
    e.preventDefault();
    if (
      note.title === title &&
      note.body === body &&
      note.favourite === favourite
    )
      return;
    const updatedNote = {
      id: id,
      title: title,
      body: body,
      favourite: favourite,
    };
    doPut(
      "/api/note",
      updatedNote,
      (response) => console.log(response),
      (error) => console.log(error)
    );
  };

  const selected = {
    display: "flex",
  };
  return (
    <div>
      <Navbar />
      <main className="note-detail">
        <form onSubmit={update}>
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

export default NoteDetail;
