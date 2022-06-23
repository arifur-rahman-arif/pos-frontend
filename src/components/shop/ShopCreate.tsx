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
import { ChangeEvent, useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ShopTooltipInterface } from 'src/pages/dashboard/shop/create';
import { InfoTooltip } from '@/components/page-component';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import {
    currency,
    daysOfWeek,
    handleAddress1,
    handleAddress2,
    handleCurrency,
    handleEstablishedDate,
    handlePhone,
    handleRegistryNumber,
    handleShopDescription,
    handleShopName,
    handleWorkDays,
    handleWorkingEndDay,
    handleWorkingStartDay,
    ShopFormSliceInterface
} from '@/features/shop/shopFormSlice';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * User create form to create a new user in the system
 * @constructor
 * @returns {JSX.Element}
 */
const ShopCreate = () => {
    const dispatch = useDispatch();

    const {
        shopName,
        registryNumber,
        address1,
        address2,
        phone,
        establishedDate,
        currency,
        workDays,
        workingStartDay,
        workingEndDay,
        shopDescription
    } = useSelector((state: AppState) => state.shopFormSlice as ShopFormSliceInterface);

    const [tooltip, setTooltip] = useState<ShopTooltipInterface>({
        registryNumber: false,
        phone: false,
        establishedDate: false,
        currency: false,
        workDays: false,
        workingStartDay: false,
        workingEndDay: false
    });

    /**
     * Handle the shop name on shop name input changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onShopNameChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleShopName(event.target.value as string));

    /**
     * Handle the registry number on shop registry input changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onRegistryNumberChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleRegistryNumber(event.target.value as string));

    /**
     * Handle the address 1 on shop address1 input changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onAddress1Change = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleAddress1(event.target.value as string));

    /**
     * Handle the address 2 on shop address2 input changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onAddress2Change = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleAddress2(event.target.value as string));

    /**
     * Handle the phone on shop phone input changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onPhoneChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handlePhone(event.target.value as string));

    /**
     * Handle the Established date on input changes
     * @param {string | null} newValue
     * @returns void
     */
    const onEstablishedDateChange = (newValue: string | null) =>
        dispatch(handleEstablishedDate(JSON.stringify(newValue)));

    /**
     * Handle the gender select input box state
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onCurrencySelect = (event: SelectChangeEvent) =>
        dispatch(handleCurrency(event.target.value as currency));

    /**
     * Handle the work days on shop work days input changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onWorkDaysChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleWorkDays(Number(event.target.value)));

    /**
     * Handle the working start day on shop select input state changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onWorkingStartDaySelect = (event: SelectChangeEvent) =>
        dispatch(handleWorkingStartDay(event.target.value as daysOfWeek));

    /**
     * Handle the working end day on shop select input state changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onWorkingEndDaySelect = (event: SelectChangeEvent) =>
        dispatch(handleWorkingEndDay(event.target.value as daysOfWeek));

    /**
     * Handle the shop description on shop description input changes
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const onShopDescriptionChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleShopDescription(event.target.value as string));

    return (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="name"
                            name="name"
                            type="text"
                            value={shopName}
                            onChange={onShopNameChange}
                            label="Shop name"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            fullWidth
                            autoComplete="registry-number"
                            name="registry-number"
                            type="text"
                            value={registryNumber}
                            onChange={onRegistryNumberChange}
                            label="Registry Number"
                            error={false}
                            helperText=""
                        />

                        <InfoTooltip
                            title={`
                                        This field allows you to set the minimum spend (subtotal) allowed 
                                        to use the coupon.
                                    `}
                            tooltip={tooltip.registryNumber || false}
                            setTooltip={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, registryNumber: true };
                                });
                            }}
                            onClose={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, registryNumber: false };
                                });
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="address1"
                            name="address1"
                            type="text"
                            value={address1}
                            onChange={onAddress1Change}
                            label="Address 1"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="address2"
                            name="address2"
                            type="text"
                            value={address2}
                            onChange={onAddress2Change}
                            label="Address 2"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            fullWidth
                            autoComplete="phone"
                            name="phone"
                            type="number"
                            value={phone}
                            onChange={onPhoneChange}
                            label="Phone"
                            error={false}
                            helperText=""
                        />

                        <InfoTooltip
                            title={`
                                        This field allows you to set the minimum spend (subtotal) allowed 
                                        to use the coupon.
                                    `}
                            tooltip={tooltip.phone || false}
                            setTooltip={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, phone: true };
                                });
                            }}
                            onClose={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, phone: false };
                                });
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Established date"
                                inputFormat="MM/dd/yyyy"
                                value={JSON.parse(establishedDate)}
                                onChange={onEstablishedDateChange}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </LocalizationProvider>

                        <InfoTooltip
                            title={`
                                        This field allows you to set the minimum spend (subtotal) allowed 
                                        to use the coupon.
                                    `}
                            tooltip={tooltip.establishedDate || false}
                            setTooltip={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, establishedDate: true };
                                });
                            }}
                            onClose={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, establishedDate: false };
                                });
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="shop-currency">Currency</InputLabel>
                            <Select
                                labelId="shop-currency"
                                id="currency"
                                value={currency}
                                onChange={onCurrencySelect}
                                label="Currency"
                            >
                                <MenuItem value="GBP">GBP</MenuItem>
                                <MenuItem value="USD">USD</MenuItem>
                            </Select>
                        </FormControl>

                        <InfoTooltip
                            title={`
                                        This field allows you to set the minimum spend (subtotal) allowed 
                                        to use the coupon.
                                    `}
                            tooltip={tooltip.currency || false}
                            setTooltip={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, currency: true };
                                });
                            }}
                            onClose={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, currency: false };
                                });
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <TextField
                            fullWidth
                            autoComplete="work-days"
                            name="work-days"
                            type="text"
                            value={workDays || ''}
                            onChange={onWorkDaysChange}
                            label="Total work day"
                            error={false}
                            helperText=""
                        />

                        <InfoTooltip
                            title={`
                                        This field allows you to set the minimum spend (subtotal) allowed 
                                        to use the coupon.
                                    `}
                            tooltip={tooltip.workDays || false}
                            setTooltip={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, workDays: true };
                                });
                            }}
                            onClose={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, workDays: false };
                                });
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="start-day">Working start day</InputLabel>
                            <Select
                                labelId="start-day"
                                id="start-day"
                                value={workingStartDay}
                                label="Working start day"
                                onChange={onWorkingStartDaySelect}
                            >
                                {daysOfWeek.map((day: string, index: number) => (
                                    <MenuItem key={index} value={day.toLowerCase()}>
                                        {day}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <InfoTooltip
                            title={`
                                        This field allows you to set the minimum spend (subtotal) allowed 
                                        to use the coupon.
                                    `}
                            tooltip={tooltip.workingStartDay || false}
                            setTooltip={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, workingStartDay: true };
                                });
                            }}
                            onClose={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, workingStartDay: false };
                                });
                            }}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="end-day">Working end day</InputLabel>
                            <Select
                                labelId="end-day"
                                id="end-day"
                                value={workingEndDay}
                                label="Working start day"
                                onChange={onWorkingEndDaySelect}
                            >
                                {daysOfWeek.map((day: string, index: number) => (
                                    <MenuItem key={index} value={day.toLowerCase()}>
                                        {day}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <InfoTooltip
                            title={`
                                        This field allows you to set the minimum spend (subtotal) allowed 
                                        to use the coupon.
                                    `}
                            tooltip={tooltip.workingEndDay || false}
                            setTooltip={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, workingEndDay: true };
                                });
                            }}
                            onClose={() => {
                                setTooltip((prevState: ShopTooltipInterface) => {
                                    return { ...prevState, workingEndDay: false };
                                });
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={5}
                            autoComplete="shop-description"
                            name="shop-description"
                            type="textarea"
                            value={shopDescription}
                            onChange={onShopDescriptionChange}
                            label="Shop description"
                            error={false}
                            helperText=""
                        />
                    </Grid>
                </Grid>

                {/* Submit button */}
                <Button
                    size="medium"
                    variant="contained"
                    sx={{ fontSize: '1rem', alignSelf: 'flex-end', mt: 3 }}
                >
                    Create shop
                </Button>
            </CardContent>
        </Card>
    );
};
export default ShopCreate;
