import { textParser } from "../../util/textParser";
import TextInput from "./textInput";
import Note from "./note";
import ClozeNote from "../../util/ClozeNote";
import BasicNote from "../../util/BasicNote";

import update from 'immutability-helper';

class DeckCreation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes : [],
            text : "",
            title : ""
        }

        this.parseHandler = this.parseHandler.bind(this)
        this.noteChange = this.noteChange.bind(this)
        this.runParser = this.runParser.bind(this)
        this.removeNote = this.removeNote.bind(this)
    }


    parseHandler(text) {
        this.setState({text : text})
    }

    runParser(){
        let tmp = textParser(this.state.text, " - ")//For now hard-code the split character

        this.setState({notes : tmp})
    }

    noteChange(index, text, isFront){
        //Check if cloze note
        if(this.state.notes[index].properties.text !== undefined){
            const notes = update(this.state.notes, {
                    [index] : {
                        properties : {
                            text : {$set : text}
                        }
                    }
            })

            this.setState({notes})
        }
        //If Basic note
        else{
            const property = isFront ? "front" : "back"

            const notes = update(this.state.notes, {
                [index] : {
                    properties : {
                        [property] : {$set : text}
                    }
                }
            })
            
            this.setState({notes})
        }
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

    removeNote(index){        
        const notes = this.state.notes.slice()
        notes.splice(index, 1)
        
        this.setState({notes : notes})
    }

    render(){
        return <>
            <TextInput textCallBack={this.parseHandler} buttonCallBack={this.runParser}/>
            <input type="text" onChange={e => this.setState({title : e.target.value})}></input>
            <button onClick={() => this.newNote("basic")}>Basic</button>
            <button onClick={() => this.newNote("cloze")}>Cloze</button>
            {this.state.notes.map((note, index) => <Note key={index} note={note} index={index} deleteCallBack={this.removeNote} changeCallBack={this.noteChange}/>)}
            <button onClick={() => this.props.callback(this.state.title, this.state.notes)}>Create</button>
        </>
    }
}

export default DeckCreation;