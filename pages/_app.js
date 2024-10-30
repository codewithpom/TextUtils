import 'bootstrap/dist/css/bootstrap.css'
import "./App.css"
import Navbar from '../components/Navbar';
import Head from "next/head";
import { useEffect } from "react";
import "./index.css"

// next/script tag
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-NCSN8K5Q01');
        }
      }, []);
    return (
        <>

            
            <Head>
            <meta name="google-adsense-account" content="ca-pub-2735251147722172" />
                <meta name="yandex-verification" content="2fbda7b2014931f2" />
            <meta name="msvalidate.01" content="38099E1AE93A9BC0C89D053978747CF1" />
        
                <Script
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2735251147722172"
                    crossOrigin="anonymous"
                />
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha512-  q5Y1Nrn3HWnEuJ6ujV4T6bX6jww+JjIjzYjJFhF0R+  JGJQ1+  1QvGCnOM9dPxXmjW5f2sO6dJ7P9uYicKxi1ow==" crossOrigin="anonymous"></Script>
                <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossOrigin="anonymous"></Script>
                <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-NCSN8K5Q01"
        strategy="afterInteractive"
      />
            </Head>

            
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-HWP2J64Z0N" />
                
                
                <Script id="clarity-analytics">
                    {`
                    
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "kb15v9afil");
                
                    `}
                </Script>
            <Navbar />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
