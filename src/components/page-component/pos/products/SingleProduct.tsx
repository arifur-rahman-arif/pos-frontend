import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import styles from './styles/ProductList.module.scss';

interface PropInterface {
    name: string;
    price: string;
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
            >
                <Box
                    sx={{
                        borderRadius: '50%',
                        position: 'relative',
                        minWidth: '154px',
                        width: {
                            xs: '154px',
                            sm: '100%',
                            lg: '200px'
                        },
                        height: {
                            xs: '154px',
                            sm: '165px',
                            md: '165px',
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
