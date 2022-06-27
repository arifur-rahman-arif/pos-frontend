import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { handleAlert } from './alertSlice';
import { AppState } from '@/app/store';
import { Typography } from '@mui/material';

/**
 * Alert component to show toast alert in frontend
 * @returns {JSX.Element}
 * @constructor
 */
const Alert = () => {
    const { alertValue, alertType, alertMessage } = useSelector((state: AppState) => state.alert);

    const dispatch = useDispatch();

    return (
        <>
            <Snackbar
                open={alertValue}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                onClose={() => dispatch(handleAlert({ showAlert: false }))}
            >
                <MuiAlert
                    onClose={() => dispatch(handleAlert({ showAlert: false }))}
                    severity={alertType}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            textTransform: 'capitalized',
                            fontWeight: 'bolder'
                        }}
                    >
                        {alertMessage}
                    </Typography>
                </MuiAlert>
            </Snackbar>
        </>
    );
};

export default Alert;
