import Head from 'next/head';
import { useState, useEffect } from 'react';

function App() {
    const [textSize, setTextSize] = useState();
    const [text, setText] = useState("");

    function formatBytes(bytes, decimals = 2) {
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    useEffect(() => {
        const textSize = new Blob([text]).size;
        setTextSize(textSize);
    }, [text]);

    return (
        <>
            <Head>
                <title>Text Size Calculator</title>
                <meta name="description" content="Calculate the size of your text in bytes easily with our user-friendly online tool. Enter your text and get the size in bytes instantly." />
                <meta name="keywords" content="Text Size Calculator, text, size, bytes" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Text Size Calculator" />
                <meta property="og:description" content="Calculate the size of your text in bytes easily!" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>Text Size Calculator</h1>
                <p>Enter the text below to calculate the size of the text in bytes.</p>
                <textarea id="text" placeholder="Enter the text here" value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                <p>
                    {textSize > 0 ?
                        <span>
                            The text size is <strong>{formatBytes(textSize)}</strong> bytes.
                        </span>
                        : null
                    }
                </p>
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
                button {
                    background-color: #0070f3;
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    cursor: pointer;
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                    padding: 0.5rem 1rem;
                }
                button:hover {
                    background-color: #0060d3;
                }
                p {
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    )
}

export default App;
