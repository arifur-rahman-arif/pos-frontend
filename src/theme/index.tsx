import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import shape from './shape';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import { ReactNode } from 'react';

// ----------------------------------------------------------------------

/**
 * Theme configuration component for Material UI
 * @param {JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */
const ThemeConfig = ({ children }: { children: ReactNode }): JSX.Element => {
    const themeOptions: any = {
        palette,
        shape,
        typography,
        shadows,
        customShadows
    };

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeConfig;
