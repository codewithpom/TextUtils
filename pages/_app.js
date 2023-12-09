import "./App.css"
import "./index.css"
import Head from "next/head";
import Navbar from './components/Navbar';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Analytics />
            <Head>
                <meta name="google-site-verification" content="5CUSrmIx1WaE_b-YiA6tpsxnC7G6V6uk2iyx5vp2G1w" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossOrigin="anonymous"></script>
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;