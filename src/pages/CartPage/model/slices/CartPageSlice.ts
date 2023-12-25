import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartPageSchema } from '../types/CartPageSchema';

const initialState: CartPageSchema = {
    
};

export const CartPageSlice = createSlice({
    name: 'CartPage',
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

export const { actions: CartPageActions } = CartPageSlice;
export const { reducer: CartPageReducer } = CartPageSlice;