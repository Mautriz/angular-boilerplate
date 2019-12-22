import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import { User, Token } from "../auth.models";

export const authFeatureKey = "auth";

export interface AuthState {
  isLoggedIn: boolean;
  user: User;
  error: string;
  token: Token;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null,
  token: {
    access_token: null,
    refresh_token: null
  }
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.login, state => state),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    isLoggedIn: true,
    user: action.user
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    isLoggedIn: false,
    user: null
  })),
  on(AuthActions.tokenRefresh, (state, action) => ({
    ...state,
    token: action.token
  }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
