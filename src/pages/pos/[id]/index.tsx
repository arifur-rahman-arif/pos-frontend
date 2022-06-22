import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { useDispatch } from 'react-redux';
import { setPageActive } from '@/features/nav-state/posNavStateSlice';
import { ProductList, TopPanel } from '@/components/page-component';
import { Grid } from '@mui/material';
import { Scrollbar } from '@/components/scrollbar';

/**
 * Single product page to edit or view the product details in depth
 * @returns {JSX.Element}
 * @constructor
 */
const PosPage: NextPage = () => {
    const siteName = `${SITE_NAME} | POS`;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageActive('homePageActive'));
    }, []);

    return (
        <Page title={siteName}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TopPanel />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sx={{
                        maxHeight: 'calc(100vh - 130px)',
                        ml: -3
                    }}
                >
                    <Scrollbar
                        sx={{
                            '& .simplebar-content': {
                                display: 'flex',
                                flexDirection: 'column'
                            },
                            pl: 3,
                            pr: 3,
                            pb: 3
                        }}
                    >
                        <ProductList />
                    </Scrollbar>
                </Grid>
            </Grid>
        </Page>
    );
};

// @ts-ignore
PosPage.layout = 'posNavigation';

export default PosPage;
