import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";
import { environment } from "../../environments/environment";
import { routerReducer } from "@ngrx/router-store";

export interface AppState {
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
