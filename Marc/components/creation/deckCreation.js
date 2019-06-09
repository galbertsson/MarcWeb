import { textParser } from "../../util/textParser";
import TextInput from "./textInput";
import Note from "./note";
import ClozeNote from "../../util/ClozeNote";
import BasicNote from "../../util/BasicNote";

class DeckCreation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes : [],
            text : ""
        }

        this.parseHandler = this.parseHandler.bind(this)
        this.noteChange = this.noteChange.bind(this)
        this.runParser = this.runParser.bind(this)
    }


    parseHandler(text) {
        this.setState({text : text})
    }

    runParser(){
        let tmp = textParser(this.state.text, " - ")//For now hard-code the split character

        this.setState({notes : tmp})
    }

    noteChange(index, text, isFront){
        const notes = this.state.notes.slice()
        
        //Check if cloze note
        if(notes[index].text){
            notes[index].properties.text = text
        }
        //If Basic note
        else{
            if(isFront){
                notes[index].properties.front = text
            } else {
                notes[index].properties.back = text
            }
        }

        this.setState({notes})
    }

    newNote(type){
        let notes = this.state.notes.slice()

        if(type === "cloze"){
            notes.push(new ClozeNote(""))
        }else if (type === "basic"){
            notes.push(new BasicNote("",""))
        }
        
        this.setState({notes : notes})
    }

    render(){
        return <>
            <TextInput textCallBack={this.parseHandler} buttonCallBack={this.runParser}/>
            <button onClick={() => this.newNote("basic")}>Basic</button>
            <button onClick={() => this.newNote("cloze")}>Cloze</button>
            {this.state.notes.map((note, index) => <Note note={note} index={index} callBack={this.noteChange}/>)}
        </>
    }
}

export default DeckCreation;