import { HiOutlineSearch } from 'react-icons/hi';
import { styled } from '@mui/material/styles';
import { IconButton, InputAdornment, OutlinedInput, Toolbar, Tooltip, Typography } from '@mui/material';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiFilter } from 'react-icons/fi';
import React from 'react';

const RootStyle = styled(Toolbar)(({}) => ({
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1rem !important'
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': { width: 320, boxShadow: `0 8px 16px 0 ${theme.palette.grey[300]}` },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${theme.palette.grey['400']} !important`
    }
}));

// ----------------------------------------------------------------------

interface TableToolbar {
    numSelected: number;
    filterName: string;
    onFilterName: (event: any) => void;
}

/**
 * Toolbar of the table
 * @param {number} numSelected
 * @param {string} filterName
 * @param {Function} onFilterName
 * @returns {JSX.Element}
 * @constructor
 */
const TableToolbar = ({ numSelected, filterName, onFilterName }: TableToolbar) => {
    return (
        <RootStyle
            sx={{
                ...(numSelected > 0 && {
                    color: 'primary.main',
                    bgcolor: 'primary.lighter'
                }),
                mb: 2
            }}
        >
            {numSelected > 0 ? (
                <Typography component="div" variant="subtitle1">
                    {numSelected} selected
                </Typography>
            ) : (
                <SearchStyle
                    value={filterName}
                    onChange={onFilterName}
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
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <RiDeleteBinLine />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FiFilter />
                    </IconButton>
                </Tooltip>
            )}
        </RootStyle>
    );
};

export default TableToolbar;
