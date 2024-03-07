import {createSlice} from '@reduxjs/toolkit';

import initialState from './initialState';
import getMockDataThunk from './thunks/getMockDataThunk';

export default createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
      state.cartItemCount = state.cartItems.length;
    },
    incrementCount: (state, action) => {
      const itemToBeAdded = action.payload;
      state.cartItems = [...state.cartItems, itemToBeAdded];
      state.cartItemCount = state.cartItems.length;
    },
    decrementCount: (state, action) => {
      const itemToBeRemoved = action.payload;
      const index = state.cartItems.findIndex(
        obj => obj.id === itemToBeRemoved.id,
      );
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        state.cartItemCount = state.cartItems.length;
      }
    },
    setFavoriteProducts: (state, action) => {
      const itemIndex = state.favoriteProducts.findIndex(
        item => item.id === action.payload.id,
      );
      if (itemIndex !== -1) {
        state.favoriteProducts.splice(itemIndex, 1);
      } else {
        state.favoriteProducts.push(action.payload);
      }
    },
    setProductLimitReached: (state, action) => {
      state.productLimitReached = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMockDataThunk.pending, state => {
        state.mockDataLoading = true;
      })
      .addCase(getMockDataThunk.fulfilled, (state, action) => {
        state.mockData = action.payload.products;
        if (action.payload.limit === action.payload.total) {
          state.productLimitReached = true;
        }
        state.mockDataLoading = false;
      })
      .addCase(getMockDataThunk.rejected, (state, action) => {
        state.mockDataError = action.payload;
        state.mockDataLoading = false;
      });
  },
});
