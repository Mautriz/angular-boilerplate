import * as fromRouter from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "..";

export const selectRouter = createFeatureSelector<
  AppState,
  fromRouter.RouterReducerState<any>
>("router");

export const {
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = fromRouter.getSelectors(selectRouter);
