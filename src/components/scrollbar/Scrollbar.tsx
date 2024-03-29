import SimpleBarReact from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')({
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden'
});

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
    maxHeight: '100%',
    '& .simplebar-scrollbar': {
        '&:before': {
            backgroundColor: alpha(theme.palette.grey[600], 0.48)
        },
        '&.simplebar-visible:before': {
            opacity: 1
        }
    },
    '& .simplebar-track.simplebar-vertical': {
        width: 10
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
        height: 6
    },
    '& .simplebar-mask': {
        zIndex: 'inherit'
    }
}));

// ----------------------------------------------------------------------

interface ScrollbarInterface {
    children?: JSX.Element | any;
    sx?: any;
}

/**
 * Scrollbar component to add IOS scrollbar for scrolling component
 * @param {any} children
 * @param {any} sx
 * @param {Pick<ScrollbarInterface, never>} other
 * @returns {JSX.Element}
 * @constructor
 */
const Scrollbar = ({ children, sx, ...other }: ScrollbarInterface) => {
    return (
        <RootStyle>
            <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
                {children}
            </SimpleBarStyle>
        </RootStyle>
    );
};

export default Scrollbar;
