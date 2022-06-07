// ----------------------------------------------------------------------

/**
 * Overrides the Card component of MUI
 * @param {any} theme
 * @returns {{MuiCardHeader: {defaultProps: {subheaderTypographyProps: {variant: string},
 * titleTypographyProps: {variant: string}}, styleOverrides: {root: {padding: any}}},
 * MuiCardContent: {styleOverrides: {root: {padding: any}}},
 * MuiCard: {styleOverrides: {root: {boxShadow: string,
 * borderRadius: number, position: string, zIndex: number}}}}}
 * @constructor
 */
const Card = (theme: any) => {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.customShadows.z16,
                    borderRadius: theme.shape.borderRadiusMd,
                    position: 'relative',
                    zIndex: 0 // Fix Safari overflow: hidden with border radius
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { variant: 'h6' },
                subheaderTypographyProps: { variant: 'body2' }
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
};

export default Card;
