import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import File from './components/File'
import Edit from './components/Edit'
import View from './components/View'
import Others from './components/Others'

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch all notes
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  };

  const createNote = async () => {
    try {
      const response = await axios.post('/api/notes', { title, content });
      setNotes([...notes, response.data]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Failed to create note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <div>
      <div class="div1"><h1 class="head"> InnovateME Novel MERN Stact Evaluation Tool</h1></div>
      <nav class="navbar">
  <ul class="navbar-nav">
    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="#">File</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Edit</a></li>
    <li class="nav-item"><a class="nav-link" href="#">View</a></li>
    <li class="nav-item"><a class="nav-link" href="#">Others</a></li>
  </ul>
</nav>

      <form onSubmit={createNote}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Save Novel</button>
      </form>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;