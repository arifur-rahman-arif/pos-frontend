import React, { useState } from 'react';
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

/**
 * Create category form to create/edit a category for products
 * @param {boolean} editPage
 * @returns {JSX.Element}
 * @constructor
 */
const CreateCategory = ({ editPage = false }: { editPage?: boolean }): JSX.Element => {
    const [parentCategory, setParentCategory] = useState<string>('');

    /**
     * Handle the parentCategory state for managing stock status
     * @param {SelectChangeEvent} event
     * @returns void
     */
    const parentCategoryHandler = (event: SelectChangeEvent): void =>
        setParentCategory(event.target.value as string);

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
                            autoComplete="category-name"
                            name="category-name"
                            type="text"
                            label="Category name"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            fullWidth
                            autoComplete="category-slug"
                            name="category-slug"
                            type="text"
                            label="Category slug"
                            error={false}
                            helperText=""
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="manageStock">Parent category</InputLabel>
                            <Select
                                labelId="manageStock"
                                id="manageStock"
                                value={parentCategory}
                                label="Manage Stock"
                                onChange={parentCategoryHandler}
                            >
                                <MenuItem value="parent1">Parent #1</MenuItem>
                                <MenuItem value="parent2">Parent #2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={5}
                            autoComplete="category-description"
                            name="category-description"
                            type="text"
                            label="Category description"
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
                    {editPage && 'Save category'}
                    {!editPage && 'Create category'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default CreateCategory;
