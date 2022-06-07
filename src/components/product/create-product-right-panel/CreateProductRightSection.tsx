import {
    Card,
    CardContent,
    Checkbox,
    Chip,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Switch,
    TextField
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Box } from '@mui/system';
import { Theme, useTheme } from '@mui/material/styles';

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

const names = ['Category #1', 'Category #2', 'Category #3', 'Category #4', 'Category #5', 'Category #6'];

const tagNames = [
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
 * Tag chip style
 * @param {string} name
 * @param {string[]} personName
 * @param {Theme} theme
 * @returns {number | string | undefined}
 */
const getStyles = (
    name: string,
    personName: string[],
    theme: Theme
): { fontWeight: number | string | undefined } => {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium
    };
};

/**
 * Product right section form for creating product
 * @returns {JSX.Element}
 * @constructor
 */
const CreateProductRightSection = (): JSX.Element => {
    const theme = useTheme();

    const [onSale, setOnSale] = useState<boolean>(false);
    const [stockStatus, setStockStatus] = useState<string>('');
    const [categories, setCategories] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    /**
     * Change the on sale state
     * @param {React.ChangeEvent<HTMLInputElement>} event
     * @returns void
     */
    const onSaleHandler = (event: ChangeEvent<HTMLInputElement>): void => setOnSale(event.target.checked);

    /**
     * Handle the stockStatus state for managing stock status
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const manageStockHandler = (event: SelectChangeEvent): void =>
        setStockStatus(event.target.value as string);

    /**
     * Handle the shop select input box state
     * @param {SelectChangeEvent} event
     */
    const handleCategoryChange = (event: SelectChangeEvent<typeof categories>) => {
        const {
            target: { value }
        } = event;
        setCategories(
            // On autofill, we get a stringifies value.
            typeof value === 'string' ? value.split(',') : value
        );
    };

    /**
     * Handle the tag state changes
     * @param {SelectChangeEvent<string[]>} event
     */
    const handleTagChange = (event: SelectChangeEvent<typeof tags>) => {
        const {
            target: { value }
        } = event;
        setTags(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Card>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={12}>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={onSale}
                                    onChange={onSaleHandler}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label="On sale"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            fullWidth
                            autoComplete="regular-price"
                            name="regular-price"
                            type="number"
                            label="Regular price"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    {onSale && (
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                autoComplete="sale-price"
                                name="sale-price"
                                type="number"
                                label="Sale price"
                                error={false}
                                helperText=""
                            />
                        </Grid>
                    )}

                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            fullWidth
                            autoComplete="sku"
                            name="sku"
                            type="text"
                            label="Product SKU"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <FormControl fullWidth>
                            <InputLabel id="manageStock">Stock status</InputLabel>
                            <Select
                                labelId="manageStock"
                                id="manageStock"
                                value={stockStatus}
                                label="Manage Stock"
                                onChange={manageStockHandler}
                            >
                                <MenuItem value="instock">In stock</MenuItem>
                                <MenuItem value="manage-stock">Manage stock</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {stockStatus === 'manage-stock' && (
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                fullWidth
                                autoComplete="stock-quantity"
                                name="stock-quantity"
                                type="number"
                                label="Stock quantity"
                                error={false}
                                helperText=""
                            />
                        </Grid>
                    )}

                    <Grid item xs={12} sm={12} md={12}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="shop-label">Select categories</InputLabel>
                            <Select
                                labelId="shop-label"
                                id="shop"
                                name="shop"
                                multiple
                                value={categories}
                                onChange={handleCategoryChange}
                                input={<OutlinedInput label="Select categories" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={categories.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="tags">Select tags</InputLabel>
                            <Select
                                labelId="tags"
                                id="tags"
                                multiple
                                value={tags}
                                onChange={handleTagChange}
                                input={<OutlinedInput id="select-multiple-chip" label="Select tags" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {tagNames.map((name) => (
                                    <MenuItem key={name} value={name} style={getStyles(name, tags, theme)}>
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default CreateProductRightSection;
