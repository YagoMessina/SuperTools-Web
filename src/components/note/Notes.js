import React from "react";
import Note from "./Note";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { doGet } from "../../util/Http";
import Path from "../../util/Path";

const NoteGroup = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    doGet(
      "/api/note",
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
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
            return (
              <Note
                key={data.id}
                id={data.id}
                title={data.title}
                body={data.body}
                favourite={data.favourite}
              ></Note>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default NoteGroup;
