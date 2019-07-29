import React, {Component} from 'react';
import DeckCreationContainer from '../components/creation/deckCreationContainer';

export default class Create extends Component {

constructor(data){
  super(data)

  this.callback = this.callback.bind(this)
}

/**
 * @param {string} title The title of the deck being created
 * @param {Array} notes The notes in the deck
 */
callback(title, notes){
  this.props.user.getIdToken().then((token) => 
  fetch("http://localhost:8080/decks/create", {
    method : 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      title : title,
      notes : notes
    })
  }))
  .then(() => console.log("Got it!"))
}
  
  render() {
    return (
      <>
      <style jsx>{`
        .style{
          color: green;
        }
        `}
      </style>
  
    <div>
        <DeckCreationContainer callback={this.callback}/>
    </div>
    </>
    )
  }
}