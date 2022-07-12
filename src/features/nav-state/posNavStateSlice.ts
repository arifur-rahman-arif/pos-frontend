import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PosNavStateInterface {
    homePageActive: boolean;
    ordersPageActive: boolean;
    kitchenPageActive: boolean;
    reportsPageActive: boolean;
    tablesPageActive: boolean;
}

const initialState: PosNavStateInterface = {
    homePageActive: true,
    ordersPageActive: false,
    kitchenPageActive: false,
    reportsPageActive: false,
    tablesPageActive: false
};

export type NavStateAcceptedPayload =
    | 'homePageActive'
    | 'ordersPageActive'
    | 'kitchenPageActive'
    | 'reportsPageActive'
    | 'tablesPageActive';

const posNavStateSlice = createSlice({
    name: 'posNavStateSlice',
    initialState,
    reducers: {
        setPageActive: (state: PosNavStateInterface, action: PayloadAction<NavStateAcceptedPayload>) => {
            for (const key in state) {
                if (Object.hasOwnProperty.call(state, key)) {
                    if (action.payload === key) {
                        state[action.payload] = true;
                    } else {
                        state[key as NavStateAcceptedPayload] = false;
                    }
                }
            }
        }
    }
});

export const { setPageActive } = posNavStateSlice.actions;

export default posNavStateSlice.reducer;
