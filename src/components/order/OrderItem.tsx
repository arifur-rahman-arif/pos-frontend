import { Grid, Typography, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import DetailsWrapper from '@/components/order/DetailsWrapper';

/**
 * Order single item component
 * @returns {JSX.Element}
 * @constructor
 */
const OrderItem = () => {
    return (
        <Grid item xs={12}>
            <Grid container spacing={3}>
                {/* Image component */}
                <Grid item xs={12} sm={2} md={3}>
                    <Link href="/dashboard/product/random-product-id" passHref>
                        <Image
                            src="/static/mock-images/products/product_1.jpg"
                            layout="responsive"
                            width={100}
                            height={100}
                            style={{
                                borderRadius: '8px',
                                cursor: 'pointer'
                            }}
                        />
                    </Link>
                </Grid>

                {/* Item details component */}
                <Grid item xs={12} sm={10} md={9}>
                    <Grid container spacing={1.5}>
                        <DetailsWrapper>
                            <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                Product ID:
                            </Typography>

                            <Typography variant="body1">asdlfj#jalsd5asd56</Typography>
                        </DetailsWrapper>

                        <DetailsWrapper>
                            <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                Product:
                            </Typography>

                            <Typography variant="body1">
                                <Link href="/dashboard/product/random-product-id" passHref>
                                    <MuiLink>Product #1</MuiLink>
                                </Link>
                            </Typography>
                        </DetailsWrapper>

                        <DetailsWrapper>
                            <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                Quantity:
                            </Typography>

                            <Typography variant="body1">5</Typography>
                        </DetailsWrapper>

                        <DetailsWrapper>
                            <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                Cost:
                            </Typography>

                            <Typography variant="body1">$30</Typography>
                        </DetailsWrapper>

                        <DetailsWrapper>
                            <Typography variant="body1" sx={{ fontWeight: 'bolder' }}>
                                Total:
                            </Typography>

                            <Typography variant="body1">$150</Typography>
                        </DetailsWrapper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default OrderItem;
