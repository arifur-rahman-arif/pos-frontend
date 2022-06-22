import * as React from 'react';
import { MINI_DRAWER_WIDTH } from '@/layouts/Navigation';
import { styled } from '@mui/material/styles';
import { MHidden } from '@/components/@material-extend';
import { Collapse, Drawer } from '@mui/material';

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
                <Collapse orientation="horizontal" in={true}>
                    <Drawer
                        sx={{
                            width: 400,
                            background: '#fff',
                            boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)',
                            top: 0,
                            left: 0,
                            '& .MuiDrawer-paper': {
                                width: MINI_DRAWER_WIDTH + 5,
                                boxSizing: 'border-box',
                                border: 'none',
                                borderRadius: '15px 0 0 15px',
                                overFlow: 'hidden',
                                py: 1,
                                minWidth: 400,
                                display: 'grid',
                                boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)'
                            }
                        }}
                        variant="permanent"
                        anchor="right"
                    >
                        <h3>Hello</h3>
                    </Drawer>
                </Collapse>
            </RootStyle>
        </MHidden>
    );
};

export default PosCart;
