import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartType = 'normal' | 'course';

export interface CartStateInterface {
    cartType: CartType;
    scrollIntoView?: boolean;
}

const initialState: CartStateInterface = {
    cartType: 'course',
    scrollIntoView: false
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        changeCartType: (state: CartStateInterface, action: PayloadAction<CartType>): void => {
            state.cartType = action.payload;
        },
        setScrollIntoView: (state: CartStateInterface, action: PayloadAction<boolean>): void => {
            state.scrollIntoView = action.payload;
        }
    }
});

export const { changeCartType, setScrollIntoView } = cartSlice.actions;

export default cartSlice.reducer;
