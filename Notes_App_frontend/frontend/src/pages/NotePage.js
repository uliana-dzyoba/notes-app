import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import {ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
  
  let { id } = useParams()
  let [note, setNote] = useState(null)

  const navigate = useNavigate();
  
  useEffect(() => {
    getNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}/`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async () => {
    fetch(`/api/notes/${id}/`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }
  
  let handleSubmit = () => {
    // console.log('NOTE:', note)
    updateNote()
    // if (id !== 'new' && note.body == '') {
    //   deleteNote()
    // } else if (id !== 'new') {
    //   updateNote()
    // } else if (id === 'new' && note.body !== null) {
    //   createNote()
    // }
    
    navigate('/')
  }

  return (
    <div className="note" >
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
      </div>
      <textarea onChange={(e) => { setNote({...note, 'body': e.target.value}) }} defaultValue={note?.body}></textarea>
    </div>

  )

}

export default NotePage