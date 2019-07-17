import React from 'react';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router'
import DeckPicker from '../components/display/deckPicker';

class Edit extends React.Component {

    constructor(props){
        super(props)
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
            <DeckPicker decks={this.props.data} />
        </div>
    </>
    }

    static async getInitialProps(){
        const res = await fetch(`http://localhost:8080/decks/basic`);
        const data = await res.json();
      
        return {
          data
        };
    };
}

export default withRouter(Edit);

