import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import qrcode from 'qrcode';



export default function QrGenerator() {
    const [text, setText] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');

    useEffect(() => {
        generateQRCode(text, setQrCodeUrl);
    }, [text]);

    // Function to generate QR code from text
    function generateQRCode(text, callback) {
        qrcode.toDataURL(text, (err, url) => {
            if (err) {
                console.error(err);
                return;
            }
            callback(url);
        });
    }

    return (
        <>
            <Head>
                <title>QR Code Generator</title>
                <meta name="description" content="Generate QR code from text" />
                <meta name="keywords" content="QR code generator, qrcode, text to QR code" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* for social media */}
                <meta property="og:title" content="QR Code Generator" />
                <meta property="og:description" content="Generate QR code from text" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>QR Code Generator</h1>
                <p>Enter the text below to generate a QR code.</p>
                <textarea
                    id="text"
                    placeholder="Enter the text here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                <div className="qr-code-container">
                    {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
                    {/* download button */}
                    <br />
                    {qrCodeUrl && (
                        <a
                            href={qrCodeUrl}
                            download="qr-code.png"
                            className="button"
                        >
                            Download QR Code
                        </a>
                    )}
                </div>
            </div>
            <style jsx>{`
                    .container {
                        margin: 0 auto;
                        text-align: center;
                        width: 80%;
                    }
                    h1 {
                        font-size: 2.5rem;
                        margin-bottom: 1rem;
                    }
                    textarea {
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        font-size: 1.2rem;
                        margin-bottom: 1rem;
                        padding: 0.5rem;
                        width: 100%;
                    }
                    .qr-code-container {
                        margin-top: 1rem;
                    }
                `}</style>
        </>
    );
}


