import React from 'react'
import BasicDeck from "./basicDeck";
import DeckTop from './deckTop';

const DeckPicker = ({decks}) => {
    
    return (
    <div>
        <style jsx>{`
             .picker{
                 display: flex;
                 flex-wrap: wrap;
                 justify-content: space-evenly
             }
        `}</style>
        <DeckTop />
        <div className="picker">
            {decks.map(deck => <BasicDeck key={deck.id} deck={deck}/>)}
        </div>
    </div>
    )   
}

export default DeckPicker