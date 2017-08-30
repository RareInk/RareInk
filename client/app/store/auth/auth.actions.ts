import { Action } from '@ngrx/store';
import { IAuthState } from './auth.reducer';

// Action names should be namespaced by its store name then followed by the constant name.

export const LOGIN_REQUESTED = 'auth/LOGIN_REQUESTED';
export const LOGIN_COMPLETED = 'auth/LOGIN_COMPLETED';

export const LOGOUT_REQUESTED = 'auth/LOGOUT_REQUESTED';
export const LOGOUT_COMPLETED = 'auth/LOGOUT_COMPLETED';

export const AUTH_ERROR = 'auth/AUTH_ERROR';

// Now we can assign the action types above to its respective action classes below.
// NOTE: Some classes could have "Effects"

export class LoginRequestedAction implements Action {
  readonly type = LOGIN_REQUESTED;

  constructor(public payload: any) {}
}

export class LoginCompletedAction implements Action {
  readonly type = LOGIN_COMPLETED;

  constructor(public payload: any) {}
}

export class LogoutRequestedAction implements Action {
  readonly type = LOGOUT_REQUESTED;

  constructor(public payload: any) {}
}

export class LogoutCompletedAction implements Action {
  readonly type = LOGOUT_COMPLETED;

  constructor(public payload: any) {}
}

export class AuthErrorAction implements Action {
  readonly type = AUTH_ERROR;

  constructor(public payload: IAuthState) {}
}

// Now we export a "discriminated union type" which lists all the actions we just declared above

export type AuthActions
  = LoginRequestedAction
  | LoginCompletedAction
  | LogoutRequestedAction
  | LogoutCompletedAction
  | AuthErrorAction;
