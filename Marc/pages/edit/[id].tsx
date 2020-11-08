import { NextPage } from 'next';
import React from 'react';
import DeckCreationContainer from '../../components/creation/deckCreationContainer';
import { getDeck } from '../../services/deck/Deck';
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
            data: { _id: '', title: "", notes: [] }
        }
    }

    render() {
        return <>
            <style jsx>{`
        .style{
            color: green;
        }
        `}
            </style>

            <div>
                <DeckCreationContainer title={this.state.data.title} notes={this.state.data.notes} callback={() => console.log('idk lul')} />
            </div>
        </>
    }

    componentDidMount() {
        getDeck(this.props.id, (deck) => {
            if (deck) {
                this.setState({data: deck})
            }
        });
    }

    static async getInitialProps(data: { query: { id: string } }) {
        console.log(data.query.id);

        return {
            id: data.query.id
        }
    }
}

export default Edit;

