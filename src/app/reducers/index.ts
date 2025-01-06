import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
};


