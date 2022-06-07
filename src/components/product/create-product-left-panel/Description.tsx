import { Grid, TextField } from '@mui/material';

/**
 * Product description component
 * @returns {JSX.Element}
 * @constructor
 */
export const Description = () => {
    return (
        <Grid item xs={12} sm={12} md={12}>
            <TextField
                fullWidth
                multiline
                rows={8}
                autoComplete="description"
                name="description"
                type="textarea"
                label="Product description"
                error={false}
                helperText=""
            />
        </Grid>
    );
};
