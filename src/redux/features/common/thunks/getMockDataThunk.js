import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export default createAsyncThunk(
  'common/getMockData',
  async (payload, thunkAPI) => {
    console.log('cemil - payload:', payload);
    const {page} = payload;
    console.log('cemil - page:', page);
    try {
      const resp = await axios.get(
        // 'https://5fc9346b2af77700165ae514.mockapi.io/products',
        `https://dummyjson.com/products?limit=${page * 10}`,
      );
      console.log('cemil - resp:', resp);
      return resp.data;
    } catch (error) {
      console.log('getMockData error:', error);
    }
  },
);
