import { NextPage } from 'next';
import { SITE_NAME } from '@/utils/global';
import Page from '@/components/Page';
import { CategoryList } from '@/components/product';

/**
 * Categories page. URL: /dashboard/product/categories
 * @returns {JSX.Element}
 * @constructor
 */
const CategoriesPage: NextPage = () => {
    const siteName = `${SITE_NAME} > Products > Categories`;

    return (
        <Page title={siteName}>
            <CategoryList />
        </Page>
    );
};

export default CategoriesPage;
