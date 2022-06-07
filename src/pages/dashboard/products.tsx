import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { ProductList } from '@/components/product';

/**
 * Products page for /dashboard/products url
 * @returns {JSX.Element}
 * @constructor
 */
const ProductsPage: NextPage = (): JSX.Element => {
    const siteName = `${SITE_NAME} | Products`;

    return (
        <Page title={siteName}>
            <ProductList />
        </Page>
    );
};

export default ProductsPage;
