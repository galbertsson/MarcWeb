import { getRequestData, PATHS } from '../routes'
import superAgent, { SuperAgentRequest } from 'superagent';
import Auth from '../auth/Auth';
import Deck from '../../util/Deck';

const getDecks = (cb: (decks?: Deck[]) => void) => {
    const { url } = getRequestData(PATHS.GET_DECKS, []);
    console.log('URL from request data', url);

    let request = superAgent
        .get(url)
        .send(); // to we rly send?

    Auth.getInstance().relay(request, (res) => {
        console.log('We got the relay!');
        cb(res.body);
    });
}

const createDeck = (title: string, notes: Deck['notes']) => {
    const { url } = getRequestData(PATHS.CREATE_DECK, []);

    console.log('sending', {title, notes})

    let request = superAgent
        .post(url)
        .send({title, notes});

    Auth.getInstance().relay(request, (res) => {
        console.log(res);
    });
}


const getDeck = (id: string, cb: (deck?: Deck) => void) => {
    const { url } = getRequestData(PATHS.GET_DECK, [id]);

    const request = superAgent
        .get(url)
        .send();

    Auth.getInstance().relay(request, (res) => {
        cb(res.body);
    });
}


//@ts-ignore
const editDeck = (deck: Deck) => {

}


const deleteDeck = (id: string) => {

}

export {
    getDeck,
    createDeck,
    getDecks,
    editDeck,
    deleteDeck
}