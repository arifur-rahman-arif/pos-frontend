import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import { fShortenNumber } from '@/utils/global';

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: theme.palette.primary.dark,
    backgroundColor: '#C8FACD'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    fontSize: '1.5rem',
    color: theme.palette.primary.dark,
    backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
        theme.palette.primary.dark,
        0.24
    )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

/**
 * Weekly sales component
 * @returns {JSX.Element}
 * @constructor
 */
const AppWeeklySales = () => {
    return (
        <RootStyle>
            <IconWrapperStyle>
                <i className="fa-brands fa-android" style={{ width: '24px', height: '24px' }}></i>
            </IconWrapperStyle>
            <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Weekly Sales
            </Typography>
        </RootStyle>
    );
};

export default AppWeeklySales;
