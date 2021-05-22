import React from 'react';
import DeckCreationContainer from '../../components/creation/DeckCreationContainer';
import Games from '../../components/games/Games';
import { editDeck, getDeck } from '../../services/deck/Deck';
import Deck from '../../util/Deck';

interface TrainingCenterState {
  data: Deck;
}

interface TrainingCenterProps {
  id: string;
}

class TrainingCenter extends React.Component<TrainingCenterProps, TrainingCenterState> {
  constructor(props: TrainingCenterProps) {
    super(props);

    this.state = {
      data: { _id: '', title: '', notes: [] },
    };
  }

  render() {
    const { data } = this.state;

    return <Games deck={data} />;
  }

  componentDidMount() {
    getDeck(this.props.id, (deck) => {
      if (deck) {
        this.setState({ data: deck });
      }
    });
  }

  static async getInitialProps(data: { query: { id: string } }) {
    return {
      id: data.query.id,
    };
  }
}

export default TrainingCenter;
