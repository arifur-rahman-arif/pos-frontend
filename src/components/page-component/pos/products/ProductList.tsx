import styles from './styles/ProductList.module.scss';
import { Grid } from '@mui/material';
import SingleProduct from './SingleProduct';

const productList = [
    {
        productName: 'Product #1',
        productPrice: '23',
        productImage: '/static/mock-images/products/product_1.jpg'
    },
    {
        productName: 'Product #2',
        productPrice: '24',
        productImage: '/static/mock-images/products/product_2.jpg'
    },
    {
        productName: 'Product #3',
        productPrice: '25',
        productImage: '/static/mock-images/products/product_3.jpg'
    },
    {
        productName: 'Product #4',
        productPrice: '22',
        productImage: '/static/mock-images/products/product_4.jpg'
    },
    {
        productName: 'Product #5',
        productPrice: '43',
        productImage: '/static/mock-images/products/product_5.jpg'
    },
    {
        productName: 'Product #6',
        productPrice: '13',
        productImage: '/static/mock-images/products/product_6.jpg'
    },
    {
        productName: 'Product #7',
        productPrice: '33',
        productImage: '/static/mock-images/products/product_7.jpg'
    },
    {
        productName: 'Product #8',
        productPrice: '27',
        productImage: '/static/mock-images/products/product_8.jpg'
    },
    {
        productName: 'Product #9',
        productPrice: '21',
        productImage: '/static/mock-images/products/product_9.jpg'
    },
    {
        productName: 'Product #10',
        productPrice: '20',
        productImage: '/static/mock-images/products/product_10.jpg'
    }
];

/**
 * Product list component
 * @returns {JSX.Element}
 * @constructor
 */
const ProductList = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className={styles.product_list}>
                {productList.map((product, index) => (
                    <SingleProduct
                        key={index}
                        name={product.productName}
                        price={product.productPrice}
                        image={product.productImage}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default ProductList;
