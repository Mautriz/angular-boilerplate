import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAuth from "./auth.reducer";

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectUser = createSelector(selectAuthState, auth => auth.user);

export const selectUserId = createSelector(selectUser, user => user.id);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  auth => auth.isLoggedIn
);

export const selectError = createSelector(selectAuthState, auth => auth.error);
