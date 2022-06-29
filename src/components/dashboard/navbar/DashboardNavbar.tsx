import { alpha, styled } from '@mui/material/styles';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { MHidden } from '../../@material-extend';
import Searchbar from './Searchbar';
import NotificationsPopover from './NotificationsPopover';
import AccountPopover from './AccountPopover';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '@/layouts/Navigation';
import { useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import styles from './styles/styles.module.scss';
import { APP_BAR_DESKTOP, APP_BAR_MOBILE } from '@/layouts/Navigation/Navigation';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import ShopSelect from './ShopSelect';

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    backgroundColor: alpha('#F8F7FA', 0.72),
    transition: `max-width 225ms ${theme.transitions.easing.sharp}`,
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${MINI_DRAWER_WIDTH + 1}px)`
    }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APP_BAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: APP_BAR_DESKTOP,
        padding: theme.spacing(0, 5)
    }
}));

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DashboardNavbarInterface {
    toggleDrawer: (anchor: Anchor, open: boolean) => any;
    sidebarPosition: Anchor;
    noSideBar?: boolean;
}

/**
 * Navigation top bar component
 * @param {Function} toggleDrawer
 * @param {"top" | "left" | "bottom" | "right"} sidebarPosition
 * @param {boolean | undefined} noSideBar
 * @returns {JSX.Element}
 * @constructor
 */
const DashboardNavbar = ({ toggleDrawer, sidebarPosition, noSideBar = false }: DashboardNavbarInterface) => {
    const sidebarOpen = useSelector((state: AppState) => state.navSlice.sidebarOpen);

    const headerWidth = {
        maxWidth: sidebarOpen
            ? `calc(100% - ${DRAWER_WIDTH + 1}px)` // eslint-disable-line
            : `calc(100% - ${MINI_DRAWER_WIDTH + 1}px)` // eslint-disable-line
    };

    if (noSideBar) {
        headerWidth.maxWidth = 'unset';
        // @ts-ignore
        headerWidth.width = '100%';
    }

    return (
        <RootStyle className={styles.mobile_style} style={headerWidth}>
            <ToolbarStyle>
                {/* If noSideBar is false, then it should be visible in CSS breakpoint */}
                {!noSideBar && (
                    <MHidden width="lgUp">
                        <IconButton
                            onClick={toggleDrawer(sidebarPosition, true)}
                            sx={{ mr: 1, color: 'text.primary', p: 2, fontSize: '1.7rem' }}
                        >
                            <AiOutlineMenuUnfold />
                        </IconButton>
                    </MHidden>
                )}

                {/* If noSideBar is true, then it should be visible without any breakpoint */}
                {noSideBar && (
                    <IconButton
                        onClick={toggleDrawer(sidebarPosition, true)}
                        sx={{ color: 'text.primary', p: 2, fontSize: '1.6rem' }}
                    >
                        <AiOutlineMenuUnfold />
                    </IconButton>
                )}

                <Searchbar />

                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                    {!noSideBar && <ShopSelect />}
                    <NotificationsPopover />
                    <AccountPopover />
                </Stack>
            </ToolbarStyle>
        </RootStyle>
    );
};

export default DashboardNavbar;
