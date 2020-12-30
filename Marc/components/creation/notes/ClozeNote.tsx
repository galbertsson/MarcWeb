import { TextField } from '@material-ui/core';
import React, { FC } from 'react'
import ClozeNoteType from '../../../util/ClozeNote'

interface ClozeNoteProps {
    note: ClozeNoteType;
    onChange: (note: ClozeNoteType) => void;
}

const ClozeNote: FC<ClozeNoteProps> = (props) => {
    const { note, onChange } = props;

    return (
        <div>
            <TextField value={note.text} onChange={(e) => onChange({ ...note, text: e.target.value })} />
        </div>
    )
}

export default ClozeNote;
