import { textParser } from "../../util/textParser";
import TextInput from "./textInput";
import ClozeNote from "../../util/ClozeNote";
import BasicNote from "../../util/BasicNote";

import CreateButton from "./createButton";
import EditableNotes from "./editableNotes";
import CreateNewNote from "./createNewNote";
import TitleInput from "./titleInput";

class DeckCreationContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: (props.notes ? props.notes : []), //Get the supplied notes if there are any
            text: "",
            title: (props.title ? props.title : "") //Get the supplied title if there is any
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.notes && prevProps.notes.length === 0 && prevProps.title === "" && this.props.title !== "") {
            this.setState({ notes: this.props.notes, title: this.props.title })
        }
    }

    parseHandler(text) {
        this.setState({ text: text })
    }

    runParser() {
        let tmp = textParser(this.state.text, " - ")//TODO: For now hard-code the split character

        this.setState({ notes: tmp })
    }

    noteChange(index, text, isFront) {
        //Check if cloze note
        /* if (this.state.notes[index].text !== undefined) {
            const notes = update(this.state.notes, {
                [index]: {
                    text: { $set: text }
                }
            })

            this.setState({ notes })
        }
        //If Basic note
        else {
            const property = isFront ? "front" : "back"

            const notes = update(this.state.notes, {
                [index]: {
                    [property]: { $set: text }
                }
            })

            this.setState({ notes })
        } */
    }

    newNote(type) {
        let notes = this.state.notes.slice()

        if (type === "cloze") {
            notes.push(new ClozeNote(""))
        } else if (type === "basic") {
            notes.push(new BasicNote("", ""))
        }

        this.setState({ notes: notes })
    }

    removeNote(index) {
        const notes = this.state.notes.slice()
        notes.splice(index, 1)

        this.setState({ notes: notes })
    }

    createDeck() {
        this.props.callback(this.state.title, this.state.notes)
    }

    render() {
        return <>
            <TextInput textCallBack={() => this.parseHandler} buttonCallBack={() => this.runParser()} />
            <TitleInput title={this.state.title} titleCallback={(title) => this.setState({ title: title })} />
            <CreateNewNote newNoteCallback={(note) => this.newNote(note)} />
            <EditableNotes notes={this.state.notes} deleteCallBack={(index) => this.removeNote(index)} changeCallBack={() => this.noteChange} />
            <CreateButton callback={() => this.createDeck} />
        </>
    }
}

export default DeckCreationContainer;