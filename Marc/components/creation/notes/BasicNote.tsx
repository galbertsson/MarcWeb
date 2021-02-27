import { Divider, makeStyles, TextField } from '@material-ui/core';
import React, { FC } from 'react'
import BasicNoteType from '../../../util/BasicNote'

const useStyles = makeStyles({
    fieldWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '100%'
    }
});

interface BasicNoteProps {
    note: BasicNoteType;
    onChange: (note: BasicNoteType) => void;
}

const BasicNote: FC<BasicNoteProps> = (props) => {
    const { note, onChange } = props;
    const classes = useStyles();

    return (
        <div className={classes.fieldWrapper}>
            <TextField value={note.front} onChange={(e) => onChange({ ...note, front: e.target.value })} placeholder='Front' />
            <Divider />
            <TextField value={note.back} onChange={(e) => onChange({ ...note, back: e.target.value })} placeholder='Back' />
        </div>
    )
}

export default BasicNote;
