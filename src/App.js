import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Path from "./util/Path";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Notes from "./components/note/Notes";
import NoteDetail from "./components/note/NoteDetail";
import NoteCreation from "./components/note/NoteCreation";
import Files from "./components/file/Files";

import Truco from "./components/truco/Truco";

import { getJwt } from "./util/Jwt";

function App() {
  return (
    /*getJwt() === null ? (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
      </Routes>
    </BrowserRouter>
  ) : (*/
    <BrowserRouter>
      <Routes>
        <Route path={Path.home} element={<Home />} />
        <Route path={Path.notes} element={<Notes />} />
        <Route path={Path.files} element={<Files />} />
        <Route path={Path.noteCreation} element={<NoteCreation />} />
        <Route path={Path.note + "/:id"} element={<NoteDetail />} />

        <Route path="/truco" element={<Truco />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
