import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from '../services/fetchCategories';
import { type Category, type CategoriesSchema } from '../types/category';

const initialState: CategoriesSchema = {
  isLoading: false,
  error: undefined,
  categories: undefined
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
});

export const { actions: categoriesActions } = categoriesSlice;
export const { reducer: categoriesReducer } = categoriesSlice;
