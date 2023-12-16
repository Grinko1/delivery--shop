/* eslint-disable @typescript-eslint/no-empty-interface */
import {
  type ReducersMapObject,
  type EnhancedStore,
  type AnyAction,
  type Reducer,
  type CombinedState
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { type PromotionalSchema } from 'entities/promotionalProducts';

export interface StateSchema {
  promotional: PromotionalSchema;
  // counter: CounterSchema;
  // user: UserSchema;
  // ui: UISchema;
  // // async
  // login?: LoginSchema;
  // profile?: ProfileSchema;
  // articleDetails?: ArticleDetailsSchema;
  // ArticleDetailsComments?: ArticleDetailsCommentsSchema;
  // addCommentForm?: AddCommentFormSchema;
  // articlesPage?: ArticlesPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
