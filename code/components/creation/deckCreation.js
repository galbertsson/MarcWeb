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
    }


    parseHandler(text) {
        let tmp = textParser(text, " - ")//For now hard-code the split character

        this.setState({notes : tmp, text : text})
    }

    render(){
        return <>
            <TextInput callBack={this.parseHandler}/>
            {this.state.notes.map(note => <Note {...note}/>)}

        </>
    }
}

export default DeckCreation;