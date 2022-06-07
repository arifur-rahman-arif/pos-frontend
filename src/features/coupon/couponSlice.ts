import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CouponSliceInterface {
    tabIndex: number;
    couponCode: string;
    couponType: string;
    discountAmount: number;
    startingDate: string;
    expiryDate: string;
    couponDescription: string;
    minimumCartValue: number;
    maximumCartValue: number;
    individualUseOnly: boolean;
    excludeSaleItems: boolean;
    usageLimitPerCoupon: number;
    usageLimitPerUser: number;
    includingProducts: Array<string>;
    excludingProducts: Array<string>;
    includingTerms: Array<string>;
    excludingTerms: Array<string>;
    includingUsers: Array<string>;
    excludingUsers: Array<string>;
}

const initialState: CouponSliceInterface = {
    tabIndex: 0,
    couponCode: '',
    couponType: '',
    discountAmount: 0,
    startingDate: JSON.stringify(new Date()),
    expiryDate: 'null',
    couponDescription: '',
    minimumCartValue: 0,
    maximumCartValue: 0,
    individualUseOnly: false,
    excludeSaleItems: true,
    usageLimitPerCoupon: 0,
    usageLimitPerUser: 0,
    includingProducts: [],
    excludingProducts: [],
    includingTerms: [],
    excludingTerms: [],
    includingUsers: [],
    excludingUsers: []
};

const couponSlice = createSlice({
    name: 'couponSlice',
    initialState,
    reducers: {
        handleTabIndex: (state: CouponSliceInterface, action: PayloadAction<number>) => {
            state.tabIndex = action.payload || 0;
        },
        handleCouponCode: (state: CouponSliceInterface, action: PayloadAction<string>) => {
            state.couponCode = action.payload || '';
        },
        handleCouponType: (state: CouponSliceInterface, action: PayloadAction<string>) => {
            state.couponType = action.payload || '';
        },
        handleCouponDiscount: (state: CouponSliceInterface, action: PayloadAction<number>) => {
            state.discountAmount = action.payload || 0;
        },
        handleStartingDate: (state: CouponSliceInterface, action: PayloadAction<string>) => {
            state.startingDate = action.payload || '';
        },
        handleExpiryDate: (state: CouponSliceInterface, action: PayloadAction<string>) => {
            state.expiryDate = action.payload || '';
        },
        handleCouponDescription: (state: CouponSliceInterface, action: PayloadAction<string>) => {
            state.couponDescription = action.payload || '';
        },
        handleMinimumCartValue: (state: CouponSliceInterface, action: PayloadAction<number>) => {
            state.minimumCartValue = action.payload || 0;
        },
        handleMaximumCartValue: (state: CouponSliceInterface, action: PayloadAction<number>) => {
            state.maximumCartValue = action.payload || 0;
        },
        handleIndividualUseOnly: (state: CouponSliceInterface, action: PayloadAction<boolean>) => {
            state.individualUseOnly = action.payload || false;
        },
        handleExcludeSaleItems: (state: CouponSliceInterface, action: PayloadAction<boolean>) => {
            state.excludeSaleItems = action.payload || false;
        },
        handleUsageLimitPerCoupon: (state: CouponSliceInterface, action: PayloadAction<number>) => {
            state.usageLimitPerCoupon = action.payload || 0;
        },
        handleUsageLimitPerUser: (state: CouponSliceInterface, action: PayloadAction<number>) => {
            state.usageLimitPerUser = action.payload || 0;
        },
        handleIncludingProducts: (state: CouponSliceInterface, action: PayloadAction<Array<string>>) => {
            state.includingProducts = action.payload || [];
        },
        handleExcludingProducts: (state: CouponSliceInterface, action: PayloadAction<Array<string>>) => {
            state.excludingProducts = action.payload || [];
        },
        handleIncludingTerms: (state: CouponSliceInterface, action: PayloadAction<Array<string>>) => {
            state.includingTerms = action.payload || [];
        },
        handleExcludingTerms: (state: CouponSliceInterface, action: PayloadAction<Array<string>>) => {
            state.excludingTerms = action.payload || [];
        },
        handleIncludingUsers: (state: CouponSliceInterface, action: PayloadAction<Array<string>>) => {
            state.includingUsers = action.payload || [];
        },
        handleExcludingUsers: (state: CouponSliceInterface, action: PayloadAction<Array<string>>) => {
            state.excludingUsers = action.payload || [];
        }
    }
});

export const {
    handleTabIndex,
    handleCouponCode,
    handleCouponType,
    handleCouponDiscount,
    handleStartingDate,
    handleExpiryDate,
    handleCouponDescription,
    handleMinimumCartValue,
    handleMaximumCartValue,
    handleIndividualUseOnly,
    handleExcludeSaleItems,
    handleUsageLimitPerCoupon,
    handleUsageLimitPerUser,
    handleIncludingProducts,
    handleExcludingProducts,
    handleIncludingTerms,
    handleExcludingTerms,
    handleIncludingUsers,
    handleExcludingUsers
} = couponSlice.actions;

export default couponSlice.reducer;
