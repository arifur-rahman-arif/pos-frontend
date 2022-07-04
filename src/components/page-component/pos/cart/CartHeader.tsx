import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContentText,
    DialogTitle,
    IconButton,
    Stack
} from '@mui/material';
import { TooltipWrapper } from '@/components/page-component';
import { BsCartX } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { clearCourse, CourseSliceStateInterface } from '@/features/cart/courseSlice';
import { AppState } from '@/app/store';
import { clearItems, NormalCartStateInterface } from '@/features/cart/normalSlice';
import { CartStateInterface, changeCartType } from '@/features/cart/cartSlice';

/**
 * Cart header component
 * @returns {JSX.Element}
 * @constructor
 */
const CartHeader = () => {
    const dispatch = useDispatch();

    const { courses } = useSelector((state: AppState) => state.courseSlice as CourseSliceStateInterface);

    const { items } = useSelector((state: AppState) => state.normalSlice as NormalCartStateInterface);

    const { cartType } = useSelector((state: AppState) => state.cartSlice as CartStateInterface);

    const [dialogueOpen, setDialogueOpen] = useState<boolean>(false);

    return (
        <>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
                sx={{
                    pt: 1,
                    pb: 2,
                    px: 2
                }}
            >
                <Button variant="outlined" size="medium">
                    Table 24
                </Button>

                {cartType === 'course' && courses.length > 0 && (
                    <TooltipWrapper title="Clear the whole cart">
                        <IconButton
                            sx={{
                                fontSize: '1.6rem',
                                p: 1,
                                mr: -1,
                                mt: -1,
                                color: (theme) => theme.palette.error.main
                            }}
                            onClick={() => setDialogueOpen(true)}
                        >
                            <BsCartX />
                        </IconButton>
                    </TooltipWrapper>
                )}

                {cartType === 'normal' && Object.keys(items).length > 0 && (
                    <TooltipWrapper title="Clear the whole cart">
                        <IconButton
                            sx={{
                                fontSize: '1.6rem',
                                p: 1,
                                mr: -1,
                                mt: -1,
                                color: (theme) => theme.palette.error.main
                            }}
                            onClick={() => setDialogueOpen(true)}
                        >
                            <BsCartX />
                        </IconButton>
                    </TooltipWrapper>
                )}
            </Stack>

            <Dialog
                open={dialogueOpen}
                onClose={() => {
                    setDialogueOpen(false);
                }}
            >
                <DialogTitle sx={{ p: 2.5 }}>Clear cart</DialogTitle>

                <DialogContentText sx={{ px: 2.5, py: 1 }}>
                    Are you sure you want to clear the cart? All the items in the cart will be removed from
                    the cart
                </DialogContentText>

                <DialogActions sx={{ p: 2.5, gap: 1 }}>
                    <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => {
                            setDialogueOpen(false);

                            cartType === 'course' ? dispatch(clearCourse()) : dispatch(clearItems());

                            dispatch(changeCartType('course'));
                        }}
                    >
                        Yes
                    </Button>

                    <Button variant="outlined" size="small" onClick={() => setDialogueOpen(false)}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default CartHeader;
