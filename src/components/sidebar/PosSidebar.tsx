import * as React from 'react';
import Box from '@mui/material/Box';
import { MINI_DRAWER_WIDTH } from '@/layouts/Navigation';
import { styled } from '@mui/material/styles';
import { MHidden } from '@/components/@material-extend';
import { Drawer, List, Typography } from '@mui/material';
import { Scrollbar } from '@/components/scrollbar';
import Link from 'next/link';
import Logo from '@/components/Logo';
import posMenuList from '@/components/sidebar/posMenuList';
import PosSideMenu from '@/components/sidebar/PosSideMenu';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import { NavStateAcceptedPayload, PosNavStateInterface } from '@/features/nav-state/posNavStateSlice';

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
const PosSidebar = () => {
    const posNavState = useSelector((state: AppState) => state.posNavStateSlice as PosNavStateInterface);

    /**
     * Match the pathname of navigation url and link
     * @param {string} linkSlug
     * @returns {boolean}
     */
    const linkActive = (linkSlug: NavStateAcceptedPayload) => posNavState[linkSlug];

    return (
        <RootStyle
            sx={{
                ml: {
                    md: '15px'
                }
            }}
        >
            <MHidden width="mdDown">
                <Drawer
                    sx={{
                        width: MINI_DRAWER_WIDTH,
                        background: '#fff',
                        boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)',
                        top: 0,
                        left: 0,
                        '& .MuiDrawer-paper': {
                            width: MINI_DRAWER_WIDTH,
                            boxSizing: 'border-box',
                            border: 'none',
                            borderRadius: '15px',
                            margin: '15px 0 0 15px',
                            maxHeight: 'calc(100% - 30px)',
                            py: 1,
                            display: 'grid',
                            boxShadow: '0px 5px 40px rgba(0, 0, 0, 0.1)'
                        }
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Box
                        sx={{ width: '100%', height: '70px', mb: 3, mt: 2 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        alignSelf="start"
                    >
                        <Link href="/" passHref>
                            <a>
                                <Logo />
                            </a>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            maxHeight: '450px'
                        }}
                        alignSelf="stretch"
                    >
                        <Scrollbar
                            sx={{
                                '& .simplebar-content': {
                                    display: 'flex',
                                    flexDirection: 'column'
                                }
                            }}
                        >
                            <List
                                disablePadding
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3
                                }}
                            >
                                {posMenuList.map((menu: any, index: number) => (
                                    <PosSideMenu menu={menu} key={index} linkActive={linkActive} />
                                ))}
                            </List>
                        </Scrollbar>
                    </Box>

                    <Box
                        sx={{ width: '100%', mb: 2, mt: 3 }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        gap={1.3}
                        alignSelf="end"
                    >
                        <Link href="/">
                            <Box
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    boxShadow: (theme) => theme.shadows[8]
                                }}
                            >
                                <Image src="/static/mock-images/avatars/avatar_1.jpg" layout="fill" />
                            </Box>
                        </Link>

                        <Typography variant="body1">Jhon Doe</Typography>
                    </Box>
                </Drawer>
            </MHidden>
        </RootStyle>
    );
};

export default PosSidebar;
