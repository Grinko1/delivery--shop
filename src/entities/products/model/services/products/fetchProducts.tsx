import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { type Product } from '../../types/productsSchema';
import { getActiveCategory } from '../../selectors/getProducts/getProducts';
import { addQueryParams } from 'shared/lib/hooks/addQuaryParams/addQuaryParams';

export const fetchProducts = createAsyncThunk<Product[], void, ThunkConfig<string>>(
  'products/fetchProducts',
  async (_, { extra, rejectWithValue, getState }) => {
    const cat = getActiveCategory(getState());
    try {
      addQueryParams({
        categoryId: String(cat)
      });
      const response = await extra.api.get<Product[]>('/products', {
        params: {
          categoryId: cat
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data.message || 'unexpected error');
    }
  }
);
