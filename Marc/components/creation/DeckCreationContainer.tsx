import React from 'react';
import { textParser } from "../../util/textParser";
import TextInput from "./TextInput";
import ClozeNote from "../../util/ClozeNote";
import BasicNote from "../../util/BasicNote";
import EditableNotes from "./EditableNotes";
import CreateNewNote from "./CreateNewNote";
import TitleInput from "./TitleInput";
import Deck from '../../util/Deck';
import { Button } from '@material-ui/core';

interface DeckCreationContainerProps {
    title?: string;
    notes?: Deck['notes'];
    callback: (title: string, notes: Deck['notes']) => void;
}

interface DeckCreationContainerState {
    notes: (BasicNote | ClozeNote)[];
    text: string;
    title: string;
}

class DeckCreationContainer extends React.Component<DeckCreationContainerProps, DeckCreationContainerState> {

    constructor(props: DeckCreationContainerProps) {
        super(props);

        this.state = {
            notes: props.notes ?? [],
            text: '',
            title: props.title ?? ''
        }
    }

    //TODO: Have a look at this, this is most likely a bad idea to start with
    componentDidUpdate(prevProps: DeckCreationContainerProps) {
        if (prevProps.notes && prevProps.notes.length === 0 && prevProps.title === "" && this.props.title !== "" && this.props.notes && this.props.title) {
            this.setState({ notes: this.props.notes, title: this.props.title })
        }
    }

    parseHandler(text: string) {
        this.setState({ text: text })
    }

    runParser() {
        let tmp = textParser(this.state.text, " - ")//TODO: For now hard-code the split character

        this.setState({ notes: tmp })
    }

    noteChange(index: number, text: string, isFront?: boolean) {
        const newNotes = [...this.state.notes];
        const newNote = newNotes[index];

        if (newNote.type === 'basicNote') {
            const property = isFront ? 'front' : 'back'
            newNote[property] = text;
        } else if (newNote.type === 'clozeNote') {
            newNote.text = text;
        }

        newNotes[index] = newNote;
        this.setState({ notes: newNotes });
    }

    newNote(type: string) {
        let notes = this.state.notes.slice()

        if (type === "cloze") {
            notes.push(new ClozeNote(""))
        } else if (type === "basic") {
            notes.push(new BasicNote("", ""))
        }

        this.setState({ notes: notes })
    }

    removeNote(index: number) {
        const notes = this.state.notes.slice()
        notes.splice(index, 1)

        this.setState({ notes: notes })
    }

    createDeck() {
        // TODO: Just call decks.createDeck?
        this.props.callback(this.state.title, this.state.notes);
    }

    render() {
        return <>
            <TextInput textCallBack={() => this.parseHandler} buttonCallBack={() => this.runParser()} />
            <TitleInput title={this.state.title} titleCallback={(title) => this.setState({ title: title })} />
            <CreateNewNote newNoteCallback={(type: string) => this.newNote(type)} />
            <EditableNotes
                notes={this.state.notes}
                deleteCallBack={(index: number) => this.removeNote(index)}
                changeCallBack={(index, text, isFront) => this.noteChange(index, text, isFront)} />
            <Button variant='contained' color='primary' onClick={() => this.createDeck()}>Create</Button>
        </>
    }
}

export default DeckCreationContainer;