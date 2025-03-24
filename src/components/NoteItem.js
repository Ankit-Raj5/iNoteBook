import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  if (!note) return null; // Prevents rendering if note is undefined

  return (
    <div className="col-md-3 my-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title || "Untitled"}</h5>
          <p className="card-text">
            {note.description || "No description available"}
          </p>
          <i
            className="fa-solid fa-trash-can mx-2"
            onClick={() => deleteNote(note._id)}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              console.log("Update button clicked", note);
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
