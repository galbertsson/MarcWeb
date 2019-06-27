import React from 'react';
import DeckCreationContainer from '../components/creation/deckCreationContainer';



export default () => (
  <>
    <style jsx>{`
      .style{
        color: green;
      }
      `}
    </style>

  <div>
      <DeckCreationContainer callback={callback}/>
  </div>
  </>
);

/**
 * TODO: Once this is connected to some backend this is where things needs to get sent of
 * 
 * @param {string} title The title of the deck being created
 * @param {Array} notes The notes in the deck
 */
const callback = (title, notes) => {
  console.log("Deck done")
  console.log(title)
  console.log(notes)
}
