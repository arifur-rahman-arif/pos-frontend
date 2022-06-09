import { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface DetailsWrapperPropInterface {
    children: ReactNode;
}

/**
 * Details wrapper or order page
 * @param {ReactNode} children
 * @returns {JSX.Element}
 * @constructor
 */
const DetailsWrapper = ({ children }: DetailsWrapperPropInterface) => {
    return (
        <Grid
            item
            xs={12}
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap={1}
            flexWrap="wrap"
        >
            {children}
        </Grid>
    );
};

export default DetailsWrapper;
