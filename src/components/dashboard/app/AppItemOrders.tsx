import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { fShortenNumber } from '@/utils/global';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.warning.dark,
    backgroundColor: '#FFF7CD'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    fontSize: '1.5rem',
    marginBottom: theme.spacing(3),
    color: theme.palette.warning.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.warning.dark, 0)} 0%, ${alpha(
        theme.palette.warning.dark,
        0.24
    )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1723315;

/**
 * App item order section in dashboard
 * @returns {JSX.Element}
 * @constructor
 */
const AppItemOrders = () => {
    return (
        <RootStyle>
            <IconWrapperStyle>
                <i className="fa-solid fa-database" style={{ width: '24px', height: '24px' }}></i>
            </IconWrapperStyle>
            <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Item Orders
            </Typography>
        </RootStyle>
    );
};

export default AppItemOrders;
