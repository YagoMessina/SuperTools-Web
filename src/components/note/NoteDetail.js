import React from "react";
import "./NoteDetail.css";
import Navbar from "../navbar/Navbar";

const NoteDetail = (props) => {
  const id = window.location.href.split("/")[4];
  console.log(id);
  return (
    <div>
      <Navbar />
      <main className="note-detail">
        <h1>{id}</h1>
      </main>
    </div>
  );
};

export default NoteDetail;
