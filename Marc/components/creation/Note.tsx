import ClozeNoteType from "../../util/ClozeNote"
import BasicNoteType from "../../util/BasicNote"
import { Paper } from '@material-ui/core'
import React, { FC } from 'react'
import BasicNote from './notes/BasicNote'
import ClozeNote from './notes/ClozeNote'

interface NoteProps {
    index: number;
    note: ClozeNoteType | BasicNoteType;
    deleteCallBack: (index: number) => void;
    changeCallBack: (note: ClozeNoteType | BasicNoteType) => void;
}

const renderNote = (note: BasicNoteType | ClozeNoteType, cb: NoteProps['changeCallBack']) => {
    switch (note.type) {
        case 'clozeNote':
            return <ClozeNote note={note} onChange={cb} />
        case 'basicNote':
            return <BasicNote note={note} onChange={cb}/>
    }
}

const Note: FC<NoteProps> = (props) => {
    const { note, changeCallBack } = props;
    return <Paper>
        {renderNote(note, changeCallBack)}
    </Paper>


    //TODO: Fix in a better way
/*     if (props.note.type === "clozeNote") {
        return <div>
            Cloze Note:
            <textarea
                value={(props.note as ClozeNote).text}
                onChange={(e) => {
                    console.log('Change!')
                    props.changeCallBack(props.index, e.target.value)
                }}
            />
            <Button onClick={(e) => props.deleteCallBack(props.index)}>Delete</Button>
        </div>
    } else if (props.note.type === "basicNote") {
        return <div>
            Basic Note:
            <textarea value={(props.note as BasicNote).front} onChange={(e) => {
                console.log('chbage!')
                console.log(e.target.value);
                props.changeCallBack(props.index, e.target.value, true)

            }
            }></textarea>
            <textarea value={(props.note as BasicNote).back} onChange={(e) => props.changeCallBack(props.index, e.target.value, false)}></textarea>
            <Button onClick={(e) => props.deleteCallBack(props.index)}>Delete</Button>
        </div>
    } */
    return <div>{`Apologies, but the note number ${props.index} seems to be invalid!`}</div>
}

export default Note;