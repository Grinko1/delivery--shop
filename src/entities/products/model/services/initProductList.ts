import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/storeProvider/config/StateSchema';
import { getProductsInited } from '../selectors/getProducts';
import { productsActions } from '../slices/productsSlice';
import { fetchProducts } from './fetchProducts';

export const initProductList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'products/initProductList',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getProductsInited(getState());

    if (!inited) {
      const categoryFromUrl = searchParams.get('categoryId');
      console.log(categoryFromUrl, 'categoryFromUrl');

      if (categoryFromUrl) {
        dispatch(productsActions.setCategory({ id: '', title: categoryFromUrl }));
      }

      dispatch(productsActions.initState());
      dispatch(fetchProducts(''));
    }
  }
);
