import { createSlice } from '@reduxjs/toolkit'

import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: [{name:'Garry Trudeau', img:carousel1}, {name:'Joan Garry\'s Guide to Nonprofit Leadership', img:carousel2}]
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
    },
    deleteItem(state, action) {
      state.items.push(action.payload)
    }
  },
})

export const { increment, decrement, addItem } = favoriteSlice.actions

export default favoriteSlice.reducer