import { AlertColor } from '@mui/material';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialStateInterface {
    alertValue: boolean;
    alertType: AlertColor;
    alertMessage: string;
}

interface PayloadInterface {
    showAlert: boolean;
    alertType?: AlertColor;
    alertMessage?: string;
}

const initialState: InitialStateInterface = {
    alertValue: false,
    alertType: 'success',
    alertMessage: 'This is a message'
};

const alertSlice = createSlice({
    name: 'alertSlice',
    initialState,
    reducers: {
        handleAlert: (state, action: PayloadAction<PayloadInterface>) => {
            const { showAlert, alertType, alertMessage } = action.payload;

            state.alertValue = showAlert;
            state.alertType = alertType || state.alertType;
            state.alertMessage = alertMessage || state.alertMessage;
        }
    }
});

export const { handleAlert } = alertSlice.actions;

export default alertSlice.reducer;
