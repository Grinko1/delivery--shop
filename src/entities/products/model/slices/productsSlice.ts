import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Product, type ProductsSchema } from '../types/productsSchema';
import { fetchProducts } from '../services/fetchProducts';
import { fetchPopularProducts } from '../services/fetchPopularProducts';

const initialState: ProductsSchema = {
  isLoading: false,
  error: '',
  products: [],
  popularProducts: [],
  categoryId: undefined,
  _inited: false
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    initState: (state) => {
      state._inited = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchPopularProducts.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchPopularProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false;
      state.popularProducts = action.payload;
    });
    builder.addCase(fetchPopularProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
