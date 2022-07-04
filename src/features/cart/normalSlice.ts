import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    itemNote?: string;
    itemOpen?: boolean;
};

export interface NormalCartStateInterface {
    items: {
        [key: string]: CartItemType;
    };
}

const initialState: NormalCartStateInterface = {
    items: {}
};

const normalSlice = createSlice({
    name: 'normalSlice',
    initialState,
    reducers: {
        addItem: (state: NormalCartStateInterface, action: PayloadAction<CartItemType>): void => {
            const { id, name, price, quantity } = action.payload;

            if (!id || !name || !price || !quantity) return;
            // If an item is already exits in the cart then increase the quantity
            if (state.items[id]) {
                state.items[id].quantity += 1;
            } else {
                state.items[id] = {
                    id,
                    name,
                    price,
                    quantity
                };
            }
        },
        // Delete an item from the cart
        deleteItem: (state: NormalCartStateInterface, action: PayloadAction<{ itemID: string }>): void => {
            const { itemID } = action.payload;

            delete state.items[itemID];
        },
        // Increase the item quantity
        increaseItemQuantity: (
            state: NormalCartStateInterface,
            action: PayloadAction<{ itemID: string; quantity?: number }>
        ): void => {
            const { itemID, quantity = 1 } = action.payload;

            state.items[itemID].quantity += quantity;
        },
        // Decrease the item quantity
        decreaseItemQuantity: (
            state: NormalCartStateInterface,
            action: PayloadAction<{ itemID: string; quantity?: number }>
        ): void => {
            const { itemID, quantity = 1 } = action.payload;

            if (state.items[itemID].quantity > 0) {
                state.items[itemID].quantity -= quantity;
            }
        },
        // Modify item quantity by number
        modifyItemQuantity: (
            state: NormalCartStateInterface,
            action: PayloadAction<{ itemID: string; quantity: number }>
        ): void => {
            const { itemID, quantity } = action.payload;

            if (quantity) {
                state.items[itemID].quantity = quantity;
            } else {
                state.items[itemID].quantity = 1;
            }
        },
        // Toggle item expand
        toggleItemExpand: (
            state: NormalCartStateInterface,
            action: PayloadAction<{ itemID: string }>
        ): void => {
            const { itemID } = action.payload;

            state.items[itemID].itemOpen = !state.items[itemID].itemOpen;
        },
        // Set the item note for the item
        setItemNote: (
            state: NormalCartStateInterface,
            action: PayloadAction<{ itemID: string; note: string }>
        ): void => {
            const { itemID, note } = action.payload;

            state.items[itemID].itemNote = note;
        },
        // Clear the item note
        clearItemNote: (state: NormalCartStateInterface, action: PayloadAction<{ itemID: string }>): void => {
            const { itemID } = action.payload;

            state.items[itemID].itemNote = '';
        },
        // Clear all the items from the cart
        clearItems: (state: NormalCartStateInterface): void => {
            state.items = {};
        }
    }
});

export const {
    addItem,
    deleteItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    modifyItemQuantity,
    toggleItemExpand,
    setItemNote,
    clearItemNote,
    clearItems
} = normalSlice.actions;

export default normalSlice.reducer;
