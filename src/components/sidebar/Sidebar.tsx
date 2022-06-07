import { CSSObject, styled, Theme } from '@mui/material/styles';
import { Scrollbar } from '@/components/scrollbar';
import Link from 'next/link';
import MuiDrawer from '@mui/material/Drawer';
import { Box, Drawer as MobileDrawer, IconButton, Stack } from '@mui/material';
import Logo from '@/components/Logo';
import { NavSection } from '@/components/nav-section';
import sidebarMenuList from '@/components/sidebar/sidebarMenuList';
import { MHidden } from '@/components/@material-extend';
import { SideBarContent } from '@/components/sidebar/SideBarContent';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import { Anchor, maximizeSidebar, minimizeSidebar } from '@/features/nav-state/navSlice';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '@/layouts/Navigation';
import { Account } from '@/components/sidebar/Account';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

/**
 * Function to open the sidebar
 * @param {Theme} theme
 * @returns {CSSObject}
 */
const openedMixin = (theme: Theme): CSSObject => ({
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

/**
 * Function to close the sidebar
 * @param {Theme} theme
 * @returns {CSSObject}
 */
const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: MINI_DRAWER_WIDTH
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0
    }
}));

interface DashboardSidebarInterface {
    sidebarPosition: Anchor;
    noSideBar?: boolean;
    toggleDrawer: (anchor: Anchor, open: boolean) => any;
}

/**
 * Header section of the navigation sidebar
 * @param {any} toggleDrawer
 * @returns {JSX.Element}
 * @constructor
 */
const SidebarHeader = ({ toggleDrawer }: { toggleDrawer: any }) => {
    return (
        <Box sx={{ px: 3, py: 3 }} onClick={toggleDrawer}>
            <Link href="/" passHref>
                <a>
                    <Logo />
                </a>
            </Link>
        </Box>
    );
};

/**
 * Sidebar of the navigation menu
 * @param {"top" | "left" | "bottom" | "right"} sidebarPosition
 * @param {boolean | undefined} noSideBar
 * @param {Function} toggleDrawer
 * @returns {JSX.Element}
 * @constructor
 */
const Sidebar = ({
    sidebarPosition,
    noSideBar = false,
    toggleDrawer
}: DashboardSidebarInterface): JSX.Element => {
    const sidebarOpen = useSelector((state: AppState) => state.navSlice.sidebarOpen);

    // Mobile/public navigation bar states
    const navbarState = useSelector((state: AppState) => state.navSlice.navbarState);

    const dispatch = useDispatch();

    /**
     * Content of the mobile menu
     * @param {Anchor} anchor
     * @returns {JSX.Element}
     */
    const list = (anchor: Anchor) => (
        <Scrollbar
            sx={{
                height: '100%',
                '& .simplebar-content': {
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }
            }}
        >
            <Box
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <Account isInMobileSidebar={true} />

                <NavSection navConfig={sidebarMenuList} sidebarOpen={true} />
            </Box>
        </Scrollbar>
    );

    return (
        <>
            {/* If no sidebar is true, then navigation should be without the sidebar */}
            {noSideBar && (
                <RootStyle>
                    <MobileDrawer
                        PaperProps={{
                            sx: { width: 280 }
                        }}
                        anchor={sidebarPosition}
                        open={navbarState[sidebarPosition]}
                        onClose={toggleDrawer(sidebarPosition, false)}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent={sidebarOpen ? 'space-between' : 'center'}
                        >
                            <SidebarHeader toggleDrawer={toggleDrawer(sidebarPosition, false)} />
                        </Stack>

                        {list(sidebarPosition)}
                    </MobileDrawer>
                </RootStyle>
            )}

            {/* If no sidebar is false, then navigation should be with the sidebar */}
            {!noSideBar && (
                <RootStyle>
                    <MHidden width="lgUp">
                        <MobileDrawer
                            PaperProps={{
                                sx: { width: DRAWER_WIDTH }
                            }}
                            anchor={sidebarPosition}
                            open={navbarState[sidebarPosition]}
                            onClose={toggleDrawer(sidebarPosition, false)}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent={sidebarOpen ? 'space-between' : 'center'}
                            >
                                <SidebarHeader toggleDrawer={toggleDrawer(sidebarPosition, false)} />
                            </Stack>

                            {list(sidebarPosition)}
                        </MobileDrawer>
                    </MHidden>

                    <MHidden width="lgDown">
                        <Drawer
                            variant="permanent"
                            open={sidebarOpen}
                            PaperProps={{
                                sx: {
                                    width: DRAWER_WIDTH,
                                    bgcolor: 'background.default'
                                }
                            }}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent={sidebarOpen ? 'space-between' : 'center'}
                            >
                                {sidebarOpen && (
                                    <>
                                        <SidebarHeader toggleDrawer={toggleDrawer(sidebarPosition, false)} />

                                        <IconButton
                                            onClick={() => dispatch(minimizeSidebar())}
                                            sx={{
                                                px: 2,
                                                py: 2,
                                                mx: 1,
                                                fontSize: '1.6rem'
                                            }}
                                        >
                                            <HiChevronDoubleLeft />
                                        </IconButton>
                                    </>
                                )}

                                {!sidebarOpen && (
                                    <IconButton
                                        onClick={() => dispatch(maximizeSidebar())}
                                        sx={{
                                            px: 2,
                                            py: 2,
                                            mx: 1,
                                            my: 2,
                                            fontSize: '1.6rem'
                                        }}
                                    >
                                        <HiChevronDoubleRight />
                                    </IconButton>
                                )}
                            </Stack>

                            <SideBarContent sidebarOpen={sidebarOpen} />
                        </Drawer>
                    </MHidden>
                </RootStyle>
            )}
        </>
    );
};

export default Sidebar;
