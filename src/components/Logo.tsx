import { Box } from '@mui/material';

/**
 * Logo component
 * @param {any} sx
 * @returns {JSX.Element}
 * @constructor
 */
const Logo = ({ sx }: any) => {
    return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
};

export default Logo;
