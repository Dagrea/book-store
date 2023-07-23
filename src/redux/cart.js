import { createSlice } from '@reduxjs/toolkit'

import carousel1 from '../assets/carousel1.jpg';

export const initialState = {
    items: [{id: "322", name:'Garry Trudeau', img:carousel1, quantity:1, price: 560}]
  };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
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
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
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

export const { increment, decrement, addItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer