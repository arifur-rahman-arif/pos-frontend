import * as React from 'react';
import { styled } from '@mui/material/styles';
import { MHidden } from '@/components/@material-extend';
import { Drawer } from '@mui/material';
import CartHeader from './CartHeader';
import CourseSection from './CourseSection';
import FeeSection from '@/components/page-component/pos/cart/FeeSection';
import CartAction from '@/components/page-component/pos/cart/CartAction';
import PayButton from '@/components/page-component/pos/cart/PayButton';

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
    return (
        <MHidden width="mdDown">
            <RootStyle
                sx={{
                    ml: -6
                }}
            >
                <Drawer
                    sx={{
                        width: 400,
                        background: '#fff',
                        boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)',
                        top: 0,
                        left: 0,
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            border: 'none',
                            borderRadius: '15px 0 0 15px',
                            overFlow: 'hidden',
                            py: 1,
                            width: 400,
                            boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)'
                        }
                    }}
                    variant="permanent"
                    anchor="right"
                >
                    <CartHeader />

                    <CourseSection />

                    <FeeSection />

                    <CartAction />

                    <PayButton />
                </Drawer>
            </RootStyle>
        </MHidden>
    );
};

export default PosCart;
