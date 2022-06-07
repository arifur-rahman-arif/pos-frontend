import * as React from 'react';
import { NextPage } from 'next';
import { DashboardComponent } from '@/components/dashboard';

/**
 * Dashboard index page
 * @returns {JSX.Element}
 * @constructor
 */
const DashboardPage: NextPage = () => {
    return (
        <>
            <DashboardComponent />
        </>
    );
};

export default DashboardPage;
