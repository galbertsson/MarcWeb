const Note = (props) => {
    //TODO: This needs to get changed to take care of new structure of the Notes

    if(props.text !== undefined){
        return <div>
            Cloze Note:
            <textarea value={props.text} onChange={(e) => props.callBack(props.index, e.target.value)}></textarea>
        </div>
    } else if(props.front !== undefined && props.back !== undefined){
        return <div>
            Basic Note:
            <textarea value={props.front} onChange={(e) => props.callBack(props.index, e.target.value, true)}></textarea>
            <textarea value={props.back} onChange={(e) => props.callBack(props.index, e.target.value, false)}></textarea>
        </div>
    }
    return `Apologies, but the note number ${props.index} seems to be invalid!`
}

export default Note