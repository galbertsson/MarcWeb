const Note = (props) => {

    if(props.note.type === "ClozeNote"){
        return <div>
            Cloze Note:
            <textarea value={props.note.text} onChange={(e) => props.changeCallBack(props.index, e.target.value)}></textarea>
            <button onClick={(e) => props.deleteCallBack(props.index)}>Delete</button>
        </div>
    } else if(props.note.type === "BasicNote"){
        return <div>
            Basic Note:
            <textarea value={props.note.front} onChange={(e) => props.changeCallBack(props.index, e.target.value, true)}></textarea>
            <textarea value={props.note.back} onChange={(e) => props.changeCallBack(props.index, e.target.value, false)}></textarea>
            <button onClick={(e) => props.deleteCallBack(props.index)}>Delete</button>
        </div>
    }
    return `Apologies, but the note number ${props.index} seems to be invalid!`
}

export default Note