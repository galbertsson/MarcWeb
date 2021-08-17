import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { ClozeNote as ClozeNoteType } from '../../../util/Notes/ClozeNote';

interface ClozeNoteProps {
  note: ClozeNoteType;
  onChange: (note: ClozeNoteType) => void;
}

const ClozeNote: FC<ClozeNoteProps> = (props) => {
  const { note, onChange } = props;

  const localOnChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...note, text: event.target.value });
  }, 150);

  return (
    <div>
      <TextField defaultValue={note.text} onChange={localOnChange} multiline rows={3} variant="outlined" fullWidth />
    </div>
  );
};

export default ClozeNote;
