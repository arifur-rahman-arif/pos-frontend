import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Class of _document page of next.js
 */
class MyDocument extends Document {
    /**
     * Render function of _document of next js
     * @returns {JSX.Element}
     */
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
