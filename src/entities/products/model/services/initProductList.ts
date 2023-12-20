import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { productsActions } from '../slices/productsSlice';
import { fetchProducts } from './fetchProducts';

export const initProductList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'products/initProductList',
  async (searchParams, thunkApi) => {
    const { dispatch } = thunkApi;
    const categoryId = searchParams.get('categoryId');
    if (categoryId) {
      dispatch(productsActions.setCategory(categoryId));
    }

    dispatch(productsActions.initState());
    dispatch(fetchProducts());
  }
);
