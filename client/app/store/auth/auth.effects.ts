import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import {
  LOGIN_REQUESTED,
  LOGIN_COMPLETED,
  LOGOUT_REQUESTED,
  LOGOUT_COMPLETED,
  AUTH_ERROR,
  AuthActions
} from './auth.actions';

@Injectable()
export class AuthEffects {
  // @Effect() loginRequested$ = this.actions$.ofType(LOGIN_REQUESTED);

  constructor(private actions$: Actions, private http: Http) {}
}
