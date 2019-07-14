import React from 'react';
import DeckCreationContainer from '../components/creation/deckCreationContainer';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router'

class Edit extends React.Component {

    constructor(props){
        super(props)
        console.log(props.data.id)

        this.callback = this.callback.bind(this)
    }

    /**
     * @param {string} title The title of the deck being created
     * @param {Array} notes The notes in the deck
     */
    callback = (title, notes) => {
        fetch("http://localhost:8080/decks/edit", {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({
            id : this.props.data.id,
            title : title,
            notes : notes})
        }).then(() => console.log("Got it!"))
    }

    render(){
    return <>
        <style jsx>{`
        .style{
            color: green;
        }
        `}
        </style>

        <div>
            <p>aaa</p>
            <DeckCreationContainer title={this.props.data.title} notes={this.props.data.notes} callback={this.callback}/>
        </div>
    </>
    }

    static async getInitialProps(context){
        const res = await fetch(`http://localhost:8080/decks/${context.query.id}`);
        const data = await res.json();
      
        return {
          data
        };
    };
}

export default withRouter(Edit);

