import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { setPageActive } from '@/features/nav-state/posNavStateSlice';

/**
 * Pos report list page
 * @returns {JSX.Element}
 * @constructor
 */
const Reports: NextPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageActive('reportsPageActive'));
    }, []);

    return <h1>Reports page</h1>;
};

// @ts-ignore
Reports.layout = 'posNavigation';

export default Reports;
