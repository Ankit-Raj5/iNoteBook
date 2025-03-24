import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:3004";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY3MTQzMmFkY2JhOTY2MDQ2N2E0N2NhMCJ9LCJpYXQiOjE3NDI4NTA0ODgsImV4cCI6MTc0NDkyNDA4OH0.pQAaShGXNHgWvwnwUK3NYg591O5pWLwJnkPRJY0W2oE";

  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": auth_token // Use an environment variable for token
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }

      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": auth_token // Use an environment variable for token
        },
        body: JSON.stringify({ title, description, tag })
      });

      if (!response.ok) {
        throw new Error('Failed to add note');
      }

      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": auth_token // Use an environment variable for token
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete note');
      }

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    console.log("****************")
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": auth_token // Use an environment variable for token
        },
        body: JSON.stringify({ title, description, tag })
      });

      if (!response.ok) {
        throw new Error('Failed to edit note');
      }

      const json = await response.json();
      let newNotes = [...notes];
      for (let index = 0; index < newNotes.length; index++) {
        if (newNotes[index]._id === id) {
          newNotes[index] = { ...newNotes[index], title, description, tag };
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      console.error('Error editing note:', error);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
