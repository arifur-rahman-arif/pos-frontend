import { Popover } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

const ArrowStyle = styled('span')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        top: -7,
        zIndex: 1,
        width: 12,
        right: 20,
        height: 12,
        content: "''",
        position: 'absolute',
        borderRadius: '0 0 4px 0',
        transform: 'rotate(-135deg)',
        background: theme.palette.background.paper,
        borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
        borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`
    }
}));

interface MenuPopoverInterface {
    children: JSX.Element | any;
    sx?: any;
    open: boolean;
    onClose: () => void;
    anchorEl: any;
}

/**
 * Menu popover hor popover content
 * @param {any} children
 * @param {any} sx
 * @param {boolean} open
 * @param {Function} onClose
 * @param {any} anchorEl
 * @param {Pick<MenuPopoverInterface, never>} other
 * @returns {JSX.Element}
 * @constructor
 */
const MenuPopover = ({ children, sx, open, onClose, anchorEl, ...other }: MenuPopoverInterface) => {
    return (
        <Popover
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    mt: 1.5,
                    ml: 0.5,
                    overflow: 'inherit',
                    boxShadow: (theme) => theme.shadows[20],
                    border: (theme) => `solid 1px ${theme.palette.grey[100]}`,
                    width: 200,
                    ...sx
                }
            }}
            {...other}
        >
            <ArrowStyle className="arrow" />

            {children}
        </Popover>
    );
};

export default MenuPopover;
