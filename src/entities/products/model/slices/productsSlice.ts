import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Product, type ProductsSchema } from '../types/productsSchema';
import { fetchProducts } from '../services/products/fetchProducts';
import { fetchPopularProducts } from '../services/popularProducts/fetchPopularProducts';
import { fetchCategory } from '../services/products/fetchActiveCategory';
import { type Category } from 'entities/categories/model/types/category';

const initialState: ProductsSchema = {
  isLoading: false,
  error: '',
  products: [],
  popularProducts: [],
  promoProducts: [],
  categoryId: undefined,
  activeCategory: '',
  _inited: false
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
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
      console.log(
        action.payload.filter((item) => Boolean(item.newPrice)),
        'filter'
      );
      state.promoProducts = action.payload.filter((item) => Boolean(item.newPrice));
    });
    builder.addCase(fetchPopularProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchCategory.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action: PayloadAction<Category>) => {
      state.isLoading = false;
      state.activeCategory = action.payload.title;
      console.log('set active cat', action.payload.title);
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
