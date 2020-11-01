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

class Edit extends React.Component<NextPage<EditProps>, EditState> {

    constructor(props: NextPage<EditProps>) {
        super(props)

        this.state = {
            data: { id: '', title: "", notes: [] }
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
                <DeckCreationContainer title={this.state.data.title} notes={this.state.data.notes} />
            </div>
        </>
    }

    componentDidMount() {
        getDeck(this.props)
    }

    static async getInitialProps({ params }: { params: { id: string } }) {
        return {
            id: params.id
        }
    }
}

export default Edit;

