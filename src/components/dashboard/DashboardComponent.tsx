import { Box, Grid, Typography } from '@mui/material';
import Page from '../Page';
import { SITE_NAME } from '@/utils/global';
import { AppItemOrders, AppNewsUpdate, AppNewUsers, AppWeeklySales } from './app';

/**
 * Dashboard component to show the dashboard page
 * @returns {JSX.Element}
 * @constructor
 */
const DashboardComponent = () => {
    const siteName = `${SITE_NAME} | Dashboard`;

    return (
        <Page title={siteName}>
            <Box sx={{ pb: 5 }}>
                <Typography variant="h4">Hi, Welcome back</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <AppWeeklySales />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppNewUsers />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppItemOrders />
                </Grid>

                <Grid item xs={12} md={12} lg={10}>
                    <AppNewsUpdate />
                </Grid>
            </Grid>
        </Page>
    );
};

export default DashboardComponent;
