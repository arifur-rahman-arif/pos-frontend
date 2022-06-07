import { useState, MouseEvent } from 'react';
import {
    Fade,
    FormControl,
    IconButton,
    InputLabel,
    Menu,
    MenuItem,
    Select,
    SelectChangeEvent,
    Tooltip
} from '@mui/material';
import { Box } from '@mui/system';
import { BsShop } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import { setSelectedShop, ShopSelectSliceInterface } from '@/features/shop/shopSelectSlice';

/**
 * Shop select box to choose shop
 * @returns {JSX.Element}
 * @constructor
 */
const ShopSelect = () => {
    const dispatch = useDispatch();

    const { selectedShop } = useSelector(
        (state: AppState) => state.shopSelectSlice as ShopSelectSliceInterface
    );

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    /**
     * Handle the select event of shop select box
     * @param {SelectChangeEvent} event
     */
    const handleShopSelect = (event: SelectChangeEvent) => {
        dispatch(setSelectedShop(event.target.value as string));
    };

    /**
     * Open the shop select popover to show the shop select box
     * @param {React.MouseEvent<HTMLElement>} event
     */
    const openShopSelectPopover = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    /**
     * Close the shop select popover
     */
    const closeShopSelectPopover = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Tooltip title="Select shop" placement="bottom" arrow>
                <IconButton
                    size="large"
                    onClick={openShopSelectPopover}
                    aria-controls={open ? 'shop-selector' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    sx={{
                        fontSize: '1.45rem',
                        mr: -1,
                        p: 2
                    }}
                >
                    <BsShop />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id="shop-selector"
                open={open}
                onClose={closeShopSelectPopover}
                onClick={closeShopSelectPopover}
                TransitionComponent={Fade}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        boxShadow: (theme) => theme.shadows[20],
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 20,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0
                        }
                    }
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Box sx={{ maxWidth: '200px', minWidth: '200px' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select shop</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedShop}
                                label="Select shop"
                                onChange={handleShopSelect}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </MenuItem>
            </Menu>
        </>
    );
};

export default ShopSelect;
