import { useState } from 'react';
import {
    FormControl,
    Grid,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
    Link as MuiLink
} from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import Link from 'next/link';

/**
 * General details component
 * @returns {JSX.Element}
 * @constructor
 */
const GeneralDetails = () => {
    const [date, setDate] = useState<Date | null>(new Date());

    const [orderStatus, setOrderStatus] = useState('10');

    /**
     * Handle the date select input box state
     * @param {Date | null} newValue
     * @returns void
     */
    const handleDate = (newValue: Date | null) => setDate(newValue);

    /**
     * Handle the order status on change
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const handleChange = (event: SelectChangeEvent) => setOrderStatus(event.target.value as string);

    return (
        <Grid item xs={12} sm={12} md={4}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    General details
                </Typography>
            </Grid>

            <Grid item xs={12} mb={3}>
                <Typography variant="body1">
                    Payment via <b style={{ fontWeight: 'bolder' }}>Cash on delivery</b>
                </Typography>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>Order date:</Typography>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            inputFormat="MM/dd/yyyy"
                            value={date}
                            onChange={handleDate}
                            renderInput={(params) => <TextField fullWidth {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={12}>
                    <Typography>Order status:</Typography>

                    <FormControl fullWidth>
                        <Select
                            labelId="order-status"
                            id="order-status"
                            value={orderStatus}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body1">
                        Customer name:{' '}
                        <Link href="/dashboard/user/asdf">
                            <MuiLink sx={{ cursor: 'pointer' }}>
                                <b style={{ fontWeight: 'bolder' }}>Jhon doe</b>
                            </MuiLink>
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default GeneralDetails;
