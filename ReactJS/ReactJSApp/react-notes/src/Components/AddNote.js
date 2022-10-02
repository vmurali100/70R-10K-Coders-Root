import React,{useState} from 'react'

export const AddNote = ({handleaddNote}) => {
    const [noteText, setnoteText] = useState("");
    const charLimit = 200;

    const handleChange=(event)=>{
        if(charLimit-event.target.value.length >=0){
            setnoteText(event.target.value)
        }
       
    }

    const handleSaveClick=()=>{
        if(noteText.trim().length >0){
            handleaddNote(noteText)
            setnoteText("")
        }        
    }
  return (
    <div className='note new'>
        <textarea
        rows={8}
        cols={10}
        value={noteText}
        onChange={handleChange}
        placeholder="Type to add a note..."></textarea>

        <div className='note-footer'>
            <span>{charLimit-noteText.length} remaining</span>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}
