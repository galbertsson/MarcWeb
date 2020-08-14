import { getRequestData, PATHS } from '../routes'
import superAgent, { SuperAgentRequest } from 'superagent';
import { relay } from '../auth/Auth';

const getDecks = (cb: (decks: any) => void) => {
    const { url } = getRequestData(PATHS.GET_DECKS, []);
    console.log('URL from request data', url);

    let request = superAgent
        .get(url)
        .send();

    //TODO: Need to get some data here!
    relay(request, (res) => {
        console.log('We got the relay!');
        cb(res.body);
    });
}

//@ts-ignore
const createDeck = (title: string, notes: (ClozeNote | BasicNote)[]) => {
    const { url } = getRequestData(PATHS.CREATE_DECK, []);

    console.log('sending', {title, notes})

    let request = superAgent
        .post(url)
        .send({title, notes});

    relay(request, (res) => {
        console.log(res)
    });
}


const getDeck = (id: string) => {

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