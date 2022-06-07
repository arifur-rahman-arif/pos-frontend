import { Tooltip, Zoom } from '@mui/material';

interface WithToolTipPropInterface {
    sidebarOpen: boolean;
    children: JSX.Element;
    title: string;
}

/**
 * Wrap the sidebar elements with tooltip when sidebar is minimized
 * @param {boolean} sidebarOpen
 * @param {JSX.Element} children
 * @param {string} title
 * @returns {JSX.Element}
 * @constructor
 */
const WithTooltip = ({ sidebarOpen, children, title }: WithToolTipPropInterface) =>
    !sidebarOpen ? (
        <Tooltip
            arrow
            placement="right"
            TransitionComponent={Zoom}
            title={title.charAt(0).toUpperCase() + title.slice(1)}
        >
            {children}
        </Tooltip>
    ) : (
        children
    );
export default WithTooltip;
