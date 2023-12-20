import { createAsyncThunk } from '@reduxjs/toolkit';

import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { type ProductPromo } from '../../types/promoProductsSchema';

export const fetchPromotionalProduct = createAsyncThunk<ProductPromo[], void, ThunkConfig<string>>(
  'profile/fetchPromotionalProduct',
  async (_, { extra, rejectWithValue }) => {
    try {
      const response = await extra.api.get<ProductPromo[]>('/productsSale');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message || 'unexpected error');
    }
  }
);
