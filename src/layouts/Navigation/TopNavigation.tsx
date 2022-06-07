import { KeyboardEvent, MouseEvent, ReactNode } from 'react';

import { styled } from '@mui/material/styles';
import { DashboardNavbar } from '@/components/dashboard/navbar';
import { Anchor, toggleNavbar } from '@/features/nav-state/navSlice';
import { useDispatch } from 'react-redux';
import { Sidebar } from '@/components/sidebar';

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
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
    },
    [theme.breakpoints.down('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

const sidebarPosition = 'left';

/**
 * Top navigation layout component for public routes
 * @param {TopNavigationProps} children
 * @returns {JSX.Element}
 * @constructor
 */
const TopNavigation = ({ children }: TopNavigationProps): JSX.Element => {
    const dispatch = useDispatch();

    /**
     * Toggle the mobile navigation drawer
     * @param {Anchor} anchor
     * @param {boolean} open
     * @returns {React.Dispatch}
     */
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
        if (
            event.type === 'keydown' && // eslint-disable-line
            ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        dispatch(
            toggleNavbar({
                sidebarPosition,
                open
            })
        );
    };

    return (
        <>
            <RootStyle>
                <DashboardNavbar
                    toggleDrawer={toggleDrawer}
                    sidebarPosition={sidebarPosition}
                    noSideBar={true}
                />
                <Sidebar toggleDrawer={toggleDrawer} sidebarPosition={sidebarPosition} noSideBar={true} />
                <MainStyle>{children}</MainStyle>
            </RootStyle>
        </>
    );
};

export default TopNavigation;
