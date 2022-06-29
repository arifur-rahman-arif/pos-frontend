import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { handleAlert } from './alertSlice';
import { AppState } from '@/app/store';
import { Typography } from '@mui/material';
import Slide from '@mui/material/Slide';

/**
 * Alert component to show toast alert in frontend
 * @returns {JSX.Element}
 * @constructor
 */
const Alert = () => {
    const { alertValue, alertType, alertMessage } = useSelector((state: AppState) => state.alert);

    const dispatch = useDispatch();

    let backgroundColor: string = 'rgb(46, 125, 50)';

    if (alertType === 'warning') {
        backgroundColor = 'rgb(237, 108, 2)';
    }

    if (alertType === 'error') {
        backgroundColor = 'rgb(211, 47, 47)';
    }

    if (alertType === 'info') {
        backgroundColor = 'rgb(2, 136, 209)';
    }

    return (
        <Snackbar
            open={alertValue}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={() => dispatch(handleAlert({ showAlert: false }))}
            TransitionComponent={Slide}
        >
            {/* <Slide direction="down" in={alertValue}> */}
            <MuiAlert
                onClose={() => dispatch(handleAlert({ showAlert: false }))}
                severity={alertType}
                variant="filled"
                sx={{
                    width: '100%',
                    backgroundColor,
                    '& .MuiAlert-icon': {
                        color: '#fff',
                        opacity: '1'
                    },
                    '& .MuiAlert-action': {
                        color: '#fff',
                        opacity: '1'
                    }
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        textTransform: 'capitalized',
                        color: '#fff'
                    }}
                >
                    {alertMessage}
                </Typography>
            </MuiAlert>
            {/* </Slide> */}
        </Snackbar>
    );
};

export default Alert;
