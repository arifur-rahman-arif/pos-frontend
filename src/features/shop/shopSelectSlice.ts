import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ShopSelectSliceInterface {
    selectedShop: string;
}

const initialState: ShopSelectSliceInterface = {
    selectedShop: ''
};

const shopSelectSlice = createSlice({
    name: 'shopSelectSlice',
    initialState,
    reducers: {
        setSelectedShop: (state: ShopSelectSliceInterface, action: PayloadAction<string>) => {
            state.selectedShop = action.payload || '';
        }
    }
});

export const { setSelectedShop } = shopSelectSlice.actions;

export default shopSelectSlice.reducer;
