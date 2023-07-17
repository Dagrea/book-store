import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: ['book', 'second']
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