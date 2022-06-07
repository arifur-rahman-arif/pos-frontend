import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Input, Slide, Button, InputAdornment, ClickAwayListener, IconButton } from '@mui/material';
import { APP_BAR_DESKTOP, APP_BAR_MOBILE } from '@/layouts/Navigation/Navigation';
import { HiOutlineSearch } from 'react-icons/hi';
import { ImSearch } from 'react-icons/im';

const SearchbarStyle = styled('div')(({ theme }) => ({
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: APP_BAR_MOBILE,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    padding: theme.spacing(0, 3),
    boxShadow: theme.shadows[20],
    backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    [theme.breakpoints.up('md')]: {
        height: APP_BAR_DESKTOP,
        padding: theme.spacing(0, 5)
    }
}));

/**
 * Searchbar component
 * @returns {JSX.Element}
 * @constructor
 */
const Searchbar = () => {
    const [isOpen, setOpen] = useState(false);

    /**
     * Open the searchbar slider
     * @returns void
     */
    const handleOpen = () => setOpen((prev) => !prev);

    /**
     * Close the searchbar slider
     * @returns void
     */
    const handleClose = () => setOpen(false);

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div>
                {!isOpen && (
                    <IconButton onClick={handleOpen} sx={{ p: 2 }}>
                        <HiOutlineSearch />
                    </IconButton>
                )}

                <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
                    <SearchbarStyle>
                        <Input
                            autoFocus
                            fullWidth
                            disableUnderline
                            placeholder="Search…"
                            startAdornment={
                                <IconButton sx={{ mr: 2 }}>
                                    <HiOutlineSearch />
                                </IconButton>
                            }
                            sx={{
                                mr: 1,
                                fontWeight: 'fontWeightBold'
                            }}
                        />
                        <Button variant="contained" onClick={handleClose}>
                            Search
                        </Button>
                    </SearchbarStyle>
                </Slide>
            </div>
        </ClickAwayListener>
    );
};

export default Searchbar;
