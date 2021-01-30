import ClozeNoteType from "../../util/ClozeNote"
import BasicNoteType from "../../util/BasicNote"
import { makeStyles, Paper } from '@material-ui/core'
import React, { FC } from 'react'
import BasicNote from './notes/BasicNote'
import ClozeNote from './notes/ClozeNote'

const useStyles = makeStyles({
    paper: {
        flex: 1,
        height: 100,
        maxWidth: 300,
        minWidth: 250,
        margin: 5,
        padding: 5
    }
});

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
    const classes = useStyles();

    return <Paper className={classes.paper}>
        {renderNote(note, changeCallBack)}
    </Paper>
}

export default Note;