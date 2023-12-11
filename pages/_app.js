import "./App.css"
import "./index.css"
import Head from "next/head";
import Navbar from './components/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

// next/script tag
import Script from 'next/script';

import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
    return (
        <>

            <Analytics />
            <SpeedInsights />
            <Head>
                <meta name="google-site-verification" content="5CUSrmIx1WaE_b-YiA6tpsxnC7G6V6uk2iyx5vp2G1w" />




                <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha512-  q5Y1Nrn3HWnEuJ6ujV4T6bX6jww+JjIjzYjJFhF0R+  JGJQ1+  1QvGCnOM9dPxXmjW5f2sO6dJ7P9uYicKxi1ow==" crossOrigin="anonymous"></Script>
                <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossOrigin="anonymous"></Script>
            </Head>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;