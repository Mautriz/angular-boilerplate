import { createAction, props } from "@ngrx/store";
import { User, Token } from "../auth.models";

export const login = createAction("[Auth] Login");

export const loginSuccess = createAction(
  "[Auth] Login success",
  props<{ user: User }>()
);

export const loginFailure = createAction(
  "[Auth] Login failure",
  props<{ error: string }>()
);

export const tokenRefresh = createAction(
  "[Interceptor] Token refresh",
  props<{ token: Token }>()
);
