import React from 'react';
import { withRouter, Router } from 'next/router'
import DeckPicker from '../components/display/deckPicker';
import Colors from '../util/colors'
import User from '../util/User';
import Deck from '../util/Deck';

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

  fetchDecks() {
    /* return new Promise((resolve, reject) =>{
      this.props.user.getIdToken()
      .then((token) => fetch("http://localhost:8080/decks/basic", {
        method : 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }))
      .then((res) => res.json())
      .then((data) => resolve(data))
    }) */
  }

  componentDidMount() {
    if (this.props.user) {
      /* this.fetchDecks()
        .then((jsonRes) => this.setState({ decks: jsonRes })) */
    }
  }

  /* componentDidUpdate(prevProps) {
    if (this.props.user && !prevProps.user) {
      this.fetchDecks()
        .then((jsonRes) => this.setState({ decks: jsonRes }))
    }
  } */

  render() {
    let testDecks =
      [
        { title: "T1", notes: [], id: '1' },
        { title: "T2", notes: [], id: '2' },
        { title: "T3", notes: [], id: '3' },
        { title: "T4", notes: [], id: '4' },
        { title: "T5", notes: [], id: '5' },
        { title: "T6", notes: [], id: '6' },
      ]

    return <>
      <style jsx>{`
        .root{
            background-color: ${Colors.backgroundColor};
            min-height: 100vh;
        }
        `}
      </style>

      <div className="root">
        <DeckPicker decks={testDecks} />
      </div>
    </>
  }
}

export default withRouter(Decks);