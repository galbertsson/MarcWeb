import BasicDeck from "./basicDeck";

const DeckPicker = ({decks}) => (
    decks.map(deck => <BasicDeck key={deck.id} deck={deck}/>)
)

export default DeckPicker