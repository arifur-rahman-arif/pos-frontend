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
import { faker } from '@faker-js/faker';
import type { PreparationTimeType } from '@/features/cart/courseSlice';

export type ProductListType = {
    id: string;
    name: string;
    price: number;
    image: string;
    preparationTime: PreparationTimeType;
};

/**
 * Pos products list page component
 * @param {any} props
 * @returns {JSX.Element}
 * @constructor
 */
const PosPage: NextPage = (props: any) => {
    const siteName = `${SITE_NAME} | POS`;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageActive('homePageActive'));
    }, []);

    const productList: Array<ProductListType> = props.products;

    return (
        <Page title={siteName}>
            <Stack direction="row" gap={0}>
                <Stack
                    gap={3}
                    sx={{
                        width: {
                            md: 'calc(100% - 340px)',
                            sm: '100%'
                        }
                    }}
                >
                    <TopPanel />

                    <CategoriesSection />

                    <Box
                        sx={{
                            maxHeight: 'calc(100vh - 340px)'
                        }}
                    >
                        <Scrollbar
                            sx={{
                                '& .simplebar-content': {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    maxHeight: 'calc(100vh - 340px)'
                                },
                                px: 2,
                                pb: 3
                            }}
                        >
                            <ProductList productList={productList} />
                        </Scrollbar>
                    </Box>
                </Stack>

                <MHidden width="mdDown">
                    <Stack
                        sx={{
                            width: 330
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

/**
 * Server component of ProductList
 * @returns {{props: {}}}
 */
export const getServerSideProps = async () => {
    const productList: Array<ProductListType> = [];

    for (let i = 0; i < 20; i++) {
        productList.push({
            id: faker.database.mongodbObjectId(),
            name: faker.commerce.productName(),
            price: Number(faker.commerce.price(10, 50, 2)),
            image: faker.image.food(500, 400, true),
            preparationTime: {
                min: Number(faker.commerce.price(1, 59)),
                hour: Number(faker.commerce.price(0, 1))
            }
        });
    }

    return {
        props: {
            products: productList
        }
    };
};

export default PosPage;
