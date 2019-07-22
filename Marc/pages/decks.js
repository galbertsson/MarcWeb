import React from 'react';
import fetch from 'isomorphic-unfetch';
import { withRouter } from 'next/router'
import DeckPicker from '../components/display/deckPicker';

class Decks extends React.Component {

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

    checkStatus(response) {
        if (response.ok) {
            console.log("Things look good!")
          return response;
        } else {
            console.log("Something broken!")
          var error = new Error(response.statusText);
          error.response = response;
          return Promise.reject(error);
        }
      }

    static async getInitialProps(){
        const res = await fetch(`http://localhost:8080/decks/basic`)
        const data = await res.json();
      
        return {
          data
        };
    };
}

export default withRouter(Decks);