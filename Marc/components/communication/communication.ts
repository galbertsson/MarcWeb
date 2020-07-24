import superAgent from 'superagent';
import { PATHS, TYPES, getRequestData } from './routes';

const sendRequest = async (path: PATHS, params: string[], body?: object): Promise<any> => {
    let csrfToken = window.localStorage.getItem('csrf_token');

    if (!csrfToken) {
        const { url } = getRequestData(PATHS.CSRF, []);
        const csrfResponse = await superAgent.get(url)
        const csrfTokenResponse = csrfResponse.body?.token as string;
        window.localStorage.setItem('csrf_token', csrfTokenResponse);
        csrfToken = csrfTokenResponse;
    }

    const { url, method } = getRequestData(path, params);

    if (method === TYPES.POST) {
        console.log('sending post with data', body);
        return superAgent.post(url)
            .send(body)
            .set('csrf-token', csrfToken)
    } else if (method === TYPES.GET) {
        return await superAgent.get(url);
    } else if (method === TYPES.DELETE) {
        return superAgent.delete(url)
    }
}

export {
    sendRequest
}