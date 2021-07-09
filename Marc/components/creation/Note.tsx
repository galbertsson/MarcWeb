import ClozeNoteType from '../../util/Notes/ClozeNote';
import BasicNoteType from '../../util/Notes/BasicNote';
import { makeStyles, Paper, IconButton } from '@material-ui/core';
import React, { FC } from 'react';
import BasicNote from './notes/BasicNote';
import ClozeNote from './notes/ClozeNote';
import DeleteIcon from '@material-ui/icons/Delete';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  paper: {
    flex: 1,
    height: 100,
    maxWidth: 300,
    minWidth: 250,
    margin: 5,
    padding: 5,
    position: 'relative',
  },
  delete: {
    color: 'white',
    position: 'absolute',
    top: -3,
    right: -3,
    zIndex: 99,
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[900],
    },
  },
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
      return <ClozeNote note={note} onChange={cb} />;
    case 'basicNote':
      return <BasicNote note={note} onChange={cb} />;
  }
};

const Note: FC<NoteProps> = (props) => {
  const { note, changeCallBack, deleteCallBack, index } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <IconButton onClick={() => deleteCallBack(index)} className={classes.delete} size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
      {renderNote(note, changeCallBack)}
    </Paper>
  );
};

export default Note;
