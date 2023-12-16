import { type ReducersMapObject, configureStore, type Reducer, type CombinedState } from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';

import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { promotionalReducer } from 'entities/promotionalProducts';

export function createReduxStore (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    promotional: promotionalReducer
    // counter: counterReducer,
    // user: userReducer,
    // ui: uiReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: { api: $api }
        }
      })
  });
  // @ts-expect-error sdfsdf
  store.reducerManager = reducerManager;
  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
