import { useMediaQuery } from '@mui/material';

interface MHiddenInterface {
    width: 'xsDown' | 'smDown' | 'mdDown' | 'lgDown' | 'xlDown' | 'xsUp' | 'smUp' | 'mdUp' | 'lgUp' | 'xlUp';
    children: any;
}

/**
 * Responsive Mui container to hide or show on multiple devices
 * @param {"xsDown" | "smDown" | "mdDown" | "lgDown" | "xlDown" | "xsUp" | "smUp" | "mdUp" | "lgUp" | "xlUp"} width
 * @param {any} children
 * @constructor
 */
const MHidden = ({ width, children }: MHiddenInterface) => {
    const breakpoint = width.substring(0, 2);

    const hiddenUp = useMediaQuery((theme: any) => theme.breakpoints.up(breakpoint));
    const hiddenDown = useMediaQuery((theme: any) => theme.breakpoints.down(breakpoint));

    if (width.includes('Down')) {
        return hiddenDown ? null : children;
    }

    if (width.includes('Up')) {
        return hiddenUp ? null : children;
    }

    return null;
};

export default MHidden;
