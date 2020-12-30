import { TextField } from '@material-ui/core';
import React, { FC } from 'react'
import BasicNoteType from '../../../util/BasicNote'

interface BasicNoteProps {
    note: BasicNoteType;
    onChange: (note: BasicNoteType) => void;
}

const BasicNote: FC<BasicNoteProps> = (props) => {
    const { note, onChange } = props;

    return (
        <div>
            <TextField value={note.front} onChange={(e) => onChange({ ...note, front: e.target.value })} />
            <TextField value={note.back} onChange={(e) => onChange({ ...note, back: e.target.value })} />
        </div>
    )
}

export default BasicNote;
