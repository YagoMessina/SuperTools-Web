import React from "react";
import Note from "./Note";
import Navbar from "../navbar/Navbar";

const NoteGroup = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section class="notes-grid">
          <Note title="hola" />
        </section>
      </main>
    </div>
  );
};

export default NoteGroup;
