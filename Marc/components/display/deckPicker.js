import React from 'react'
import BasicDeck from "./basicDeck";
import DeckTop from './deckTop';

const DeckPicker = ({decks}) => {
    
    return (
    <>
        <style jsx>{`
            #picker {
                
            }    
        `}</style>
        <DeckTop />
        <div className="col-md-12 row d-flex flex-wrap justify-content-center align-content-start">
            {decks.map(deck => <BasicDeck key={deck.id} deck={deck}/>)}
        </div>
    </>
    )   
}

export default DeckPicker