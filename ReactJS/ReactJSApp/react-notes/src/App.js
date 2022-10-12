import NotesList from "./Components/NotesList";
import {useEffect, useState} from 'react'
import {nanoid} from 'nanoid'
import Search from "./Components/Search";
import Header from "./Components/Header";


function App() {
  const [notes, setnotes] = useState([
    {id:nanoid(),
      text:"This is my first note",
      date:"1/10/2022",
     },
     {id:nanoid(),
      text:"This is my second note",
      date:"10/10/2022",
     },
     {id:nanoid(),
      text:"This is my third note",
      date:"11/10/2022",
     },
     {id:nanoid(),
      text:"This is my last note",
      date:"15/10/2022",
     },
  ])

  const [searchText, setsearchText] = useState("");

  const [darkMode,setdarkMode] = useState(false);

  useEffect(()=>{
    localStorage.setItem("react-notes-data",JSON.stringify(notes))
  },[notes])

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data')
    );
    if(savedNotes){
      setnotes(savedNotes)
    }
  },[]);

 

  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote]
    setnotes(newNotes)
  }

  const deleteNote=(id)=>{
    const newNotes = notes.filter((note)=> note.id !== id)
    setnotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleMode={setdarkMode}/>
      <Search handleSearchNote = {setsearchText}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleaddNote={addNote}
      handleDeleteNote={deleteNote}/>
     
    </div>

    </div>

    
  );
}

export default App;
