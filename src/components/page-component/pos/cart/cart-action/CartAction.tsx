import { Button, Stack } from '@mui/material';
import { AiFillPrinter } from 'react-icons/ai';
import { TooltipWrapper } from '@/components/page-component';
import { MdOutlineFrontHand } from 'react-icons/md';
import { Box } from '@mui/system';
import CartFire from './cart-fire/CartFire';
import { useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import { CartStateInterface } from '@/features/cart/cartSlice';
import { CourseSliceStateInterface } from '@/features/cart/courseSlice';

/**
 * Cart action component for handling the cart
 * @returns {JSX.Element}
 * @constructor
 */
const CartAction = () => {
    const { cartType } = useSelector((state: AppState) => state.cartSlice as CartStateInterface);

    const { courses } = useSelector((state: AppState) => state.courseSlice as CourseSliceStateInterface);

    return (
        <Stack
            direction="row"
            gap={2}
            sx={{
                p: 2,
                mb: 1
            }}
        >
            <TooltipWrapper title="Print the cart" placement="top">
                <Button
                    variant="contained"
                    sx={{
                        fontSize: '1.7rem',
                        p: 2,
                        width: 65,
                        height: 48,
                        borderRadius: '15px'
                    }}
                >
                    <AiFillPrinter />
                </Button>
            </TooltipWrapper>

            {cartType === 'course' && courses.length > 0 && <CartFire />}

            <Box
                sx={{
                    ml: 'auto'
                }}
            >
                <TooltipWrapper title="Hold the order" placement="top">
                    <Button
                        variant="contained"
                        sx={{
                            fontSize: '1.7rem',
                            p: 2,
                            width: 65,
                            height: 48,
                            borderRadius: '15px'
                        }}
                    >
                        <MdOutlineFrontHand />
                    </Button>
                </TooltipWrapper>
            </Box>
        </Stack>
    );
};

export default CartAction;
