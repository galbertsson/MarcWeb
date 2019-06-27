import Note from "./note";

const EditableNotes = (props) => {
    if(props.notes.length > 0){
        return props.notes.map((note, index) => <Note key={index} note={note} index={index} deleteCallBack={props.deleteCallBack} changeCallBack={props.changeCallBack}/>)
    }else {
        return <></>
    }
}

export default EditableNotes;