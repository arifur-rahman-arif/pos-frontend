import React from 'react';
import { Grid, Typography } from '@mui/material';
import DetailsWrapper from '@/components/order/DetailsWrapper';

/**
 * Billing details component
 * @returns {JSX.Element}
 * @constructor
 */
const BillingDetails = () => {
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Grid item xs={12}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    Billing details
                </Typography>
            </Grid>

            <Grid container spacing={1.5}>
                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        First name:
                    </Typography>

                    <Typography variant="body1">Lorem ipsum</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        Last name:
                    </Typography>

                    <Typography variant="body1">consequuntur</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        Address 1:
                    </Typography>

                    <Typography variant="body1">iure eius earum ut molestias</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        Address 2:
                    </Typography>

                    <Typography variant="body1">architecto voluptate aliquam</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        City:
                    </Typography>

                    <Typography variant="body1">architecto</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        State:
                    </Typography>

                    <Typography variant="body1">voluptate</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        Postal code:
                    </Typography>

                    <Typography variant="body1">HA8 0YU</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        Country:
                    </Typography>

                    <Typography variant="body1">UK</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        Phone:
                    </Typography>

                    <Typography variant="body1">+44 023123 3242</Typography>
                </DetailsWrapper>

                <DetailsWrapper>
                    <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                        Email:
                    </Typography>

                    <Typography variant="body1">abc@gmail.com</Typography>
                </DetailsWrapper>
            </Grid>
        </Grid>
    );
};

export default BillingDetails;
