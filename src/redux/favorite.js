import { createSlice } from '@reduxjs/toolkit'

import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: [{id: "322", name:'Garry Trudeau', img:carousel1, quantity:1}, {id: "323", name:'Joan Garry\'s Guide to Nonprofit Leadership', img:carousel2, quantity:1}]
  },
  reducers: {
    addItem(state, action) {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload});
      }
    },
    deleteItem(state, action) {
      console.log(action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    //cart
     increment(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },
     decrement(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity !== 1) {
        item.quantity--;
      }
    }
  },
})

export const { increment, decrement, addItem, deleteItem } = favoriteSlice.actions

export default favoriteSlice.reducer