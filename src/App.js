import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Path from "./util/Path";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Notes from "./components/note/Notes";

function App() {
  const [user, setUser] = useState("");
  return (
    /*user === "" ? (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  ) : */ <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path={Path.notes} element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
