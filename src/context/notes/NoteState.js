import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const allnotes = [
    {
      _id: "67180fcb96b90a019768d66b",
      user: "671432adcba9660467a47ca0",
      title: "2nd NOTE",
      description: "This is my Second note",
      tag: "PK",
      date: "2024-10-22T20:49:15.689Z",
      createdAt: "2024-10-22T20:49:15.694Z",
      updatedAt: "2024-10-22T20:49:15.694Z",
      __v: 0,
    },
    {
      _id: "67180fe696b90a019768d66d",
      user: "671432adcba9660467a47ca0",
      title: "3rd NOTE",
      description: "This is my Third  note",
      tag: "PKd",
      date: "2024-10-22T20:49:42.075Z",
      createdAt: "2024-10-22T20:49:42.076Z",
      updatedAt: "2024-10-22T20:49:42.076Z",
      __v: 0,
    },
    {
      _id: "67180fcb96b90a019768d66b",
      user: "671432adcba9660467a47ca0",
      title: "2nd NOTE",
      description: "This is my Second note",
      tag: "PK",
      date: "2024-10-22T20:49:15.689Z",
      createdAt: "2024-10-22T20:49:15.694Z",
      updatedAt: "2024-10-22T20:49:15.694Z",
      __v: 0,
    },
    {
      _id: "67180fe696b90a019768d66d",
      user: "671432adcba9660467a47ca0",
      title: "3rd NOTE",
      description: "This is my Third  note",
      tag: "PKd",
      date: "2024-10-22T20:49:42.075Z",
      createdAt: "2024-10-22T20:49:42.076Z",
      updatedAt: "2024-10-22T20:49:42.076Z",
      __v: 0,
    },
    {
      _id: "67180fcb96b90a019768d66b",
      user: "671432adcba9660467a47ca0",
      title: "2nd NOTE",
      description: "This is my Second note",
      tag: "PK",
      date: "2024-10-22T20:49:15.689Z",
      createdAt: "2024-10-22T20:49:15.694Z",
      updatedAt: "2024-10-22T20:49:15.694Z",
      __v: 0,
    },
    {
      _id: "67180fe696b90a019768d66d",
      user: "671432adcba9660467a47ca0",
      title: "3rd NOTE",
      description: "This is my Third  note",
      tag: "PKd",
      date: "2024-10-22T20:49:42.075Z",
      createdAt: "2024-10-22T20:49:42.076Z",
      updatedAt: "2024-10-22T20:49:42.076Z",
      __v: 0,
    },
    {
      _id: "67180fcb96b90a019768d66b",
      user: "671432adcba9660467a47ca0",
      title: "2nd NOTE",
      description: "This is my Second note",
      tag: "PK",
      date: "2024-10-22T20:49:15.689Z",
      createdAt: "2024-10-22T20:49:15.694Z",
      updatedAt: "2024-10-22T20:49:15.694Z",
      __v: 0,
    },
    {
      _id: "67180fe696b90a019768d66d",
      user: "671432adcba9660467a47ca0",
      title: "3rd NOTE",
      description: "This is my Third  note",
      tag: "PKd",
      date: "2024-10-22T20:49:42.075Z",
      createdAt: "2024-10-22T20:49:42.076Z",
      updatedAt: "2024-10-22T20:49:42.076Z",
      __v: 0,
    },
    {
      _id: "67180fcb96b90a019768d66b",
      user: "671432adcba9660467a47ca0",
      title: "2nd NOTE",
      description: "This is my Second note",
      tag: "PK",
      date: "2024-10-22T20:49:15.689Z",
      createdAt: "2024-10-22T20:49:15.694Z",
      updatedAt: "2024-10-22T20:49:15.694Z",
      __v: 0,
    },
    {
      _id: "67180fe696b90a019768d66d",
      user: "671432adcba9660467a47ca0",
      title: "3rd NOTE",
      description: "This is my Third  note",
      tag: "PKd",
      date: "2024-10-22T20:49:42.075Z",
      createdAt: "2024-10-22T20:49:42.076Z",
      updatedAt: "2024-10-22T20:49:42.076Z",
      __v: 0,
    },
    {
      _id: "67180fcb96b90a019768d66b",
      user: "671432adcba9660467a47ca0",
      title: "2nd NOTE",
      description: "This is my Second note",
      tag: "PK",
      date: "2024-10-22T20:49:15.689Z",
      createdAt: "2024-10-22T20:49:15.694Z",
      updatedAt: "2024-10-22T20:49:15.694Z",
      __v: 0,
    },
    {
      _id: "67180fe696b90a019768d66d",
      user: "671432adcba9660467a47ca0",
      title: "3rd NOTE",
      description: "This is my Third  note",
      tag: "PKd",
      date: "2024-10-22T20:49:42.075Z",
      createdAt: "2024-10-22T20:49:42.076Z",
      updatedAt: "2024-10-22T20:49:42.076Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(allnotes);

  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
