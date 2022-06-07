import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/pages/Home.module.scss';

/**
 * The landing page for / url
 * @returns {JSX.Element}
 * @constructor
 */
const IndexPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>SaaS POS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <img src="/logo.svg" className={styles.logo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                    <i className="fa-brands fa-facebook"></i>
                </p>
                <span>
                    <span>Learn </span>
                    <a
                        className={styles.link}
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React
                    </a>
                    <span>, </span>
                    <a
                        className={styles.link}
                        href="https://redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux
                    </a>
                    <span>, </span>
                    <a
                        className={styles.link}
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Redux Toolkit
                    </a>
                    ,<span> and </span>
                    <a
                        className={styles.link}
                        href="https://react-redux.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React Redux
                    </a>
                </span>
            </header>
        </div>
    );
};

// @ts-ignore
IndexPage.layout = 'topNavigation';

export default IndexPage;
