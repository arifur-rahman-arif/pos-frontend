import { Grid } from '@mui/material';
import { UserPhotoUpload } from '@/components/card';
import UserEditForm from './UserEditForm';

/**
 * GeneralTab tab panel of user account
 * @returns {JSX.Element}
 * @constructor
 */
const GeneralTabPanel = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8} lg={4}>
                <UserPhotoUpload showEmailVerifiedSection={false} />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={8}>
                <UserEditForm />
            </Grid>
        </Grid>
    );
};

export default GeneralTabPanel;
