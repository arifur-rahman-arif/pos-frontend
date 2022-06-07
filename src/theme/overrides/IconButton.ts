// ----------------------------------------------------------------------

/**
 * Overrides the IconButton component of MUI
 * @param {any} theme
 * @returns {{MuiIconButton: {variants: ({style: {'&:hover': {backgroundColor: any}}, props: {color: string}}
 * | {style: {'&:hover': {backgroundColor: any}},
 * props: {color: string}})[], styleOverrides: {root: {}}}}}
 * @constructor
 */
const IconButton = (theme: any) => {
    return {
        MuiIconButton: {
            variants: [
                {
                    props: { color: 'default' },
                    style: {
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                },
                {
                    props: { color: 'inherit' },
                    style: {
                        '&:hover': {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            ],

            styleOverrides: {
                root: {}
            }
        }
    };
};

export default IconButton;
