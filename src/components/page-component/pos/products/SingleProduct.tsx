import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import type { CourseItemType, PreparationTimeType } from '@/features/cart/courseSlice';
import styles from './styles/ProductList.module.scss';

interface PropInterface {
    id: string;
    name: string;
    price: number;
    image: string;
    preparationTime: PreparationTimeType;
    handleClick: (message: string, itemData: CourseItemType) => void;
}

export interface SnackbarMessage {
    message: string;
    key: number;
}

/**
 * Single product of product list
 * @param {string} id
 * @param {string} name
 * @param {number} price
 * @param {string} image
 * @param {PreparationTimeType} preparationTime
 * @param {Function} handleClick
 * @returns {JSX.Element}
 * @constructor
 */
const SingleProduct = ({ id, name, price, image, preparationTime, handleClick }: PropInterface) => {
    return (
        <Card
            className={styles.singleProduct}
            onClick={() => handleClick(`${name} added`, { id, name, price, quantity: 1, preparationTime })}
            sx={{ cursor: 'pointer' }}
        >
            <CardMedia
                sx={{
                    width: '100%'
                }}
            >
                <Image src={image} priority layout="responsive" alt={name} height={60} width="100%" />
                <Box sx={{ width: '100%', height: '12px', backgroundColor: '#F8F7FA' }} />
            </CardMedia>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 0.5,
                    p: 2,
                    paddingBottom: '16px !important',
                    paddingTop: '8px !important'
                }}
            >
                <Typography variant="body2" alignSelf="start">
                    {name}
                </Typography>
                <Typography
                    variant="body1"
                    alignSelf="flex-start"
                    sx={{ fontWeight: 'bolder', color: (theme) => theme.palette.primary.main }}
                >
                    £{price.toFixed(2)}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SingleProduct;
