import React from 'react'
import BasicDeck from "./basicDeck";

const DeckPicker = ({decks}) => {
    
    return (
    <div id="picker" className="row d-flex flex-wrap justify-content-center align-content-start col-md-12">
        <style jsx>{`
            #picker {
                margin-top: 20px;
            }    
        `}</style>
        {decks.map(deck => <BasicDeck key={deck.id} deck={deck}/>)}
    </div>
    )   
}

export default DeckPicker