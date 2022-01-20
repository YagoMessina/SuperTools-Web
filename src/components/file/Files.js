import React, { useRef } from "react";
import Navbar from "../navbar/Navbar";
import File from "./File";

import { doPost } from "../../util/Http";

const Files = () => {
  const file = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    doPost(
      "/api/file",
      {
        file: "hola",
      },
      (response) => {
        alert("peola");
      },
      (error) => alert(error)
    );
  };

  return (
    <div className="files">
      <Navbar />
      <main>
        <form onSubmit={handleSubmit}>
          <input type="file" ref={file} />
          <input type="submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th width="20%">Size</th>
              <th width="10%"></th>
            </tr>
          </thead>
          <File name="File" size="23MB"></File>
          <File name="File" size="23MB"></File>
          <File name="File" size="23MB"></File>
        </table>
      </main>
    </div>
  );
};

export default Files;
