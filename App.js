import React, {useState} from 'react'
import Home from './src/screens/home'
import AddNote from "./src/screens/addNote.js"
import EditNote from "./src/screens/editNote.js"

const CurrentPageWidget = ({
  currentPage,
    noteList,
    setCurrentPage,
    addNote,
    updateNote,
    editNoteId,
    setEditNoteId,
    deleteNote
}) => {
  switch (currentPage) {
    case 'home':
      return (
      <Home
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      setEditNoteId={setEditNoteId}
      deleteNote={deleteNote}
      />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return (
      <EditNote
                setCurrentPage={setCurrentPage}
                noteList={noteList}
                updateNote={updateNote}
                noteId={editNoteId}
              />
      )
    default:
      return <Home />
  }
}


const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
    const [editNoteId, setEditNoteId] = useState(null)
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const addNote = (title, desc) => {
    const id =
      noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ])
  }

    const updateNote = (id, title, desc) => {
    setNoteList(
      noteList.map(note =>
        note.id === id ? { ...note, title: title, desc: desc } : note
      )
    )
    }

    const deleteNote = (id) => {
        setNoteList(noteList.filter(note => note.id !== id));
      };

  return (
      <CurrentPageWidget
        currentPage={currentPage}
        noteList={noteList}
        setCurrentPage={setCurrentPage}
        addNote={addNote}
        deleteNote={deleteNote}
        updateNote={updateNote}
        editNoteId={editNoteId}
        setEditNoteId={setEditNoteId}
      />
    );
}


export default App