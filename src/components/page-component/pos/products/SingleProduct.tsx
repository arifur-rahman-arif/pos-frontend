import { SyntheticEvent, useEffect, useState } from 'react';
import { Card, CardContent, Snackbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import styles from './styles/ProductList.module.scss';
import { useDispatch } from 'react-redux';
import { addItem } from '@/features/course-features/courseSlice';
import { handleAlert } from '@/features/alert/alertSlice';
import MuiAlert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

interface PropInterface {
    id: string;
    name: string;
    price: number;
    image: string;
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
 * @returns {JSX.Element}
 * @constructor
 */
const SingleProduct = ({ id, name, price, image }: PropInterface) => {
    const dispatch = useDispatch();

    /**
     * Add item to courses list
     * @returns {any}
     */
    const handleAddItem = () => {
        try {
            return dispatch(
                addItem({
                    id,
                    name,
                    price,
                    quantity: 1
                })
            );
        } catch (error: any) {
            throw error;
        }
    };

    const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([]);

    const [open, setOpen] = useState(false);

    const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(undefined);

    useEffect(() => {
        if (snackPack.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo({ ...snackPack[0] });

            setSnackPack((prev) => prev.slice(1));

            setOpen(true);
        } else if (snackPack.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [snackPack, messageInfo, open]);

    // eslint-disable-next-line valid-jsdoc
    /**
     * Handle the product add to cart notifications
     * @returns {() => void}
     */
    const handleClick = (message: string) => () => {
        try {
            if (!handleAddItem()) throw new Error('Unable to add product');

            setSnackPack((prev) => [...prev, { message, key: Date.now() }]);
        } catch (error: any) {
            dispatch(handleAlert({ showAlert: true, alertMessage: error.message, alertType: 'error' }));
        }
    };

    /**
     * Close the product alert
     * @param {React.SyntheticEvent | Event} event
     * @param {string} reason
     */
    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    /**
     * Handle the alert exit
     */
    const handleExited = () => {
        setMessageInfo(undefined);
    };

    return (
        <>
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
                    onClick={handleClick('Product added')}
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
                        £{price.toFixed(2)}
                    </Typography>
                </CardContent>
            </Card>

            <Snackbar
                key={messageInfo ? messageInfo.key : undefined}
                open={open}
                onClose={handleClose}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                TransitionProps={{ onExited: handleExited }}
                TransitionComponent={Slide}
            >
                <MuiAlert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    className={styles.alert}
                    sx={{
                        width: '100%',

                        backgroundColor: 'rgb(46, 125, 50)',

                        '& .MuiAlert-icon': {
                            color: '#fff',

                            Opacity: '1'
                        },

                        '& .MuiAlert-action': {
                            color: '#fff',

                            Opacity: '1'
                        }
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            textTransform: 'capitalized',
                            color: '#fff'
                        }}
                    >
                        {name} added
                    </Typography>
                </MuiAlert>
            </Snackbar>
        </>
    );
};

export default SingleProduct;
