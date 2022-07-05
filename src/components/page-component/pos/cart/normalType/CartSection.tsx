import { Stack } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import { CartStateInterface } from '@/features/cart/cartSlice';
import { NormalCartStateInterface } from '@/features/cart/normalSlice';
import CartItem from 'src/components/page-component/pos/cart/normalType/CartItem';

/**
 * Normal cart component
 * @returns {JSX.Element}
 * @constructor
 */
const CartSection = () => {
    const { items } = useSelector((state: AppState) => state.normalSlice as NormalCartStateInterface);

    const { scrollIntoView } = useSelector((state: AppState) => state.cartSlice as CartStateInterface);

    const divRef = useRef(null);

    useEffect(() => {
        if (scrollIntoView) {
            // @ts-ignore
            divRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    });

    return (
        <Stack
            sx={{
                pb: 2
            }}
        >
            <Stack gap={1}>
                <Stack
                    id="pos_course_container"
                    sx={{
                        maxHeight: 'calc(100vh - 400px)',
                        minHeight: '300px',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                        pb: 2,
                        px: 2
                    }}
                >
                    <Stack>
                        {items && // eslint-disable-line
                            Object.keys(items).map((key, index) => (
                                <CartItem key={index} item={items[key]} />
                            ))}
                    </Stack>

                    <div ref={divRef} />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default CartSection;
