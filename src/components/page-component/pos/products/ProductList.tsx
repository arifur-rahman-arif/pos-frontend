import styles from './styles/ProductList.module.scss';
import { Grid, Snackbar, Typography } from '@mui/material';
import SingleProduct from './SingleProduct';
import { ProductListType } from 'src/pages/pos/[id]';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import { handleAlert } from '@/features/alert/alertSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, CourseItemType, CourseSliceStateInterface } from '@/features/cart/courseSlice';
import { AppState } from '@/app/store';
import { changeCartType, setScrollIntoView } from '@/features/cart/cartSlice';
import { CartItemType, addItem as normalAddItem } from '@/features/cart/normalSlice';

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
    const dispatch = useDispatch();

    const { courses } = useSelector((state: AppState) => state.courseSlice as CourseSliceStateInterface);

    const [snackPack, setSnackPack] = useState<readonly SnackbarMessage[]>([]);

    const [open, setOpen] = useState(false);

    const [messageInfo, setMessageInfo] = useState<SnackbarMessage | undefined>(undefined);

    const [timer, setTimer] = useState<any>();

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

    /**
     * Add item to courses listing
     * @param {CourseItemType} itemData
     * @returns {any}
     */
    const handleAddItem = (itemData: CourseItemType) => {
        try {
            return dispatch(addItem(itemData));
        } catch (error: any) {
            throw error;
        }
    };

    /**
     * Handle the product add to cart notifications
     * @param {string} message
     * @param {CourseItemType} itemData
     * @returns {any}
     */
    const handleClick = (message: string, itemData: CourseItemType | CartItemType) => {
        try {
            const activeCourseIndex = getActiveCourseIndex();

            // If there are course created than add the items to those course
            // Or else create a normal cart
            if (courses.length > 0) {
                if (activeCourseIndex === undefined) {
                    return dispatch(
                        handleAlert({
                            showAlert: true,
                            alertMessage: 'Please select a course first to add item',
                            alertType: 'warning'
                        })
                    );
                }

                (itemData as CourseItemType).courseIndex = activeCourseIndex as number;

                if (!handleAddItem(itemData)) throw new Error('Unable to add product');
            } else {
                dispatch(changeCartType('normal'));

                dispatch(normalAddItem(itemData as CartItemType));
            }

            dispatch(setScrollIntoView(true));

            clearTimeout(timer);

            const timeoutID = setTimeout(() => {
                dispatch(setScrollIntoView(false));
            }, 800);

            setTimer(timeoutID);

            setSnackPack((prev) => [...prev, { message, key: Date.now() }]);
        } catch (error: any) {
            console.error(error);
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

    /**
     * Get the active course index to add products to the cart
     * @returns {number | boolean}
     */
    const getActiveCourseIndex = (): number | undefined => {
        let courseIndex;

        courses.forEach((course, index) => {
            if (course.open) return (courseIndex = index);
        });

        return courseIndex;
    };

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
                            handleClick={handleClick}
                        />
                    ))}
                </Grid>
            </Grid>

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
                        alignItems: 'center',
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
                        {messageInfo?.message || ''}
                    </Typography>
                </MuiAlert>
            </Snackbar>
        </>
    );
};

export default ProductList;
