import UsernameAndPassword from './UsernameAndPassword';
import { SuperAgentRequest } from 'superagent';

export interface Strategy {
    getUsername: () => string | null;
    getUserId: () => string | null;
    isLoggedIn: () => boolean;
    login: (username: string, password: string, done: () => void) => void;
    logout: () => void;
    register: (username: string, password: string) => void;
    dress: (request: SuperAgentRequest, callback: (req: SuperAgentRequest) => void) => void
}

// TODO: will have to change this type later, no need to make an instance of all strategies if we don't use them.
const strategies/* : Record<string, Strategy> */ = {
    USERNAMEPASSWORD: new UsernameAndPassword(),
}

export {
    strategies
}