import { configureStore, MiddlewareAPI, PayloadAction, PreloadedState, StateFromReducersMapObject } from '@reduxjs/toolkit'

import favoriteReducer from './favorite'

const reducer = {
  favorite: favoriteReducer
};

const favoriteMiddleware = (store: any) => (next: any) => (action: PayloadAction<string>) => {
  const result = next(action);
  if ( action.type?.startsWith('favorite/') ) {
    const favoriteState = store.getState().favorite;
    localStorage.setItem('favorite', JSON.stringify(favoriteState ))
  }
  return result;
};

const refreshStore = () => {
  return JSON.parse(localStorage.getItem('favorite') || '{}')
};

export type  preloadedRootState = StateFromReducersMapObject<typeof reducer>

const preloadedState: PreloadedState<preloadedRootState> = {
  favorite: refreshStore(),
  
}
console.log(preloadedState);
const store = configureStore({
  reducer,
  preloadedState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(favoriteMiddleware),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch