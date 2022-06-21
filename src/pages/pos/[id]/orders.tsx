import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { setPageActive } from '@/features/nav-state/posNavStateSlice';

/**
 * Pos order list page
 * @returns {JSX.Element}
 * @constructor
 */
const Orders: NextPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageActive('ordersPageActive'));
    }, []);

    return <h1>Orders page</h1>;
};

// @ts-ignore
Orders.layout = 'posNavigation';

export default Orders;
