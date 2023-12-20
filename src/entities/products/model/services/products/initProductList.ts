import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { productsActions } from '../../slices/productsSlice';
import { fetchProducts } from './fetchProducts';
// import { fetchCategory } from './fetchActiveCategory';

export const initProductList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'products/initProductList',
  async (searchParams, thunkApi) => {
    const { dispatch } = thunkApi;
    const categoryId = searchParams.get('categoryId');
    if (categoryId) {
      dispatch(productsActions.setCategoryId(categoryId));
      // dispatch(fetchCategory(categoryId));
    }

    dispatch(productsActions.initState());

    dispatch(fetchProducts());
  }
);
