const Note = (props) => {
    if(props.text){
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
    return " "
}


export default Note