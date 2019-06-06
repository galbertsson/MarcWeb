import { textParser } from "../../util/textParser";
import TextInput from "./textInput";
import Note from "./note";

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
            notes[index].text = text
        }
        //If Basic note
        else{
            if(isFront){
                notes[index].front = text
            } else {
                notes[index].back = text
            }         
        }

        this.setState({notes})
    }

    newNote(type){
        let notes = this.state.notes.slice()

        if(type === "cloze"){
            notes.push({text : ""})
        }else if (type === "basic"){
            notes.push({front : "", back : ""})
        }
        
        this.setState({notes : notes})
    }

    render(){
        return <>
            <TextInput textCallBack={this.parseHandler} buttonCallBack={this.runParser}/>
            <button onClick={() => this.newNote("basic")}>Basic</button>
            <button onClick={() => this.newNote("cloze")}>Cloze</button>
            {this.state.notes.map((note, index) => <Note {...note} index={index} callBack={this.noteChange}/>)}
        </>
    }
}

export default DeckCreation;