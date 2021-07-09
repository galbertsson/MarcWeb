import Note from './Note';
import ClozeNote from '../../util/Notes/ClozeNote';
import BasicNote from '../../util/Notes/BasicNote';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface EditableNotesProps {
  notes: (ClozeNote | BasicNote)[];
  deleteCallBack: (index: number) => void;
  changeCallBack: (index: number, note: ClozeNote | BasicNote) => void;
}

const EditableNotes = (props: EditableNotesProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {props.notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          index={index}
          deleteCallBack={props.deleteCallBack}
          changeCallBack={(note) => props.changeCallBack(index, note)}
        />
      ))}
    </div>
  );
};

export default EditableNotes;
