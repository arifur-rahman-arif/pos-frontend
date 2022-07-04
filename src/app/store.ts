import { configureStore } from '@reduxjs/toolkit';

import alertSlice from '@/features/alert/alertSlice';
import { authApi } from '@/services/auth';
import navSlice from '@/features/nav-state/navSlice';
import couponSlice from '@/features/coupon/couponSlice';
import shopSelectSlice from '@/features/shop/shopSelectSlice';
import shopFormSlice from '@/features/shop/shopFormSlice';
import posNavStateSlice from '@/features/nav-state/posNavStateSlice';
import courseSlice from '@/features/cart/courseSlice';
import cartSlice from '@/features/cart/cartSlice';
import normalSlice from '@/features/cart/normalSlice';

/**
 * Redux make store function to create the store
 * @returns any
 */
export const makeStore = () => {
    return configureStore({
        reducer: {
            alert: alertSlice,
            navSlice,
            couponSlice,
            shopSelectSlice,
            shopFormSlice,
            posNavStateSlice,
            cartSlice,
            normalSlice,
            courseSlice,
            [authApi.reducerPath]: authApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
    });
};

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export default store;
