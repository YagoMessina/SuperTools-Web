import React from "react";
import "./File.css";

const File = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td className="file-td-center">{props.size}</td>
        <td
          className="file-td-center file-td-download"
          onClick={() => alert("hola")}
        >
          🡇
        </td>
      </tr>
    </tbody>
  );
};

export default File;
