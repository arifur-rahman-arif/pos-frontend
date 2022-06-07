// ----------------------------------------------------------------------

/**
 * Overrides the Lists component of MUI
 * @param {any} theme
 * @returns {{MuiListItemText: {styleOverrides: {root: {marginBottom: number, marginTop: number},
 * multiline: {marginBottom: number, marginTop: number}}},
 * MuiListItemIcon: {styleOverrides: {root: {marginRight: any, color: string, minWidth: string}}},
 * MuiListItemAvatar: {styleOverrides: {root: {marginRight: any, minWidth: string}}}}}
 * @constructor
 */
const Lists = (theme: any) => {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 'auto',
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    marginBottom: 0
                },
                multiline: {
                    marginTop: 0,
                    marginBottom: 0
                }
            }
        }
    };
};

export default Lists;
