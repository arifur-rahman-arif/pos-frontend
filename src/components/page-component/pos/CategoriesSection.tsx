import React from 'react';
import { Card, CardContent, Chip, Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FaRegTimesCircle } from 'react-icons/fa';
import { FiPlusCircle } from 'react-icons/fi';

/**
 * Categories section of pos page
 * @returns {JSX.Element}
 * @constructor
 */
const CategoriesSection = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            padding: '16px !important',
                            gap: 1
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: 1
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 'bolder'
                                }}
                            >
                                Select categories
                            </Typography>
                            <IconButton
                                sx={{
                                    p: 1.5
                                }}
                            >
                                <FiPlusCircle />
                            </IconButton>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 1,
                                flexWrap: 'wrap'
                            }}
                        >
                            <Chip
                                label="Category #1"
                                onDelete={() => alert('deleted')}
                                sx={{
                                    fontWeight: 'bolder',
                                    color: '#ffffff',
                                    textTransform: 'upperCase',
                                    fontSize: '0.9025rem',
                                    px: 0.7,
                                    background: (theme) => theme.palette.primary.main,
                                    '& .MuiSvgIcon-root': {
                                        color: '#ffffff',
                                        '&: hover': {
                                            color: '#ffffff'
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CategoriesSection;
