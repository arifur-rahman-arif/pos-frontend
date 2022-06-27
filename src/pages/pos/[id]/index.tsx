import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { useDispatch } from 'react-redux';
import { setPageActive } from '@/features/nav-state/posNavStateSlice';
import { CategoriesSection, PosCart, ProductList, TopPanel } from '@/components/page-component';
import { Stack } from '@mui/material';
import { Scrollbar } from '@/components/scrollbar';
import { Box } from '@mui/system';
import { MHidden } from '@/components/@material-extend';

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
            <Stack direction="row" gap={0}>
                <Stack
                    gap={3}
                    sx={{
                        width: {
                            md: 'calc(100% - 360px)',
                            sm: '100%'
                        }
                    }}
                >
                    <TopPanel />

                    <CategoriesSection />

                    <Box
                        sx={{
                            maxHeight: 'calc(100vh - 130px)'
                        }}
                    >
                        <Scrollbar
                            sx={{
                                '& .simplebar-content': {
                                    display: 'flex',
                                    flexDirection: 'column'
                                },
                                px: 2,
                                pb: 3
                            }}
                        >
                            <ProductList />
                        </Scrollbar>
                    </Box>
                </Stack>

                <MHidden width="mdDown">
                    <Stack
                        sx={{
                            width: 350
                        }}
                    >
                        <PosCart />
                    </Stack>
                </MHidden>
            </Stack>
        </Page>
    );
};

// @ts-ignore
PosPage.layout = 'posNavigation';

export default PosPage;
