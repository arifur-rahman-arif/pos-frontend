import styles from './styles/ProductList.module.scss';
import { Grid } from '@mui/material';
import SingleProduct from './SingleProduct';
import { ProductListType } from 'src/pages/pos/[id]';
import React from 'react';

interface PropInterface {
    productList: Array<ProductListType>;
}

export interface SnackbarMessage {
    message: string;
    key: number;
}

/**
 * Product list component
 * @returns {JSX.Element}
 * @constructor
 */
const ProductList = ({ productList }: PropInterface) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} className={styles.product_list}>
                    {productList.map((product: ProductListType, index) => (
                        <SingleProduct
                            id={product.id}
                            key={index}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </Grid>
            </Grid>
        </>
    );
};

export default ProductList;
