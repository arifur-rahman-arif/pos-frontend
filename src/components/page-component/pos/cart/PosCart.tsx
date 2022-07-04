import * as React from 'react';
import { styled } from '@mui/material/styles';
import { MHidden } from '@/components/@material-extend';
import { Drawer } from '@mui/material';
import CartHeader from './CartHeader';
import CourseSection from './courseType/CourseSection';
import FeeSection from './FeeSection';
import CartAction from './CartAction';
import PayButton from './PayButton';
import { useSelector } from 'react-redux';
import { CartStateInterface } from '@/features/cart/cartSlice';
import { AppState } from '@/app/store';
import CartSection from './normalType/CartSection';

const RootStyle = styled('div')(({ theme }) => ({
    minHeight: '100%',
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0
    }
}));

/**
 * Pos navigation sidebar of pos page
 * @returns {JSX.Element}
 * @constructor
 */
const PosCart = () => {
    const { cartType } = useSelector((state: AppState) => state.cartSlice as CartStateInterface);

    return (
        <MHidden width="mdDown">
            <RootStyle>
                <Drawer
                    sx={{
                        width: 335,
                        background: '#fff',
                        boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)',
                        top: 0,
                        left: 0,
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            border: 'none',
                            borderRadius: '25px 0 0 25px',
                            overFlow: 'hidden',
                            py: 1,
                            width: 335,
                            boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)'
                        }
                    }}
                    variant="permanent"
                    anchor="right"
                >
                    <CartHeader />

                    {cartType === 'course' && <CourseSection />}

                    {cartType === 'normal' && <CartSection />}

                    <FeeSection />

                    <CartAction />

                    <PayButton />
                </Drawer>
            </RootStyle>
        </MHidden>
    );
};

export default PosCart;
