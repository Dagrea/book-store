import { createSlice } from '@reduxjs/toolkit'

import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';

export const initialState = {
    items: [{id: "322", name:'Garry Trudeau', img:carousel1}, {id: "323", name:'Joan Garry\'s Guide to Nonprofit Leadership', img:carousel2}]
  };
export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItem(state, action) {
      const itemInFavorite = state.items.find((item) => item.id === action.payload.id);
      if (!itemInFavorite) {
        state.items.push({ ...action.payload});
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
})

export const { addItem, deleteItem } = favoriteSlice.actions
export default favoriteSlice.reducer