import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { type Category } from '../types/category';

export const fetchCategories = createAsyncThunk<Category[], void, ThunkConfig<string>>(
  'category/fetchCategories',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<Category[]>('/categories');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message || 'unexpected error');
    }
  }
);
