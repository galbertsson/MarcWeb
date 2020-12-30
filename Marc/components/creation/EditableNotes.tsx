import Note from "./Note";
import ClozeNote from "../../util/ClozeNote";
import BasicNote from "../../util/BasicNote";

interface EditableNotesProps {
    notes: (ClozeNote | BasicNote)[],
    deleteCallBack: (index: number) => void;
    changeCallBack: (index: number, note: ClozeNote | BasicNote) => void;
}

const EditableNotes = (props: EditableNotesProps): JSX.Element => {
    if (props.notes.length > 0) {
        return <>
            {
                props.notes.map((note, index) => <Note
                    key={index}
                    note={note}
                    index={index}
                    deleteCallBack={props.deleteCallBack}
                    changeCallBack={(note) => props.changeCallBack(index, note)} />
                )}
        </>
    } else {
        return <div></div>
    }
}

export default EditableNotes;