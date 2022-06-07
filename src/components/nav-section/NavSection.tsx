import { alpha, styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Collapse,
    Fade,
    IconButton,
    Link as MUILink,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem
} from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import { toggleSubMenu } from '@/features/nav-state/navSlice';
import styles from './styles/Navsection.module.scss';
import WithTooltip from './WithTooltip';

const ListItemStyle = styled((props: any) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    '&:before': {
        top: 0,
        right: 0,
        width: 3,
        bottom: 0,
        content: "''",
        display: 'none',
        position: 'absolute',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        backgroundColor: theme.palette.primary.main
    }
}));

const ListItemIconStyle = styled(ListItemIcon)({
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

type ItemInterface = {
    title: string;
    path: string;
    icon: JSX.Element;
    hideSubMenu?: boolean;
    subMenu?: Array<{
        title: string;
        path: string;
        icon: JSX.Element;
        activeIcon?: JSX.Element;
        show?: boolean;
        hideMenuOnMaximized?: boolean;
    }>;
};

interface NavItemInterface {
    item: ItemInterface;
    active: (path: string) => boolean;
    sidebarOpen: boolean;
}

/**
 * Sidebar navigation item for the list
 * @param {ItemInterface} item
 * @param {Function} active
 * @param {boolean} sidebarOpen
 * @returns {JSX.Element}
 */
const NavItem = ({ item, active, sidebarOpen }: NavItemInterface): JSX.Element => {
    const subMenuState = useSelector((state: AppState) => state.navSlice.subMenuState);

    const dispatch = useDispatch();

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    /**
     * Open the floating menu on mouse over to parent menu
     * @param {React.MouseEvent<HTMLElement>} event
     * @returns void
     */
    const openFloatingMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);

    /**
     * Close the floating menu if mouse is moved from the floating menu
     * @returns void
     */
    const closeFloatingMenu = () => setAnchorEl(null);

    const { title, path, icon, subMenu, hideSubMenu } = item;

    let isActiveRoot = active(path);

    const activeRootStyle = {
        color: 'primary.main',
        fontWeight: 'fontWeightMedium',
        bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        '&:before': { display: 'block' }
    };

    // If a menu has a submenu run the foreach loop to set parent menu active color
    subMenu?.forEach((menu) => {
        // If active root is already active then return
        if (isActiveRoot) return;

        isActiveRoot = active(menu.path);

        if (isActiveRoot) return;
    });

    let showChildMenu = false;

    // If every child menu is hidden than no need to show submenu
    // Disable the submenu by change the showChildMenu variable to false
    if (!hideSubMenu) {
        subMenu?.forEach((menu) => {
            if (showChildMenu) return;

            if (menu.show) {
                return (showChildMenu = true);
            } else {
                showChildMenu = false;
            }
        });
    }

    // If menu has sub-menu inside it & when submenu has to be visible (hideSubMenu == false)
    if (subMenu && !hideSubMenu && showChildMenu) {
        return (
            <>
                <Link href={path} passHref={true}>
                    <MUILink underline="none">
                        <ListItemStyle
                            sx={{
                                ...(isActiveRoot && activeRootStyle),
                                paddingLeft: sidebarOpen && theme.spacing(5),
                                paddingRight: sidebarOpen && theme.spacing(2.5)
                            }}
                            onMouseOver={!sidebarOpen ? openFloatingMenu : () => {}}
                            onClick={(e: any) => {
                                if (!sidebarOpen) {
                                    e.preventDefault();
                                    openFloatingMenu(e);
                                } else {
                                    () => {};
                                }
                            }}
                        >
                            {/* When sidebar is maximized */}
                            {sidebarOpen && (
                                <>
                                    <ListItemIconStyle>
                                        <IconButton
                                            sx={{
                                                fontSize: '1.4rem',
                                                color: isActiveRoot ? theme.palette.primary.main : ''
                                            }}
                                        >
                                            {icon && icon}
                                        </IconButton>
                                    </ListItemIconStyle>
                                    <ListItemText
                                        sx={{
                                            fontSize: '1.1rem'
                                        }}
                                        disableTypography
                                        primary={title}
                                    />
                                    {subMenuState[`${path}`] && (
                                        <IconButton
                                            onClick={(
                                                e:
                                                    | React.MouseEvent<HTMLAnchorElement>
                                                    | React.MouseEvent<HTMLButtonElement>
                                            ) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                dispatch(
                                                    toggleSubMenu({
                                                        path,
                                                        open: false
                                                    })
                                                );
                                            }}
                                            sx={{
                                                fontSize: '1.5rem',
                                                p: 1.6,
                                                mr: -1.5
                                            }}
                                        >
                                            <FaAngleDown />
                                        </IconButton>
                                    )}

                                    {!subMenuState[`${path}`] && (
                                        <IconButton
                                            onClick={(
                                                e:
                                                    | React.MouseEvent<HTMLAnchorElement>
                                                    | React.MouseEvent<HTMLButtonElement>
                                            ) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                dispatch(
                                                    toggleSubMenu({
                                                        path,
                                                        open: true
                                                    })
                                                );
                                            }}
                                            sx={{
                                                fontSize: '1.5rem',
                                                p: 1.6,
                                                mr: -1.5
                                            }}
                                        >
                                            <FaAngleRight />
                                        </IconButton>
                                    )}
                                </>
                            )}

                            {/* When sidebar is minimized */}
                            {!sidebarOpen && (
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ListItemIconStyle
                                        sx={{
                                            mx: '0'
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                fontSize: '1.6rem'
                                            }}
                                        >
                                            {icon && icon}
                                        </IconButton>
                                    </ListItemIconStyle>
                                </Box>
                            )}
                        </ListItemStyle>
                    </MUILink>
                </Link>

                {/* Show the floating submenu on hover if sidebar is minimized */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={closeFloatingMenu}
                    className={styles.hover_menu}
                    MenuListProps={{ onMouseLeave: closeFloatingMenu }}
                    TransitionComponent={Fade}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            boxShadow: (theme) => theme.shadows[20],
                            mt: 0,
                            '& .MuiAvatar-root': {
                                ml: -0.5,
                                mr: 1
                            }
                        }
                    }}
                >
                    {subMenu.map((item, index) => {
                        const { title, path, icon, activeIcon, show } = item;

                        const isActiveSub = active(path);

                        if (show) {
                            return (
                                <Link key={index} href={path} passHref={true}>
                                    <MUILink underline="none" onClick={closeFloatingMenu}>
                                        <MenuItem sx={{ p: 0 }}>
                                            <ListItemStyle
                                                sx={{
                                                    ...(isActiveSub && {
                                                        fontWeight: 'fontWeightMedium',
                                                        '&:before': { display: 'block' }
                                                    }),
                                                    paddingLeft: theme.spacing(1),
                                                    paddingRight: theme.spacing(2)
                                                }}
                                            >
                                                <IconButton
                                                    sx={{
                                                        fontSize: '1rem',
                                                        marginRight: '5px',
                                                        color: theme.palette.primary.light
                                                    }}
                                                >
                                                    {activeIcon && isActiveSub && activeIcon}

                                                    {icon && !isActiveSub && icon}
                                                </IconButton>
                                                <ListItemText
                                                    sx={{
                                                        fontSize: '1rem'
                                                    }}
                                                    disableTypography
                                                    primary={title}
                                                />
                                            </ListItemStyle>
                                        </MenuItem>
                                    </MUILink>
                                </Link>
                            );
                        }
                    })}
                </Menu>

                {/* If sidebar is minimized than don't show child submenu */}
                <Collapse in={subMenuState[`${path}`] && sidebarOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {subMenu.map((item, index) => {
                            const { title, path, icon, activeIcon, show, hideMenuOnMaximized } = item;

                            const isActiveSub = active(path);

                            if (show && !hideMenuOnMaximized) {
                                return (
                                    <Link key={index} href={path} passHref={true}>
                                        <MUILink underline="none">
                                            <ListItemStyle
                                                sx={{
                                                    ...(isActiveSub && activeRootStyle),
                                                    paddingLeft: sidebarOpen && theme.spacing(6),
                                                    paddingRight: sidebarOpen && theme.spacing(2.5)
                                                }}
                                            >
                                                <IconButton
                                                    sx={{
                                                        fontSize: '1rem',
                                                        marginRight: '5px',
                                                        color: theme.palette.primary.light
                                                    }}
                                                >
                                                    {activeIcon && isActiveSub && activeIcon}

                                                    {icon && !isActiveSub && icon}
                                                </IconButton>
                                                <ListItemText
                                                    sx={{
                                                        fontSize: '1rem'
                                                    }}
                                                    disableTypography
                                                    primary={title}
                                                />
                                            </ListItemStyle>
                                        </MUILink>
                                    </Link>
                                );
                            }
                        })}
                    </List>
                </Collapse>
            </>
        );
    }

    // If a menu don't have any sub-menu inside it then return this components
    return (
        <Link href={path} passHref={true}>
            <MUILink underline="none">
                <ListItemStyle
                    sx={{
                        ...(isActiveRoot && activeRootStyle),
                        paddingLeft: sidebarOpen && theme.spacing(5),
                        paddingRight: sidebarOpen && theme.spacing(2.5)
                    }}
                >
                    {/* When sidebar is maximized */}
                    {sidebarOpen && (
                        <>
                            <ListItemIconStyle
                                sx={{
                                    fontSize: '1.4rem'
                                }}
                            >
                                <IconButton
                                    sx={{
                                        color: isActiveRoot ? theme.palette.primary.main : ''
                                    }}
                                >
                                    {icon && icon}
                                </IconButton>
                            </ListItemIconStyle>
                            <ListItemText
                                sx={{
                                    fontSize: '1.1rem'
                                }}
                                disableTypography
                                primary={title}
                            />
                        </>
                    )}

                    {/* When sidebar is minimized */}
                    {!sidebarOpen && (
                        <WithTooltip sidebarOpen={sidebarOpen} title={title}>
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <ListItemIconStyle
                                    sx={{
                                        mx: '0'
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            color: isActiveRoot ? theme.palette.primary.main : '',
                                            fontSize: '1.6rem'
                                        }}
                                    >
                                        {icon && icon}
                                    </IconButton>
                                </ListItemIconStyle>
                            </Box>
                        </WithTooltip>
                    )}
                </ListItemStyle>
            </MUILink>
        </Link>
    );
};

interface NavSectionInterface {
    navConfig: Array<any>;
    sidebarOpen: boolean;
}

/**
 * Navigation section of the sidebar
 * @param {Array<any>} navConfig
 * @param {boolean} sidebarOpen
 * @param {Pick<NavSectionInterface, never>} other
 * @returns {JSX.Element}
 * @constructor
 */
const NavSection = ({ navConfig, sidebarOpen, ...other }: NavSectionInterface): JSX.Element => {
    const router = useRouter();

    const { pathname } = router;

    /**
     * Match the pathname of navigation url and link
     * @param {string} path
     * @returns {boolean}
     */
    const match = (path: string) => path === pathname;

    return (
        <Box {...other}>
            <List disablePadding>
                {navConfig.map((item) => (
                    <NavItem key={item.title} item={item} active={match} sidebarOpen={sidebarOpen} />
                ))}
            </List>
        </Box>
    );
};

export default NavSection;
