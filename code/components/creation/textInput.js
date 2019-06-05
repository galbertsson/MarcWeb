
class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <textarea onChange={(e) => this.props.callBack(e.target.value)}></textarea>
    }
}

export default TextInput;