import React from 'react'
import BasicDeck from "./BasicDeck";
import DeckTop from './DeckTop';
import Deck from '../../util/Deck';
import { createStyles } from '@material-ui/core';

const styles = createStyles({
    picker: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }
});

interface DeckPickerProps {
    decks: Deck[]
}

const DeckPicker = ({ decks }: DeckPickerProps) => {
    return (
        <div>
            <DeckTop />
            <div className="picker">
                {decks.map(deck => <BasicDeck key={deck._id} deck={deck} />)}
            </div>
        </div>
    )
}

export default DeckPicker