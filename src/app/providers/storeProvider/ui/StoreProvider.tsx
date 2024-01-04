import { type ReactNode, memo } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type StateSchema } from '../config/StateSchema';
import { type ReducersMapObject } from 'redux';
import { enableMapSet } from 'immer';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

enableMapSet();
export const StoreProvider = memo((props: StoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);

  return <Provider store={store}>{children}</Provider>;
});
