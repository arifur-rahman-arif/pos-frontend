import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { setPageActive } from '@/features/nav-state/posNavStateSlice';

/**
 * Pos table list page
 * @returns {JSX.Element}
 * @constructor
 */
const Tables: NextPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageActive('tablesPageActive'));
    }, []);

    return <h1>Tables page</h1>;
};

// @ts-ignore
Tables.layout = 'posNavigation';

export default Tables;
