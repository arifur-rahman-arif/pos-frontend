import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { MHidden } from '../components/@material-extend';
import Logo from '../components/Logo';
import React, { ReactNode } from 'react';

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7)
    }
}));

/**
 * Authentication top panel layout
 * @param {ReactNode} children
 * @returns {JSX.Element}
 * @constructor
 */
const AuthLayout = ({ children }: { children: ReactNode }): JSX.Element => {
    return (
        <HeaderStyle>
            <Link href="/" passHref>
                <a>
                    <Logo />
                </a>
            </Link>

            <MHidden width="smDown">
                <Typography
                    sx={{
                        mt: { md: -2 }
                    }}
                    style={{ fontFamily: 'Work Sans' }}
                >
                    {children}
                </Typography>
            </MHidden>
        </HeaderStyle>
    );
};

export default AuthLayout;
