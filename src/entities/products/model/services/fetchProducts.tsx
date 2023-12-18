import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { type Product } from '../types/productsSchema';
import { getActiveCategory } from '../selectors/getProducts';
import { addQueryParams } from 'shared/lib/hooks/addQuaryParams/addQuaryParams';

export const fetchProducts = createAsyncThunk<Product[], string, ThunkConfig<string>>(
  'products/fetchProducts',
  async (category, { extra, rejectWithValue, getState }) => {
    const cat = getActiveCategory(getState());
    console.log(cat, 'cat in fetch');
    try {
      addQueryParams({
        category: cat?.title,
        categoryId: String(cat?.id)
      });
      const response = await extra.api.get<Product[]>('/products', {
        params: {
          categoryId: cat?.id
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
