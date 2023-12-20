import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { type Category } from 'entities/categories/model/types/category';

export const fetchCategory = createAsyncThunk<Category, string, ThunkConfig<string>>(
  'products/fetchCategory',
  async (id, { extra, rejectWithValue, getState }) => {
    try {
      const response = await extra.api.get<Category>('/categories', {
        params: {
          subcategory: {
            id
          }
        }
      });
      console.log(response.data, 'response');
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message || 'unexpected error');
    }
  }
);
