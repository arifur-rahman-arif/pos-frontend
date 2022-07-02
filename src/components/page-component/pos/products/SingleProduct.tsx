import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { CourseItemType } from '@/features/course/courseSlice';

interface PropInterface {
    id: string;
    name: string;
    price: number;
    image: string;
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
 * @param {Function} handleClick
 * @returns {JSX.Element}
 * @constructor
 */
const SingleProduct = ({ id, name, price, image, handleClick }: PropInterface) => {
    return (
        <Card
            onClick={() => handleClick(`${name} added`, { id, name, price, quantity: 1 })}
            sx={{ cursor: 'pointer' }}
        >
            <CardMedia
                sx={{
                    width: '100%'
                }}
            >
                <Image src={image} layout="responsive" alt={name} height={60} width="100%" />
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
