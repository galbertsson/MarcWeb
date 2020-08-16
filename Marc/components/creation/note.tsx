import ClozeNote from "../../util/ClozeNote"
import BasicNote from "../../util/BasicNote"

interface NoteProps {
    index: number;
    note: ClozeNote | BasicNote;
    deleteCallBack: (index: number) => void;
    changeCallBack: (index: number, value: string, isFront?: boolean) => void;
}

const Note = (props: NoteProps): JSX.Element => {
    //TODO: Fix in a better way
    if (props.note.type === "ClozeNote") {
        return <div>
            Cloze Note:
            <textarea
                value={(props.note as ClozeNote).text} 
                onChange={(e) => {
                    console.log('Change!')
                    props.changeCallBack(props.index, e.target.value)
                }} 
            />
            <button onClick={(e) => props.deleteCallBack(props.index)}>Delete</button>
        </div>
    } else if (props.note.type === "BasicNote") {
        return <div>
            Basic Note:
            <textarea value={(props.note as BasicNote).front} onChange={(e) => {
                console.log('chbage!')
                console.log(e.target.value);
                props.changeCallBack(props.index, e.target.value, true)
                
            }
                }></textarea>
            <textarea value={(props.note as BasicNote).back} onChange={(e) => props.changeCallBack(props.index, e.target.value, false)}></textarea>
            <button onClick={(e) => props.deleteCallBack(props.index)}>Delete</button>
        </div>
    }
    return <div>{`Apologies, but the note number ${props.index} seems to be invalid!`}</div>
}

export default Note;