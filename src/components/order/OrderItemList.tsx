import { Card, CardContent, Grid } from '@mui/material';
import OrderItem from '@/components/order/OrderItem';

/**
 * Order details component of an order
 * @returns {JSX.Element}
 * @constructor
 */
const OrderItemList = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <OrderItem />

                    <OrderItem />
                </Grid>
            </CardContent>
        </Card>
    );
};

export default OrderItemList;
