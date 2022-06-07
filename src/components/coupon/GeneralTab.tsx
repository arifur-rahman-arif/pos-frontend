import {
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from '@mui/material';
import { ChangeEvent } from 'react';
import { LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import {
    CouponSliceInterface,
    handleCouponCode,
    handleCouponDescription,
    handleCouponDiscount,
    handleCouponType,
    handleExpiryDate,
    handleStartingDate,
    handleTabIndex
} from '@/features/coupon/couponSlice';

/**
 * GeneralTab tab of coupon page
 * @returns {JSX.Element}
 * @constructor
 */
const GeneralTab = () => {
    const dispatch = useDispatch();

    const {
        couponCode,
        couponType,
        discountAmount,
        startingDate,
        expiryDate,
        couponDescription
    } = // eslint-disable-line
        useSelector((state: AppState) => state.couponSlice as CouponSliceInterface);

    /**
     * Handle the coupon code on input on change event
     * @param {ChangeEvent<HTMLInputElement>} event
     * @returns void
     */
    const onCouponCodeChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleCouponCode(event.target.value));

    /**
     * Handle the coupon type state to change the coupon type select input
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onCouponTypeChange = (event: SelectChangeEvent) => dispatch(handleCouponType(event.target.value));

    /**
     * Handle the coupon discount input state
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onCouponDiscountChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleCouponDiscount(event.target.value ? Number(event.target.value) : 0));

    /**
     * Generate the coupon code for the coupon
     */
    const generateCouponCode = (): void => {
        let code = '';

        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 8; i++) {
            code += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        dispatch(handleCouponCode(code as string));
    };

    /**
     * Handle the date select input box state
     * @param {Date | null} newValue
     * @returns void
     */
    const onStartingDateChange = (newValue: string | null) =>
        dispatch(handleStartingDate(JSON.stringify(newValue)));

    /**
     * Handle the date select input box state
     * @param {Date | null} newValue
     * @returns void
     */
    const onExpiryDateChange = (newValue: string | null) =>
        dispatch(handleExpiryDate(JSON.stringify(newValue)));

    /**
     * Handle the coupon description state
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onCouponDescriptionChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleCouponDescription(event.target.value as string));

    /**
     * Move to next restriction tab
     * @returns {any}
     */
    const onNextButtonClicked = () => dispatch(handleTabIndex(1));

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={10} lg={10}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    fullWidth
                                    autoComplete="coupon-code"
                                    name="coupon-code"
                                    type="text"
                                    label="Coupon code"
                                    value={couponCode}
                                    onChange={onCouponCodeChange}
                                    error={false}
                                    helperText=""
                                />
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={generateCouponCode}
                                    sx={{
                                        my: 1
                                    }}
                                >
                                    Generate
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="coupon-type-label">Coupon type</InputLabel>
                                    <Select
                                        labelId="coupon-type-label"
                                        id="coupon-type"
                                        value={couponType}
                                        label="Coupon type"
                                        onChange={onCouponTypeChange}
                                    >
                                        <MenuItem value="percentage">Percentage</MenuItem>
                                        <MenuItem value="fixed">Fixed</MenuItem>
                                        <MenuItem value="fixed-product">Fixed product</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <TextField
                                    fullWidth
                                    autoComplete="discount-amount"
                                    name="discount-amount"
                                    type="number"
                                    value={discountAmount || ''}
                                    onChange={onCouponDiscountChange}
                                    label="Discount amount"
                                    error={false}
                                    helperText=""
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Starting date"
                                        inputFormat="MM/dd/yyyy"
                                        value={JSON.parse(startingDate)}
                                        onChange={onStartingDateChange}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                        label="Expiry date"
                                        inputFormat="MM/dd/yyyy"
                                        value={JSON.parse(expiryDate)}
                                        onChange={onExpiryDateChange}
                                        renderInput={(params) => <TextField fullWidth {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12}>
                                <TextField
                                    fullWidth
                                    autoComplete="coupon-description"
                                    name="coupon-description"
                                    type="text"
                                    multiline
                                    value={couponDescription}
                                    onChange={onCouponDescriptionChange}
                                    rows={5}
                                    label="Coupon description"
                                    error={false}
                                    helperText=""
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12}>
                                <Button
                                    variant="contained"
                                    size="medium"
                                    onClick={onNextButtonClicked}
                                    sx={{
                                        float: 'right'
                                    }}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default GeneralTab;
