import { useRef, useState } from 'react';
import Link from 'next/link';
import { alpha } from '@mui/material/styles';
import { Avatar, Box, Button, Divider, IconButton, MenuItem, Typography } from '@mui/material';
import { MenuPopover } from '../../menu-popover';
import account from '@/_mocks_/account';
import { AiOutlineHome } from 'react-icons/ai';
import { FaRegAddressCard } from 'react-icons/fa';
import { BsGear } from 'react-icons/bs';

const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: <AiOutlineHome />,
        linkTo: '/'
    },
    {
        label: 'Profile',
        icon: <FaRegAddressCard />,
        linkTo: '#'
    },
    {
        label: 'Settings',
        icon: <BsGear />,
        linkTo: '#'
    }
];

/**
 * Account popup component
 * @returns {JSX.Element}
 * @constructor
 */
const AccountPopover = () => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);

    /**
     * Open the popover
     * @returns void
     */
    const handleOpen = () => setOpen(true);

    /**
     * Close the popover
     * @returns void
     */
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        '&:before': {
                            zIndex: 1,
                            content: "''",
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            position: 'absolute',
                            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
                        }
                    })
                }}
            >
                <Avatar src={account.photoURL} alt="photoURL" />
            </IconButton>

            <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle1" noWrap>
                        {account.displayName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {account.email}
                    </Typography>
                </Box>

                <Divider sx={{ my: 1 }} />

                {MENU_OPTIONS.map((option, index) => (
                    <Link href={option.linkTo} key={index}>
                        <MenuItem
                            sx={{
                                typography: 'body2',
                                py: 1,
                                px: 3
                            }}
                            key={index}
                        >
                            <IconButton
                                sx={{
                                    mr: 2,
                                    fontSize: 20
                                }}
                            >
                                {option.icon}
                            </IconButton>

                            {option.label}
                        </MenuItem>
                    </Link>
                ))}

                <Box sx={{ p: 2, pt: 1.5 }}>
                    <Button fullWidth color="inherit" variant="outlined">
                        Logout
                    </Button>
                </Box>
            </MenuPopover>
        </>
    );
};

export default AccountPopover;
