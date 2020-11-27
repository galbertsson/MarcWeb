import React from 'react';
import DeckCreationContainer from '../components/creation/DeckCreationContainer';
import ClozeNote from '../util/ClozeNote';
import BasicNote from '../util/BasicNote';
import { createDeck } from '../services/deck/Deck';

interface CreateProps {

}

/**
  * @param {string} title The title of the deck being created
  * @param {Array} notes The notes in the deck
  */
const callback = (title: string, notes: (ClozeNote | BasicNote)[]) => {
  createDeck(title, notes);

  /* this.props.user.getIdToken().then((token) =>
    fetch("http://localhost:8080/decks/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: title,
        notes: notes
      })
    })) */
}


const create = (props: CreateProps) => {
  return (
    <>
      <style jsx>{`
       .style{
         color: green;
       }
       `}
      </style>

      <div>
        <DeckCreationContainer callback={(title, notes) => callback(title, notes)} />
      </div>
    </>
  )
}

export default create
