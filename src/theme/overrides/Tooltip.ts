// ----------------------------------------------------------------------

/**
 * Override the default mui tooltip style
 * @param {any} theme
 * @returns {{MuiTooltip: {styleOverrides: {arrow: {color: any}, tooltip: {backgroundColor: any}}}}}
 * @constructor
 */
const Tooltip = (theme: any) => {
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey,
                    fontSize: '0.9rem',
                    padding: '8px 12px',
                    margin: '0 25px',
                    fontFamily: 'Poppins'
                },
                arrow: {
                    color: theme.palette.grey
                }
            }
        }
    };
};

export default Tooltip;
