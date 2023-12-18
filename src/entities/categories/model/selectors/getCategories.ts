import { type StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const getCategories = (state: StateSchema) => state.categories.categories;
export const getIsLoadingCategories = (state: StateSchema) => state.categories.isLoading;
export const getErrorCategories = (state: StateSchema) => state.categories.error;
