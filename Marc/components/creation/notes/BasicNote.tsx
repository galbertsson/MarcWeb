import { Divider, makeStyles, TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { BasicNote as BasicNoteType } from '../../../util/Notes/BasicNote';

const useStyles = makeStyles({
  fieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
  },
});

interface BasicNoteProps {
  note: BasicNoteType;
  onChange: (note: BasicNoteType) => void;
}

const BasicNote: FC<BasicNoteProps> = (props) => {
  const { note, onChange } = props;
  const classes = useStyles();

  const onFrontChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...note, front: event.target.value });
  }, 150);

  const onBackChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...note, back: event.target.value });
  }, 150);

  return (
    <div className={classes.fieldWrapper}>
      <TextField defaultValue={note.front} onChange={onFrontChange} placeholder="Front" />
      <Divider />
      <TextField defaultValue={note.back} onChange={onBackChange} placeholder="Back" />
    </div>
  );
};

export default BasicNote;
