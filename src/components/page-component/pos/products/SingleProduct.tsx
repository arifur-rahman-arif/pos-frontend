import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import styles from './styles/ProductList.module.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '@/features/course-features/courseSlice';
import { handleAlert } from '@/features/alert/alertSlice';

interface PropInterface {
    name: string;
    price: number;
    image: string;
}

/**
 * Single product of product list
 * @param {string} name
 * @param {number} price
 * @param {string} image
 * @returns {JSX.Element}
 * @constructor
 */
const SingleProduct = ({ name, price, image }: PropInterface) => {
    const dispatch = useDispatch();

    /**
     * Add item to courses list
     */
    const handleItem = () => {
        try {
            dispatch(
                addItem({
                    name,
                    price,
                    quantity: 1
                })
            );

            dispatch(handleAlert({ showAlert: true, alertMessage: 'Product added', alertType: 'success' }));
        } catch (error) {
            dispatch(
                handleAlert({ showAlert: true, alertMessage: 'Failed to add product', alertType: 'error' })
            );
        }
    };

    return (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                    p: 2,
                    paddingBottom: '16px !important'
                }}
                onClick={handleItem}
            >
                <Box
                    sx={{
                        borderRadius: '50%',
                        position: 'relative',
                        minWidth: '154px',
                        maxWidth: 200,
                        width: {
                            xs: '154px',
                            sm: '100%',
                            lg: '200px'
                        },
                        height: {
                            xs: '154px',
                            sm: '165px',
                            md: '170px',
                            lg: '200px'
                        },
                        overflow: 'hidden'
                    }}
                >
                    <div className={styles.image_background}></div>
                    <div className={styles.image_style}>
                        <Image src={image} layout="fill" />
                    </div>
                </Box>

                <Typography variant="body1" alignSelf="flex-start">
                    {name}
                </Typography>
                <Typography
                    variant="h5"
                    alignSelf="flex-start"
                    sx={{ fontWeight: 'bolder', color: (theme) => theme.palette.primary.main }}
                >
                    £{price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SingleProduct;
