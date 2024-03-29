import request, { SuperAgentRequest } from 'superagent';
import User from '../../util/User';
import { Strategy, strategies } from './strategy/Strategy';

type UserObserver = (user: User | undefined) => void;

export default class Auth {
  private strategy: Strategy | undefined;
  private user: User | undefined;
  private userObservers: UserObserver[] = [];
  private static authInstance: Auth;

  private constructor(buildFromStorage: boolean = true) {
    if (buildFromStorage) {
      for (const stratergy of Object.values(strategies)) {
        const username = stratergy.getUsername();
        const id = stratergy.getUserId()
        // If the browser has all valiable data to be considered logged in, then update all data to match.  
        if (stratergy.isLoggedIn() && username && id) {
          this.strategy = stratergy;
          this.user = { username, id };
          break;
        }
      }
    }
  }

  static getInstance() {
    if (!Auth.authInstance) {
      Auth.authInstance = new Auth();
    }

    return Auth.authInstance;
  }

  addUserObserver(observer: UserObserver, callbackInitialValue?: boolean) {
    this.userObservers.push(observer);

    if (callbackInitialValue) {
      observer(this.user);
    }
  }

  setStrategy(strategy?: Strategy) {
    this.strategy = strategy;
  }

  setUser(user?: User) {
    this.user = user;
    this.userObservers.forEach((observer) => observer(this.user));
  }

  login(strategy: Strategy, username: string, password: string) {
    strategy.login(username, password, () => {
      const username = strategy?.getUsername();
      const userId = strategy?.getUserId();

      if (!username || !userId) {
        console.error('Login failed, did not get username or userId from strategy');
        return;
      }

      this.setStrategy(strategy);
      this.setUser(new User(userId, username));
    });
  }

  logout() {
    this.setUser();
    this.strategy?.logout();
  }

  register(strategy: Strategy, username: string, password: string) {
    strategy.register(username, password);
    this.setStrategy(strategy);
  }

  relay(request: SuperAgentRequest, cb: (res: request.Response) => void) {
    if (!this.strategy) {
      console.warn('No strategy found!');
    }
    this.strategy?.dress(request, (dressedRequest) => {
      dressedRequest
        .then((res) => {
          cb(res);
        })
        .catch((err) => {
          console.error('Failed to relay request', err);
        });
    });
  }
}
