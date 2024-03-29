import React from 'react';
import DeckCreationContainer from '../../components/creation/DeckCreationContainer';
import { editDeck, getDeck } from '../../services/deck/Deck';
import Deck from '../../util/Deck';

interface EditState {
  data: Deck;
}

interface EditProps {
  id: string;
}

class Edit extends React.Component<EditProps, EditState> {
  constructor(props: EditProps) {
    super(props);

    this.state = {
      data: { _id: '', title: '', notes: [] },
    };
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <div>
          <DeckCreationContainer
            context="edit"
            id={data._id}
            title={data.title}
            notes={data.notes}
            callback={(title, notes) => editDeck({ _id: this.state.data._id, title, notes })}
          />
        </div>
      </>
    );
  }

  componentDidMount() {
    getDeck(this.props.id, (deck) => {
      if (deck) {
        this.setState({ data: deck });
      }
    });
  }

  static async getInitialProps(data: { query: { id: string } }) {
    console.log(data.query.id);

    return {
      id: data.query.id,
    };
  }
}

export default Edit;
