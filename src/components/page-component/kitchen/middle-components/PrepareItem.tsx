import { Typography } from '@mui/material';
import Course from './course/Course';
import { Box } from '@mui/system';
import styles from './styles/PrepareItem.module.scss';

/**
 * Prepare item component for kitchen
 * @returns {JSX.Element}
 * @constructor
 */
const PrepareItem = () => {
    return (
        <Box sx={{ ml: -4 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
                Preparation List
            </Typography>

            <div className={styles.prepareCourseList}>
                <Course />
            </div>
        </Box>
    );
};

export default PrepareItem;
