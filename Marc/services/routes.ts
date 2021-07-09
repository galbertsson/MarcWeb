import { API_URL } from '../settings/setting';

export enum PATHS {
  CSRF = 'csrf', //get
  LOGIN = 'login', //post
  LOGOUT = 'logout', //post
  REGISTER = 'register', //post
  GET_DECKS = 'api/decks', //get, no param
  CREATE_DECK = 'api/decks/create', //post
  GET_DECK = 'api/decks', // get, /:id
  EDIT_DECK = 'api/decks/edit', //post
  DELETE_DECK = 'api/decks', //delete /:id
}

export enum TYPES {
  GET,
  POST,
  DELETE,
}

export const getRequestData = (path: PATHS, params: string[]): { url: string; method: TYPES } => {
  const url = `${API_URL}/${path}`;

  switch (path) {
    case PATHS.CSRF:
      return { url, method: TYPES.GET };
    case PATHS.LOGIN:
      return { url, method: TYPES.POST };
    case PATHS.LOGOUT:
      return { url, method: TYPES.POST };
    case PATHS.REGISTER:
      return { url, method: TYPES.POST };
    case PATHS.CREATE_DECK:
      return { url, method: TYPES.POST };
    case PATHS.GET_DECK:
    case PATHS.GET_DECKS:
      return { url: params[0] ? `${url}/${params[0]}` : url, method: TYPES.GET };
    case PATHS.EDIT_DECK:
      return { url, method: TYPES.POST };
    case PATHS.DELETE_DECK:
      return { url: `${url}/${params[0]}`, method: TYPES.DELETE };
  }
};
