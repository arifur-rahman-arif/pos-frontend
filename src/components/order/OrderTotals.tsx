import React from 'react';
import { Card, CardContent, Grid, Link as MuiLink, Typography } from '@mui/material';
import Link from 'next/link';
import DetailsWrapper from '@/components/order/DetailsWrapper';

/**
 * Order totals of order items
 * @returns {JSX.Element}
 * @constructor
 */
const OrderTotals = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={1.5}>
                            <DetailsWrapper>
                                <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                    Applied coupon:
                                </Typography>

                                <Typography variant="body1">
                                    <Link href="/dashboard/coupon/random-product-id" passHref>
                                        <MuiLink>2d45SXg</MuiLink>
                                    </Link>
                                </Typography>
                            </DetailsWrapper>

                            <DetailsWrapper>
                                <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                    Items subtotal:
                                </Typography>

                                <Typography variant="body1">$150</Typography>
                            </DetailsWrapper>

                            <DetailsWrapper>
                                <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                    Service charge:
                                </Typography>

                                <Typography variant="body1">$10</Typography>
                            </DetailsWrapper>

                            <DetailsWrapper>
                                <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                    Shipping cost:
                                </Typography>

                                <Typography variant="body1">$20</Typography>
                            </DetailsWrapper>

                            <DetailsWrapper>
                                <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                    Total:
                                </Typography>

                                <Typography variant="h5">$20</Typography>
                            </DetailsWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default OrderTotals;
