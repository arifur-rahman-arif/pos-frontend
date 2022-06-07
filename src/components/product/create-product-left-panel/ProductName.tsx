import { Grid, TextField } from '@mui/material';

/**
 * Product name component
 * @returns {JSX.Element}
 * @constructor
 */
export const ProductName = () => {
    return (
        <Grid item xs={12} sm={12} md={6}>
            <TextField
                fullWidth
                autoComplete="product-name"
                name="product-name"
                type="text"
                label="Product name"
                error={false}
                helperText=""
            />
        </Grid>
    );
};
