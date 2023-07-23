import { configureStore, MiddlewareAPI, PayloadAction, PreloadedState, StateFromReducersMapObject } from '@reduxjs/toolkit'

import favoriteReducer from './favorite'
import cartReducer from './cart'

import {initialState as initialFavoriteState}  from './favorite'
import {initialState as initialCartState}  from './cart'

const reducer = {
  favorite: favoriteReducer,
  cart: cartReducer
};

const favoriteMiddleware = (store: any) => (next: any) => (action: PayloadAction<string>) => {
  const result = next(action);
  if ( action.type?.startsWith('favorite/') ) {
    const favoriteState = store.getState().favorite;
    localStorage.setItem('favorite', JSON.stringify(favoriteState ))
  }
  return result;
};

const refreshFavorite = () => {
  const storageData = localStorage.getItem('favorite');
  if ( storageData !== null) {
    return JSON.parse(storageData);
  }
  return initialFavoriteState
};

const cartMiddleware = (store: any) => (next: any) => (action: PayloadAction<string>) => {
  const result = next(action);
  if ( action.type?.startsWith('cart/') ) {
    const cartState = store.getState().cart;
    localStorage.setItem('cart', JSON.stringify(cartState ))
  }
  return result;
};

const refreshCart = () => {
  const storageData = localStorage.getItem('cart');
  if ( storageData !== null) {
    return JSON.parse(storageData);
  }
  return initialCartState
};

export type  preloadedRootState = StateFromReducersMapObject<typeof reducer>

const preloadedState: PreloadedState<preloadedRootState> = {
  favorite: refreshFavorite(),
  cart: refreshCart()
}

const store = configureStore({
  reducer,
  preloadedState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(favoriteMiddleware).concat(cartMiddleware),
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch