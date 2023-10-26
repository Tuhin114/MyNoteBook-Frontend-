import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "6537867e1631c653ce670828",
      user: "65361f77a3f193c3dab2a36b",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-10-24T08:55:26.869Z",
      __v: 0,
    },
    {
      _id: "653786fc1631c653ce67082a",
      user: "65361f77a3f193c3dab2a36b",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-10-24T08:57:32.215Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
