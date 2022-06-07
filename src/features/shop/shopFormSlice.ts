import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type daysOfWeek = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export type currency = 'GBP' | 'USD';

export interface ShopFormSliceInterface {
    shopName: string;
    registryNumber: string;
    address1: string;
    address2: string;
    phone: string;
    establishedDate: string;
    currency: currency;
    workDays: number;
    workingStartDay: daysOfWeek;
    workingEndDay: daysOfWeek;
    shopDescription: string;
}

const initialState: ShopFormSliceInterface = {
    shopName: '',
    registryNumber: '',
    address1: '',
    address2: '',
    phone: '',
    establishedDate: 'null',
    currency: 'GBP',
    workDays: 22,
    workingStartDay: 'sunday',
    workingEndDay: 'friday',
    shopDescription: ''
};

const shopFormSlice = createSlice({
    name: 'shopFormSlice',
    initialState,
    reducers: {
        handleShopName: (state: ShopFormSliceInterface, action: PayloadAction<string>) => {
            state.shopName = action.payload || '';
        },
        handleRegistryNumber: (state: ShopFormSliceInterface, action: PayloadAction<string>) => {
            state.registryNumber = action.payload || '';
        },
        handleAddress1: (state: ShopFormSliceInterface, action: PayloadAction<string>) => {
            state.address1 = action.payload || '';
        },
        handleAddress2: (state: ShopFormSliceInterface, action: PayloadAction<string>) => {
            state.address2 = action.payload || '';
        },
        handlePhone: (state: ShopFormSliceInterface, action: PayloadAction<string>) => {
            state.phone = action.payload || '';
        },
        handleEstablishedDate: (state: ShopFormSliceInterface, action: PayloadAction<string>) => {
            state.establishedDate = action.payload || '';
        },
        handleCurrency: (state: ShopFormSliceInterface, action: PayloadAction<currency>) => {
            state.currency = action.payload || 'GBP';
        },
        handleWorkDays: (state: ShopFormSliceInterface, action: PayloadAction<number>) => {
            state.workDays = action.payload || 0;
        },
        handleWorkingStartDay: (state: ShopFormSliceInterface, action: PayloadAction<daysOfWeek>) => {
            state.workingStartDay = action.payload || 'sunday';
        },
        handleWorkingEndDay: (state: ShopFormSliceInterface, action: PayloadAction<daysOfWeek>) => {
            state.workingEndDay = action.payload || 'friday';
        },
        handleShopDescription: (state: ShopFormSliceInterface, action: PayloadAction<string>) => {
            state.shopDescription = action.payload || '';
        }
    }
});

export const {
    handleShopName,
    handleRegistryNumber,
    handleAddress1,
    handleAddress2,
    handlePhone,
    handleEstablishedDate,
    handleCurrency,
    handleWorkDays,
    handleWorkingStartDay,
    handleWorkingEndDay,
    handleShopDescription
} = shopFormSlice.actions;

export default shopFormSlice.reducer;
