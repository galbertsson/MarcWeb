
class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <>
            <textarea onChange={(e) => this.props.textCallBack(e.target.value)}></textarea>
            <button onClick={() => this.props.buttonCallBack()}>Import</button>
            </>
    }
}

export default TextInput;