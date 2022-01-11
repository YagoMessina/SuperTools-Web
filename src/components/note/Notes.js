import React from "react";
import Note from "./Note";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Path from "../../util/Path";

const NoteGroup = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //componentDidMount
  useEffect(() => {
    setData([
      { id: 1, title: "hola" },
      { id: 2, title: "chau" },
      { id: 3, title: "coso" },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <button
          className="notes-create-button"
          onClick={() => navigate(Path.noteCreation)}
        >
          +
        </button>
        <section className="notes-grid">
          {data.map((data) => {
            return <Note key={data.id} id={data.id} title={data.title}></Note>;
          })}
        </section>
      </main>
    </div>
  );
};

export default NoteGroup;
