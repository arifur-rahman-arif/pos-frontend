import React from 'react';
import { IconButton, Link as MUILink, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import { NavStateAcceptedPayload } from '@/features/nav-state/posNavStateSlice';

interface PropInterface {
    menu: {
        title: string;
        path: string;
        linkSlug: NavStateAcceptedPayload;
        icon: JSX.Element;
    };
    linkActive: (parameter: NavStateAcceptedPayload) => boolean;
}

/**
 * Single pos sidebar menu component
 * @param {number} index
 * @param {{title: string, path: string, icon: JSX.Element}} menu
 * @returns {JSX.Element}
 * @constructor
 */
const PosSideMenu = ({ menu, linkActive }: PropInterface) => {
    const isLinkActive = linkActive(menu.linkSlug);

    return (
        <Link href={menu.path} passHref={true}>
            <MUILink underline="none">
                <ListItemButton
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <IconButton
                        sx={{
                            fontSize: '1.6rem',
                            marginRight: '0',
                            color: (theme) =>
                                isLinkActive ? theme.palette.primary.main : theme.palette.text.secondary
                        }}
                    >
                        {menu.icon && menu.icon}
                    </IconButton>

                    <ListItemText
                        sx={{
                            color: (theme) =>
                                isLinkActive ? theme.palette.primary.main : theme.palette.text.secondary
                        }}
                        disableTypography
                        primary={menu.title}
                    />
                </ListItemButton>
            </MUILink>
        </Link>
    );
};

export default PosSideMenu;
