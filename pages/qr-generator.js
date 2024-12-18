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
                <title>QR Code Generator - Generate QR Code from Text Easily</title>
                <meta name="description" content="Generate QR code from text easily and quickly with our user-friendly online tool. Enter your text and get the QR code instantly." />
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
                <div className="text-center" style={{ marginTop: '20px' }}>
                    <h2>About QR Code Generator</h2>
                    <p>The QR Code Generator is a user-friendly online tool that allows you to generate QR codes from your input. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements.</p>
                    <p>With the QR Code Generator, you can easily enter your text or URL, and get the QR code instantly. The tool supports multiple input types and provides a seamless experience for generating QR codes.</p>
                    <h3>Features</h3>
                    <ul>
                        <li>Enter text or URL and generate QR code</li>
                        <li>Download the generated QR code as an image</li>
                    </ul>
                    <h3>Usage Instructions</h3>
                    <p>To use the QR Code Generator, follow these simple steps:</p>
                    <ol>
                        <li>Enter the text or URL you want to convert to a QR code in the text area.</li>
                        <li>The QR code will be generated instantly and displayed below the text area.</li>
                        <li>Download the generated QR code as an image by clicking on the "Download QR Code" button.</li>
                    </ol>
                    <h3>Examples</h3>
                    <p>Here are some examples of how you can use the QR Code Generator:</p>
                    <ul>
                        <li>Generate a QR code for a URL and share it with others for quick access.</li>
                        <li>Create a QR code for a text message and use it in your marketing materials.</li>
                        <li>Generate a QR code for your contact information and share it with others for easy access.</li>
                    </ul>
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
