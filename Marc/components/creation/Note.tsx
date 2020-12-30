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
}

export default Note;