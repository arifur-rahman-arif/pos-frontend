import React from 'react';
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';

/**
 * Create tag form to create/edit a tag for products
 * @param {boolean} editPage
 * @returns {JSX.Element}
 * @constructor
 */
const CreateCategory = ({ editPage = false }: { editPage?: boolean }): JSX.Element => {
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
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="name"
                            name="name"
                            type="text"
                            label="Tag name"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="slug"
                            name="slug"
                            type="text"
                            label="Category slug"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={5}
                            autoComplete="description"
                            name="description"
                            type="text"
                            label="Tag description"
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
                    {editPage && 'Save tag'}
                    {!editPage && 'Create tag'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default CreateCategory;
