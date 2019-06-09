const Note = (props) => {

    if(props.note.type === "ClozeNote"){
        return <div>
            Cloze Note:
            <textarea value={props.note.properties.text} onChange={(e) => props.callBack(props.index, e.target.value)}></textarea>
        </div>
    } else if(props.note.type === "BasicNote"){
        return <div>
            Basic Note:
            <textarea value={props.note.properties.front} onChange={(e) => props.callBack(props.index, e.target.value, true)}></textarea>
            <textarea value={props.note.properties.back} onChange={(e) => props.callBack(props.index, e.target.value, false)}></textarea>
        </div>
    }
    return `Apologies, but the note number ${props.index} seems to be invalid!`
}

export default Note