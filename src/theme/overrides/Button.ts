/**
 * Overrides the MUI Button component
 * @param {any} theme
 * @returns {{MuiButton: {styleOverrides: {containedPrimary: {boxShadow: string},
 * textInherit: {'&:hover': {backgroundColor: any}},
 * containedInherit: {boxShadow: string, color: any, '&:hover': {backgroundColor: any}},
 * root: {'&:hover': {boxShadow: string}},
 * containedSecondary: {boxShadow: string}, sizeLarge: {height: number},
 * outlinedInherit: {border: string, '&:hover': {backgroundColor: any}}}}}}
 * @constructor
 */
const Button = (theme: any) => {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        boxShadow: 'none'
                    }
                },
                sizeLarge: {
                    height: 48
                },
                containedInherit: {
                    color: theme.palette.grey[800],
                    boxShadow: theme.customShadows.z8,
                    '&:hover': {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                containedPrimary: {
                    boxShadow: theme.customShadows.primary
                },
                containedSecondary: {
                    boxShadow: theme.customShadows.secondary
                },
                outlinedInherit: {
                    border: `1px solid ${theme.palette.grey[500_32]}`,
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                textInherit: {
                    '&:hover': {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }
        }
    };
};

export default Button;
