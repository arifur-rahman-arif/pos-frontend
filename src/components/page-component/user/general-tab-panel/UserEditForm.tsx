import {
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControl,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField
} from '@mui/material';
import { useState } from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

const names = [
    'Pizza shop',
    'Bar shop',
    'Grocery store',
    'Restaurant bar',
    'Omar Alexander',
    'Carlos Abbott'
];

/**
 * User create form to create a new user in the system
 * @constructor
 * @returns {JSX.Element}
 */
const UserEditForm = () => {
    const [gender, setGender] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const [country, setCountry] = useState<string>('UK');
    const [date, setDate] = useState<Date | null>(new Date());
    const [shops, setShops] = useState<string[]>([]);

    /**
     * Handle the gender select input box state
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const handleGenderSelect = (event: SelectChangeEvent): void => setGender(event.target.value as string);

    /**
     * Handle the gender select input box state
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const handleRoleSelect = (event: SelectChangeEvent): void => setRole(event.target.value as string);

    /**
     * Handle the country select input box state
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const handleCountrySelect = (event: SelectChangeEvent): void => setCountry(event.target.value as string);

    /**
     * Handle the date select input box state
     * @param {Date | null} newValue
     * @returns void
     */
    const handleDate = (newValue: Date | null) => setDate(newValue);

    /**
     * Handle the shop select input box state
     * @param {SelectChangeEvent} event
     */
    const handleShopChange = (event: SelectChangeEvent<typeof shops>) => {
        const {
            target: { value }
        } = event;
        setShops(
            // On autofill, we get a stringifies value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

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
                            autoComplete="firstname"
                            name="firstname"
                            type="text"
                            label="First name"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="username"
                            name="lastname"
                            type="text"
                            label="Last name"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="email"
                            name="email"
                            type="email"
                            label="Email"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="user-gender">Gender</InputLabel>
                            <Select
                                labelId="user-gender"
                                id="gender"
                                value={gender}
                                label="Gender"
                                onChange={handleGenderSelect}
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="others">Others</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="user-role">User role</InputLabel>
                            <Select
                                labelId="user-role"
                                id="role"
                                value={role}
                                label="Gender"
                                onChange={handleRoleSelect}
                            >
                                <MenuItem value="superAdmin">Super Admin</MenuItem>
                                <MenuItem value="admin">Admin/Owner</MenuItem>
                                <MenuItem value="cashier">Cashier/Manager</MenuItem>
                                <MenuItem value="employee">Employee</MenuItem>
                                <MenuItem value="customer">Customer</MenuItem>
                                <MenuItem value="supplier">Supplier</MenuItem>
                                <MenuItem value="none">No role</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="user-country">Country</InputLabel>
                            <Select
                                labelId="user-country"
                                id="country"
                                value={country}
                                label="Country"
                                onChange={handleCountrySelect}
                            >
                                <MenuItem value="UK">United Kingdom</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="city"
                            name="city"
                            type="text"
                            label="City"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="address1"
                            name="address1"
                            type="text"
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
                            label="Address 2"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="postcode"
                            name="postcode"
                            type="text"
                            label="Post code"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="phone"
                            name="phone"
                            type="text"
                            label="Phone"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Date of birth"
                                inputFormat="MM/dd/yyyy"
                                value={date}
                                onChange={handleDate}
                                renderInput={(params) => <TextField fullWidth {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="shop-label">Select shops</InputLabel>
                            <Select
                                labelId="shop-label"
                                id="shop"
                                name="shop"
                                multiple
                                value={shops}
                                onChange={handleShopChange}
                                input={<OutlinedInput label="Select shops" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={shops.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={5}
                            autoComplete="biography"
                            name="biography"
                            type="textarea"
                            label="Biography"
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
                    Save changes
                </Button>
            </CardContent>
        </Card>
    );
};
export default UserEditForm;
