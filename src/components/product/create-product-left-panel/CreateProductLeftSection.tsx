import { Card, CardContent, Grid } from '@mui/material';
import { ProductName } from './ProductName';
import { Description } from './Description';
import ImageUpload from './ImageUpload';

/**
 * Product left section form for creating product
 * @returns {JSX.Element}
 * @constructor
 */
const CreateProductLeftSection = (): JSX.Element => {
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
                    <ProductName />

                    <Description />

                    <ImageUpload />
                </Grid>
            </CardContent>
        </Card>
    );
};
export default CreateProductLeftSection;
