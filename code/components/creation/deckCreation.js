import { textParser } from "../../util/textParser";
import TextInput from "./textInput";
import Note from "../note";

class DeckCreation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes : [],
            text : ""
        }

        this.parseHandler = this.parseHandler.bind(this)
        this.noteChange = this.noteChange.bind(this)
    }


    parseHandler(text) {
        let tmp = textParser(text, " - ")//For now hard-code the split character

        this.setState({notes : tmp, text : text})
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

        console.log("Index: " + index)
        console.log("Front: " + text)
        
        

        this.setState({notes})
    }

    render(){
        return <>
            <TextInput callBack={this.parseHandler}/>
            {this.state.notes.map((note, index) => <Note {...note} index={index} callBack={this.noteChange}/>)}
        </>
    }
}

export default DeckCreation;