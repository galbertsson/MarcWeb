import React from 'react';
import { textParser } from '../../util/textParser';
import TextInput from './TextInput';
import ClozeNote from '../../util/ClozeNote';
import BasicNote from '../../util/BasicNote';
import EditableNotes from './EditableNotes';
import Deck from '../../util/Deck';
import { Button, TextField } from '@material-ui/core';
import SpeedDial from '../general/SpeedDial';
import SubHeader from '../shared/SubHeader';
import DeckImporter from './DeckImporter';

interface DeckCreationContainerProps {
  title?: string;
  notes?: Deck['notes'];
  callback: (title: string, notes: Deck['notes']) => void;
  context: 'create' | 'edit';
}

interface DeckCreationContainerState {
  notes: (BasicNote | ClozeNote)[];
  text: string;
  title: string;
  importerOpen: boolean;
}

class DeckCreationContainer extends React.Component<DeckCreationContainerProps, DeckCreationContainerState> {
  constructor(props: DeckCreationContainerProps) {
    super(props);

    this.state = {
      notes: props.notes ?? [],
      text: '',
      title: props.title ?? '',
      importerOpen: false,
    };
  }

  //TODO: Have a look at this, this is most likely a bad idea to start with
  componentDidUpdate(prevProps: DeckCreationContainerProps) {
    if (
      prevProps.notes &&
      prevProps.notes.length === 0 &&
      prevProps.title === '' &&
      this.props.title !== '' &&
      this.props.notes &&
      this.props.title
    ) {
      this.setState({ notes: this.props.notes, title: this.props.title });
    }
  }

  parseHandler(text: string) {
    this.setState({ text: text });
  }

  runParser() {
    let tmp = textParser(this.state.text, ' - '); //TODO: For now hard-code the split character

    this.setState({ notes: tmp });
  }

  noteChange(index: number, note: BasicNote | ClozeNote) {
    const newNotes = [...this.state.notes];
    newNotes[index] = note;
    this.setState({ notes: newNotes });
  }

  newNote(type: 'cloze' | 'basic') {
    let notes = this.state.notes.slice();

    if (type === 'cloze') {
      notes.push(new ClozeNote(''));
    } else if (type === 'basic') {
      notes.push(new BasicNote('', ''));
    }

    this.setState({ notes: notes });
  }

  removeNote(index: number) {
    const notes = this.state.notes.slice();
    notes.splice(index, 1);

    this.setState({ notes: notes });
  }

  createDeck() {
    // TODO: Just call decks.createDeck?
    this.props.callback(this.state.title, this.state.notes);
  }

  render() {
    const { context } = this.props;
    const { title, importerOpen } = this.state;

    const leftHeaderActions = [
      <TextField
        key="title"
        placeholder="Title"
        value={title}
        onChange={(e) => this.setState({ title: e.target.value })}
      />,
    ];

    const rightHeaderActions = [
      <Button
        key="import"
        variant="contained"
        color="primary"
        onClick={() => this.setState({ importerOpen: true })}
        style={{ marginRight: 5 }}
      >
        Import Data
      </Button>,
      <Button key="create" variant="contained" color="primary" onClick={() => this.createDeck()}>
        {context}
      </Button>,
    ];

    return (
      <>
        <SubHeader leftData={leftHeaderActions} rightData={rightHeaderActions} />
        <DeckImporter
          open={importerOpen}
          onParse={(notes) => this.setState({ notes, importerOpen: false })}
          onClose={() => this.setState({ importerOpen: false })}
        />
        <EditableNotes
          notes={this.state.notes}
          deleteCallBack={(index) => this.removeNote(index)}
          changeCallBack={(index, note) => this.noteChange(index, note)}
        />

        <SpeedDial
          options={[
            {
              text: 'Basic',
              icon: <span></span>,
              onClick: () => this.newNote('basic'),
            },
            {
              text: 'Close',
              icon: <span></span>,
              onClick: () => this.newNote('cloze'),
            },
          ]}
        />
      </>
    );
  }
}

export default DeckCreationContainer;
