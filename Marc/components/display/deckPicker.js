import React from 'react'
import BasicDeck from "./basicDeck";
import DeckTop from './deckTop';

const DeckPicker = ({decks}) => {
    
    return (
    <>
        <style jsx>{`
             #picker: {
                 display: flex;
                 background-color: green;
             }
        `}</style>
        <DeckTop />
        <div id="picker">
            {decks.map(deck => <BasicDeck key={deck.id} deck={deck}/>)}
        </div>
    </>
    )   
}

export default DeckPicker