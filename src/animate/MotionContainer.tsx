import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { varWrapEnter } from './variants/Wrap';

/**
 * Framer motion container to animation nodes
 * @param {any} open
 * @param {any} children
 * @param {Pick<any, string | number | symbol>} other
 * @returns {JSX.Element}
 * @constructor
 */
const MotionContainer = ({ open, children, ...other }: any) => {
    return (
        <Box
            component={motion.div}
            initial={true}
            animate={open ? 'animate' : 'exit'}
            variants={varWrapEnter}
            {...other}
        >
            {children}
        </Box>
    );
};

MotionContainer.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.node
};

export default MotionContainer;
