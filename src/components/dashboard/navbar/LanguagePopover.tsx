import { useRef, useState } from 'react';
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { MenuPopover } from '../../menu-popover';

const LANGS = [
    {
        value: 'en',
        label: 'English',
        icon: '/static/icons/ic_flag_en.svg'
    },
    {
        value: 'de',
        label: 'German',
        icon: '/static/icons/ic_flag_de.svg'
    },
    {
        value: 'fr',
        label: 'French',
        icon: '/static/icons/ic_flag_fr.svg'
    }
];

/**
 * Language popup component
 * @returns {JSX.Element}
 * @constructor
 */
const LanguagePopover = () => {
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
                    p: 2,
                    fontSize: '1.2rem',
                    ...(open && {
                        bgcolor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
                    })
                }}
            >
                <img src={LANGS[0].icon} alt={LANGS[0].label} />
            </IconButton>

            <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current}>
                <Box sx={{ py: 1 }}>
                    {LANGS.map((option, index) => (
                        <MenuItem
                            key={index}
                            selected={option.value === LANGS[0].value}
                            onClick={handleClose}
                            sx={{ py: 1, px: 2.5 }}
                        >
                            <ListItemIcon>
                                <Box component="img" alt={option.label} src={option.icon} />
                            </ListItemIcon>
                            <ListItemText
                                primaryTypographyProps={{
                                    variant: 'body2'
                                }}
                            >
                                {option.label}
                            </ListItemText>
                        </MenuItem>
                    ))}
                </Box>
            </MenuPopover>
        </>
    );
};

export default LanguagePopover;
