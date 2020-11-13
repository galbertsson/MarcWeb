import React from 'react';
import { withRouter, Router } from 'next/router'
import DeckPicker from '../components/display/deckPicker';
import Colors from '../util/colors'
import User from '../util/User';
import Deck from '../util/Deck';
import { getDecks } from '../services/deck/Deck';

interface DeckProps {
  router: Router;
  user: User;
}

interface DeckState {
  decks: Deck[]
};

class Decks extends React.Component<DeckProps, DeckState> {

  constructor(props: DeckProps) {
    super(props)
    this.state = {
      decks: []
    }
  }

  componentDidMount() {
    console.log('Going to get decks!');
    getDecks((decks) => this.setState({decks: decks ?? []}))
  }

  render() {
    return <>
      <style jsx>{`
        .root{
            background-color: ${Colors.backgroundColor};
            min-height: 100vh;
        }
        `}
      </style>

      <div className="root">
        <DeckPicker decks={this.state.decks} />
      </div>
    </>
  }
}

export default withRouter(Decks);