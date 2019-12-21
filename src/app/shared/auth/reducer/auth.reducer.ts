import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import { User } from "../auth.models";

export const authFeatureKey = "auth";

export interface AuthState {
  isLoggedIn: boolean;
  user: User;
  error: string;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  error: null
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
  }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
