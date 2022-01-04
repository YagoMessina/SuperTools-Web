import React, { Component } from "react";
import Note from "./Note";
import Navbar from "../navbar/Navbar";

class NoteGroup extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const data = ["hola", "chau", "coso"];
    this.setState({ data });
  }

  render() {
    const data = this.state.data;
    return (
      <div>
        <Navbar />
        <main>
          <section className="notes-grid">
            {data.map((data) => {
              return <Note key={data} title={data}></Note>;
            })}
          </section>
        </main>
      </div>
    );
  }
}

export default NoteGroup;
