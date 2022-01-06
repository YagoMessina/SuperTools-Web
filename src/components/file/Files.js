import React from "react";
import Navbar from "../navbar/Navbar";
import File from "./File";

const Files = () => {
  return (
    <div className="files">
      <Navbar />
      <main>
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
