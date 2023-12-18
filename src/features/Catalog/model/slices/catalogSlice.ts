import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatalogSchema } from '../types/catalogSchema';

const initialState: CatalogSchema = {
    
};

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {
           
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: catalogActions } = catalogSlice;
export const { reducer: catalogReducer } = catalogSlice;