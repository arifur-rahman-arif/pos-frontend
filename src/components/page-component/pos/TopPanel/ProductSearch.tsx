import React from 'react';
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { HiOutlineSearch } from 'react-icons/hi';
import { styled } from '@mui/material/styles';

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: 440,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': {
        boxShadow: `0 8px 16px 0 ${theme.palette.grey[300]}`
    },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${theme.palette.grey['400']} !important`
    }
}));

/**
 * Product search component for seaching the product search input field
 * @returns {JSX.Element}
 * @constructor
 */
const ProductSearch = () => {
    return (
        <SearchStyle
            placeholder="Search product..."
            startAdornment={
                <InputAdornment position="start">
                    <IconButton
                        sx={{
                            cursor: 'auto'
                        }}
                    >
                        <HiOutlineSearch />
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};
export default ProductSearch;
