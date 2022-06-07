import '@/styles/pages/globals.scss';
import '@/styles/variable.scss';
import '@/styles/pages/login.scss';
import '@/styles/components/auth.scss';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { Navigation, TopNavigation } from '@/layouts/Navigation';
import ThemeConfig from '@/theme/index';
import GlobalStyles from '@/theme/globalStyles';
import store from '@/app/store';
import NoNavigation from '@/layouts/Navigation/NoNavigation';
import Alert from '@/features/alert/Alert';

const navigationLayouts = {
    navLayout1: Navigation,
    topNavigation: TopNavigation,
    noNavigation: NoNavigation
};

/**
 * The main App wrapper component for next js
 * @param {React.ReactNode} Component
 * @param {any} pageProps
 * @returns {JSX.Element}
 * @constructor
 */
const App = ({ Component, pageProps }: AppProps) => {
    // @ts-ignore
    const layout: any = Component.layout ? Component.layout : 'navLayout1';
    // @ts-ignore
    const NavigationLayout = navigationLayouts[layout] || ((children) => <>{children}</>);

    return (
        <Provider store={store}>
            <ThemeConfig>
                <GlobalStyles />
                <NavigationLayout>
                    <Component {...pageProps} />
                </NavigationLayout>
                <Alert />
            </ThemeConfig>
        </Provider>
    );
};

export default App;
