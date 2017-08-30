import {
  LOGIN_REQUESTED,
  LOGIN_COMPLETED,
  LOGOUT_REQUESTED,
  LOGOUT_COMPLETED,
  AUTH_ERROR,
  AuthActions
} from './auth.actions';

export interface IAuthState {
  id: string;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  id: '',
  isAuthenticated: false
};

export function authReducer(state: IAuthState = initialState, action: AuthActions): IAuthState {
  switch (action.type) {
    // TODO: all the actions.
    default: {
      return state;
    }
  }
}
