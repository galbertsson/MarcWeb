import request, { SuperAgentRequest } from 'superagent'
import { Strategy } from './strategy/Strategy';

let _currentStrategy: Strategy | undefined;


const getUsername = () => {
    return _currentStrategy?.getUsername();
}

// TODO: This might not be needed, thinking some UI logic could use this when determining owner of something.
const getUserId = () => {
    return _currentStrategy?.getUserId();
}

const login = (auth: Strategy, username: string, password: string) => {
    _currentStrategy = auth;
    _currentStrategy.login(username, password);
    console.log('Doing login!');
}

const logout = () => {
    _currentStrategy?.logout();
}

const register = (auth: Strategy, username: string, password: string) => {
    _currentStrategy = auth;
    _currentStrategy.register(username, password);
}

const relay = async (request: SuperAgentRequest, cb: (res: request.Response) => void) => {
    console.log('Going to relay!');
    console.log('strat is ', _currentStrategy);
    _currentStrategy?.dress(request, (dressedRequest) => {
        console.log('Got a dressed request!');
        dressedRequest.then(res => {
            console.log('Relay res to consumer?', res)
            cb(res);
        })
        .catch(err => {
            console.log('Relay err to consumer?', err);
        })    
    });
}

export {
    login,
    logout,
    register,
    relay,
    getUsername,
    getUserId
}