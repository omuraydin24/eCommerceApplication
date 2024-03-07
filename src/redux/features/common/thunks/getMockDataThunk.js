import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk(
  'common/getMockData',
  async (payload, thunkAPI) => {
    const {page} = payload;
    try {
      const resp = await axios.get(
        `https://dummyjson.com/products?limit=${page * 10}`,
      );
      return resp.data;
    } catch (error) {
      console.log('getMockData error:', error);
    }
  },
);
