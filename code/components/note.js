const Note = (note) => {
    console.log(note)
    if(note.text){
        return <div>
            Cloze Note:
            {note.text}
        </div>
    } else if(note.front && note.back){
        return <div>
            Basic Note:
            {note.front}
            -
            {note.back}
        </div>
    }
    return " "
}


export default Note