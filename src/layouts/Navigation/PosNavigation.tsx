import { ReactNode } from 'react';

import { styled } from '@mui/material/styles';
import { PosSidebar } from '@/components/sidebar';

type TopNavigationProps = {
    children: ReactNode;
};

export const APP_BAR_MOBILE = 64;
export const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down('lg')]: {
        paddingTop: theme.spacing(4),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(5),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

/**
 * Top navigation layout component for public routes
 * @param {TopNavigationProps} children
 * @returns {JSX.Element}
 * @constructor
 */
const PosNavigation = ({ children }: TopNavigationProps): JSX.Element => {
    return (
        <>
            <RootStyle>
                <PosSidebar />
                <MainStyle>{children}</MainStyle>
            </RootStyle>
        </>
    );
};

export default PosNavigation;
