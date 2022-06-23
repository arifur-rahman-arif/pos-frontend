import {
    Button,
    Card,
    CardContent,
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Switch,
    TextField
} from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/app/store';
import {
    CouponSliceInterface,
    handleExcludeSaleItems,
    handleExcludingProducts,
    handleExcludingTerms,
    handleExcludingUsers,
    handleIncludingProducts,
    handleIncludingTerms,
    handleIncludingUsers,
    handleIndividualUseOnly,
    handleMaximumCartValue,
    handleMinimumCartValue,
    handleUsageLimitPerCoupon,
    handleUsageLimitPerUser
} from '@/features/coupon/couponSlice';
import { TiCancel } from 'react-icons/ti';
import { Box } from '@mui/system';
import _without from 'lodash/without';
import { TooltipInterface } from './CreateCoupon';
import { InfoTooltip } from '@/components/page-component';

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
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder'
];

/**
 * Restriction tab of coupon page
 * @returns {JSX.Element}
 * @constructor
 */
const RestrictionTab = () => {
    const dispatch = useDispatch();

    const [tooltip, setTooltip] = useState<TooltipInterface>({
        individualOnlyTooltip: false,
        excludeSaleItemsTooltip: false,
        minimumCartValueTooltip: false,
        maximumCartValueTooltip: false,
        usageLimitPerCouponTooltip: false,
        usageLimitPerUserTooltip: false,
        includeProductsTooltip: false,
        excludeProductsTooltip: false,
        includeTermsTooltip: false,
        excludeTermsTooltip: false,
        includingUsersTooltip: false,
        excludingUsersTooltip: false
    });

    const {
        minimumCartValue,
        maximumCartValue,
        individualUseOnly,
        excludeSaleItems,
        usageLimitPerCoupon,
        usageLimitPerUser,
        includingProducts,
        excludingProducts,
        includingTerms,
        excludingTerms,
        includingUsers,
        excludingUsers
    } = useSelector((state: AppState) => state.couponSlice as CouponSliceInterface);

    /**
     * Handle exclude sale item checkbox
     * @param {ChangeEvent<HTMLInputElement>} event
     * @returns void
     */
    const onIndividualUseOnlyChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleIndividualUseOnly(event.target.checked));

    /**
     * Handle the individual usage checkbox
     * @param {ChangeEvent<HTMLInputElement>} event
     * @returns void
     */
    const onExcludeSaleItemsChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleExcludeSaleItems(event.target.checked));

    /**
     * Handle the minimum cart value input
     * @param {ChangeEvent<HTMLInputElement>} event
     * @returns void
     */
    const onMinimumCartValueChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleMinimumCartValue(event.target.value ? Number(event.target.value) : 0));

    /**
     * Handle the maximum cart value input
     * @param {ChangeEvent<HTMLInputElement>} event
     * @returns void
     */
    const onMaximumCartValueChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleMaximumCartValue(event.target.value ? Number(event.target.value) : 0));

    /**
     * Handle the usage limit per coupon value input
     * @param {ChangeEvent<HTMLInputElement>} event
     * @returns void
     */
    const onUsageLimitPerCouponChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleUsageLimitPerCoupon(event.target.value ? Number(event.target.value) : 0));

    /**
     * Handle the usage limit per user value input
     * @param {ChangeEvent<HTMLInputElement>} event
     * @returns void
     */
    const onUsageLimitPerUserChange = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(handleUsageLimitPerUser(event.target.value ? Number(event.target.value) : 0));

    /**
     * Hande the product multiple select box
     * @param {SelectChangeEvent<Array<string>>} event
     */
    const onIncludingProductsChange = (event: SelectChangeEvent<typeof includingProducts>) => {
        const {
            target: { value }
        } = event;
        dispatch(handleIncludingProducts(typeof value === 'string' ? value.split(',') : value));
    };

    /**
     * Hande the product multiple select box
     * @param {SelectChangeEvent<Array<string>>} event
     */
    const onExcludingProductsChange = (event: SelectChangeEvent<typeof includingProducts>) => {
        const {
            target: { value }
        } = event;
        dispatch(handleExcludingProducts(typeof value === 'string' ? value.split(',') : value));
    };

    /**
     * Delete the including products
     * @param {React.MouseEvent} e
     * @param {string} value
     */
    const deleteIncludingProducts = (e: MouseEvent, value: string) => {
        e.preventDefault();
        dispatch(handleIncludingProducts(_without(includingProducts, value)));
    };

    /**
     * Delete the excluding products
     * @param {React.MouseEvent} e
     * @param {string} value
     */
    const deleteExcludingProducts = (e: MouseEvent, value: string) => {
        e.preventDefault();
        dispatch(handleExcludingProducts(_without(excludingProducts, value)));
    };

    /**
     * Hande the product categories include select box
     * @param {SelectChangeEvent<Array<string>>} event
     */
    const onIncludingTermsChange = (event: SelectChangeEvent<typeof includingProducts>) => {
        const {
            target: { value }
        } = event;
        dispatch(handleIncludingTerms(typeof value === 'string' ? value.split(',') : value));
    };

    /**
     * Delete the including categories
     * @param {React.MouseEvent} e
     * @param {string} value
     */
    const deleteIncludingTerms = (e: MouseEvent, value: string) => {
        e.preventDefault();
        dispatch(handleIncludingTerms(_without(includingTerms, value)));
    };

    /**
     * Hande the product categories exclude select box
     * @param {SelectChangeEvent<Array<string>>} event
     */
    const onExcludingTermsChange = (event: SelectChangeEvent<typeof includingProducts>) => {
        const {
            target: { value }
        } = event;
        dispatch(handleExcludingTerms(typeof value === 'string' ? value.split(',') : value));
    };

    /**
     * Delete the excluding categories
     * @param {React.MouseEvent} e
     * @param {string} value
     */
    const deleteExcludingTerms = (e: MouseEvent, value: string) => {
        e.preventDefault();
        dispatch(handleExcludingTerms(_without(excludingTerms, value)));
    };

    /**
     * Hande the user include select box
     * @param {SelectChangeEvent<Array<string>>} event
     */
    const onIncludingUsersChange = (event: SelectChangeEvent<typeof includingProducts>) => {
        const {
            target: { value }
        } = event;
        dispatch(handleIncludingUsers(typeof value === 'string' ? value.split(',') : value));
    };

    /**
     * Delete the including users
     * @param {React.MouseEvent} e
     * @param {string} value
     */
    const deleteIncludingUsers = (e: MouseEvent, value: string) => {
        e.preventDefault();
        dispatch(handleIncludingUsers(_without(includingUsers, value)));
    };

    /**
     * Handle the user exclude select box
     * @param {SelectChangeEvent<Array<string>>} event
     */
    const onExcludingUsersChange = (event: SelectChangeEvent<typeof includingProducts>) => {
        const {
            target: { value }
        } = event;
        dispatch(handleExcludingUsers(typeof value === 'string' ? value.split(',') : value));
    };

    /**
     * Delete the excluding users
     * @param {React.MouseEvent} e
     * @param {string} value
     */
    const deleteExcludingUsers = (e: MouseEvent, value: string) => {
        e.preventDefault();
        dispatch(handleExcludingUsers(_without(excludingUsers, value)));
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={10} lg={10}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={individualUseOnly}
                                                    onChange={onIndividualUseOnlyChange}
                                                />
                                            }
                                            label="Individual use only"
                                            sx={{
                                                mr: 0
                                            }}
                                        />

                                        <InfoTooltip
                                            title={`
                                                Check this box if the coupon cannot be used in
                                                conjunction with other coupons
                                            `}
                                            tooltip={tooltip.individualOnlyTooltip || false}
                                            setTooltip={() => {
                                                setTooltip((prevState: TooltipInterface) => {
                                                    return { ...prevState, individualOnlyTooltip: true };
                                                });
                                            }}
                                            onClose={() => {
                                                setTooltip((prevState: TooltipInterface) => {
                                                    return { ...prevState, individualOnlyTooltip: false };
                                                });
                                            }}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={excludeSaleItems}
                                                    onChange={onExcludeSaleItemsChange}
                                                />
                                            }
                                            label="Exclude sale items"
                                            sx={{
                                                mr: 0
                                            }}
                                        />

                                        <InfoTooltip
                                            title={`
                                                Check this box if the coupon should not apply to items on sale
                                            `}
                                            tooltip={tooltip.excludeSaleItemsTooltip || false}
                                            setTooltip={() => {
                                                setTooltip((prevState: TooltipInterface) => {
                                                    return { ...prevState, excludeSaleItemsTooltip: true };
                                                });
                                            }}
                                            onClose={() => {
                                                setTooltip((prevState: TooltipInterface) => {
                                                    return { ...prevState, excludeSaleItemsTooltip: false };
                                                });
                                            }}
                                        />
                                    </Grid>
                                </Grid>
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
                                    name="minimum-cart-value"
                                    type="number"
                                    value={minimumCartValue || ''}
                                    onChange={onMinimumCartValueChange}
                                    label="Minimum cart value"
                                    error={false}
                                    helperText=""
                                />

                                <InfoTooltip
                                    title={`
                                        This field allows you to set the minimum spend (subtotal) allowed 
                                        to use the coupon.
                                    `}
                                    tooltip={tooltip.minimumCartValueTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, minimumCartValueTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, minimumCartValueTooltip: false };
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
                                    autoComplete="maximum-cart-value"
                                    name="maximum-cart-value"
                                    type="number"
                                    value={maximumCartValue || ''}
                                    onChange={onMaximumCartValueChange}
                                    label="Maximum cart value"
                                    error={false}
                                    helperText=""
                                />

                                <InfoTooltip
                                    title={`
                                      This field allows you to set the maximum spend 
                                       (subtotal) allowed when using the coupon.
                                    `}
                                    tooltip={tooltip.maximumCartValueTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, maximumCartValueTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, maximumCartValueTooltip: false };
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
                                    name="usage-limit-per-coupon"
                                    type="number"
                                    value={usageLimitPerCoupon || ''}
                                    onChange={onUsageLimitPerCouponChange}
                                    label="Usage limit per coupon"
                                    error={false}
                                    helperText=""
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                        alignItems: 'center'
                                    }}
                                />

                                <InfoTooltip
                                    title={`How many times this coupon can be used before it is void.`}
                                    tooltip={tooltip.usageLimitPerCouponTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, usageLimitPerCouponTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, usageLimitPerCouponTooltip: false };
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
                                    name="usage-limit-per-user"
                                    type="number"
                                    value={usageLimitPerUser || ''}
                                    onChange={onUsageLimitPerUserChange}
                                    label="Usage limit per user"
                                    error={false}
                                    helperText=""
                                />

                                <InfoTooltip
                                    title={`How many times this coupon can be used by an individual user. 
                                    Uses billing email for guests, and user ID for logged in users`}
                                    tooltip={tooltip.usageLimitPerUserTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, usageLimitPerUserTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, usageLimitPerUserTooltip: false };
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
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="including-products">Include products</InputLabel>
                                    <Select
                                        labelId="including-products"
                                        id="demo-multiple-checkbox"
                                        multiple
                                        value={includingProducts}
                                        onChange={onIncludingProductsChange}
                                        input={<OutlinedInput label="Include products" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {(selected as string[]).map((value) => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        clickable
                                                        deleteIcon={
                                                            <IconButton
                                                                onMouseDown={(event) =>
                                                                    event.stopPropagation()
                                                                }
                                                            >
                                                                <TiCancel />
                                                            </IconButton>
                                                        }
                                                        onDelete={(e) => deleteIncludingProducts(e, value)}
                                                    />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={includingProducts.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <InfoTooltip
                                    title={`Products that the coupon will be applied to, or that need to be in the cart
                                     in order for the "Fixed cart discount" to be applied.`}
                                    tooltip={tooltip.includeProductsTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, includeProductsTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, includeProductsTooltip: false };
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
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="excluding-products">Exclude products</InputLabel>
                                    <Select
                                        labelId="excluding-products"
                                        id="excluding-products"
                                        multiple
                                        value={excludingProducts}
                                        onChange={onExcludingProductsChange}
                                        input={<OutlinedInput label="Exclude products" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {(selected as string[]).map((value) => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        clickable
                                                        deleteIcon={
                                                            <IconButton
                                                                onMouseDown={(event) =>
                                                                    event.stopPropagation()
                                                                }
                                                            >
                                                                <TiCancel />
                                                            </IconButton>
                                                        }
                                                        onDelete={(e) => deleteExcludingProducts(e, value)}
                                                    />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={excludingProducts.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <InfoTooltip
                                    title={`Coupon will not be applied for the selected products`}
                                    tooltip={tooltip.excludeProductsTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, excludeProductsTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, excludeProductsTooltip: false };
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
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="include-categories">Include categories</InputLabel>
                                    <Select
                                        labelId="include-categories"
                                        id="include-categories"
                                        multiple
                                        value={includingTerms}
                                        onChange={onIncludingTermsChange}
                                        input={<OutlinedInput label="Include categories" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {(selected as string[]).map((value) => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        clickable
                                                        deleteIcon={
                                                            <IconButton
                                                                onMouseDown={(event) =>
                                                                    event.stopPropagation()
                                                                }
                                                            >
                                                                <TiCancel />
                                                            </IconButton>
                                                        }
                                                        onDelete={(e) => deleteIncludingTerms(e, value)}
                                                    />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={includingTerms.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <InfoTooltip
                                    title={`Coupon will be applied to selected categories`}
                                    tooltip={tooltip.includeTermsTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, includeTermsTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, includeTermsTooltip: false };
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
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="exclude-categories">Exclude categories</InputLabel>
                                    <Select
                                        labelId="exclude-categories"
                                        id="exclude-categories"
                                        multiple
                                        value={excludingTerms}
                                        onChange={onExcludingTermsChange}
                                        input={<OutlinedInput label="Exclude categories" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {(selected as string[]).map((value) => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        clickable
                                                        deleteIcon={
                                                            <IconButton
                                                                onMouseDown={(event) =>
                                                                    event.stopPropagation()
                                                                }
                                                            >
                                                                <TiCancel />
                                                            </IconButton>
                                                        }
                                                        onDelete={(e) => deleteExcludingTerms(e, value)}
                                                    />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={excludingTerms.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <InfoTooltip
                                    title={`Coupon will be not be applied to selected categories`}
                                    tooltip={tooltip.excludeTermsTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, excludeTermsTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, excludeTermsTooltip: false };
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
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="include-users">Include users</InputLabel>
                                    <Select
                                        labelId="include-users"
                                        id="include-users"
                                        multiple
                                        value={includingUsers}
                                        onChange={onIncludingUsersChange}
                                        input={<OutlinedInput label="Include users" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {(selected as string[]).map((value) => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        clickable
                                                        deleteIcon={
                                                            <IconButton
                                                                onMouseDown={(event) =>
                                                                    event.stopPropagation()
                                                                }
                                                            >
                                                                <TiCancel />
                                                            </IconButton>
                                                        }
                                                        onDelete={(e) => deleteIncludingUsers(e, value)}
                                                    />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={includingUsers.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <InfoTooltip
                                    title={`Coupon will be applied to selected users only`}
                                    tooltip={tooltip.includingUsersTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, includingUsersTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, includingUsersTooltip: false };
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
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id="exclude-users">Exclude users</InputLabel>
                                    <Select
                                        labelId="exclude-users"
                                        id="exclude-users"
                                        multiple
                                        value={excludingUsers}
                                        onChange={onExcludingUsersChange}
                                        input={<OutlinedInput label="Exclude users" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {(selected as string[]).map((value) => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        clickable
                                                        deleteIcon={
                                                            <IconButton
                                                                onMouseDown={(event) =>
                                                                    event.stopPropagation()
                                                                }
                                                            >
                                                                <TiCancel />
                                                            </IconButton>
                                                        }
                                                        onDelete={(e) => deleteExcludingUsers(e, value)}
                                                    />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {names.map((name) => (
                                            <MenuItem key={name} value={name}>
                                                <Checkbox checked={excludingUsers.indexOf(name) > -1} />
                                                <ListItemText primary={name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <InfoTooltip
                                    title={`Coupon will not be applied to selected users`}
                                    tooltip={tooltip.excludingUsersTooltip || false}
                                    setTooltip={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, excludingUsersTooltip: true };
                                        });
                                    }}
                                    onClose={() => {
                                        setTooltip((prevState: TooltipInterface) => {
                                            return { ...prevState, excludingUsersTooltip: false };
                                        });
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12}>
                                <Button
                                    variant="contained"
                                    size="medium"
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

export default RestrictionTab;
