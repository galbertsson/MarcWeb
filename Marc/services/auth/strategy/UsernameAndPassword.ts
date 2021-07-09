import { Strategy } from './Strategy';
import superAgent, { SuperAgentRequest } from 'superagent';
import { getRequestData, PATHS } from '../../../services/routes';

enum localStorageItem {
  CSRF_TOKEN = 'csrf_token',
  USERNAME = 'username',
  USER_ID = 'user_id',
}

class UsernameAndPassword implements Strategy {
  private hasItem(item: localStorageItem) {
    return !!window.localStorage.getItem(item);
  }

  private setItem(item: localStorageItem, token: string) {
    window.localStorage.setItem(item, token);
  }

  private deleteItem(item: localStorageItem) {
    window.localStorage.removeItem(item);
  }

  private getItem(item: localStorageItem) {
    return window.localStorage.getItem(item);
  }

  private async ensureCsrfToken(): Promise<string> {
    let csrfToken = this.getItem(localStorageItem.CSRF_TOKEN);

    if (!csrfToken) {
      const { url } = getRequestData(PATHS.CSRF, []);
      const csrfResponse = await superAgent.get(url);
      const csrfTokenResponse = csrfResponse.body?.token as string;

      this.setItem(localStorageItem.CSRF_TOKEN, csrfTokenResponse);
      csrfToken = csrfTokenResponse;
    }

    return csrfToken;
  }

  getUsername() {
    return this.getItem(localStorageItem.USERNAME);
  }

  getUserId() {
    return this.getItem(localStorageItem.USER_ID);
  }

  isLoggedIn() {
    return this.getUserId !== null;
  }

  login(username: string, password: string, done: () => void) {
    const { url } = getRequestData(PATHS.LOGIN, []);

    let request = superAgent.post(url).send({ username, password });

    this.dress(request, (dressedRequest) => {
      dressedRequest
        .then((res) => {
          this.setItem(localStorageItem.USERNAME, res.body.username);
          this.setItem(localStorageItem.USER_ID, res.body.id);
          done();
        })
        .catch((err) => console.log(err));
    });
  }

  logout() {
    const { url } = getRequestData(PATHS.LOGOUT, []);

    let request = superAgent.post(url).send();

    this.dress(request, (dressedRequest) => {
      dressedRequest
        .then((res) => {
          this.deleteItem(localStorageItem.USERNAME);
          this.deleteItem(localStorageItem.USER_ID);
          // Assume dev server restarted
          this.deleteItem(localStorageItem.CSRF_TOKEN);
        })
        .catch((err) => console.log(err));
    });
  }

  register(username: string, password: string) {
    const { url } = getRequestData(PATHS.REGISTER, []);

    let request = superAgent.post(url).send({ username, password });

    this.dress(request, (dressedRequest) => {
      dressedRequest.then((res) => console.log(res)).catch((err) => console.log(err));
    });

    return true;
  }

  dress(request: SuperAgentRequest, callback: (request: SuperAgentRequest) => void): void {
    this.ensureCsrfToken().then((csrfToken) => {
      const req = request.set('csrf-token', csrfToken);
      callback(req);
    });
  }
}

export default UsernameAndPassword;
