import { styled } from '@mui/material/styles';

export const AccountStyle = styled('div')(({ theme }) => {
    return {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 2.5),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.grey[200]
    };
});
