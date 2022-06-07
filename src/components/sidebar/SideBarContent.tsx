import * as React from 'react';
import { Scrollbar } from '@/components/scrollbar';
import { Box } from '@mui/material';
import { Account, Avatar } from 'src/components/sidebar/Account';
import sidebarMenuList from '@/components/sidebar/sidebarMenuList';
import { NavSection } from '@/components/nav-section';

/**
 * Sidebar component of s listing menus in sidebar
 * @param {boolean} sidebarOpen
 * @returns {JSX.Element}
 * @constructor
 */
export const SideBarContent = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
    return (
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
            <Box sx={{ mb: 5, mx: 2.5 }}>
                {/* When sidebar is minimized at desktop mode */}
                {!sidebarOpen && <Avatar />}

                {/* When sidebar is maximized at desktop mode */}
                {sidebarOpen && <Account />}
            </Box>

            <NavSection navConfig={sidebarMenuList} sidebarOpen={sidebarOpen} />
        </Scrollbar>
    );
};
