import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import {marked} from 'marked';


export default function MarkdownToHtml() {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');
    const [code, setCode] = useState('');
    const [renderHtml, setRenderHtml] = useState(false);
    useEffect(() => {
        // Convert markdown to HTML
        let convertedHtml = marked.parse(markdown);
        
        setHtml(convertedHtml);
    }, [markdown]);

    return (
        <>
            <Head>
                <title>Markdown to HTML</title>
                <meta name="description" content="Convert markdown to HTML" />
                <meta name="keywords" content="markdown to HTML, convert markdown, markdown parser" />
                <meta name="author" content="Your Name" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* for social media */}
                <meta property="og:title" content="Markdown to HTML" />
                <meta property="og:description" content="Convert markdown to HTML" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>Markdown to HTML</h1>
                <p>Enter the markdown below to convert it to HTML.</p>
                <textarea
                    id="markdown"
                    placeholder="Enter the markdown here"
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                ></textarea>
                
                <button
                    onClick={() => {
                        setHtml(marked.parse(markdown));
                        setRenderHtml(true);
                    }}
                >Preview</button>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(html);
                    }}
                >Copy</button>
                <button
                    onClick={() => {
                        // create a download link for the HTML file and click on it
                        const element = document.createElement('a');
                        const file = new Blob([html], { type: 'text/html' });
                        element.href = URL.createObjectURL(file);
                        element.download = 'makrkdown-converted.html';
                        document.body.appendChild(element);
                        element.click();
                        // remove the element from the DOM
                        document.body.removeChild(element);
                    }}
                >Download</button>
                <button
                    onClick={() => {
                        setCode(marked.parse(markdown));
                        setRenderHtml(false);
                    }}
                >Code</button>
                <br />
                <div>
                    {
                        // render HTML if it is not empty in another div and renderHTML is true
                        html && renderHtml ? (
                            <div className="html-output" dangerouslySetInnerHTML={{ __html: html }}></div>
                        ) : (
                            ''
                        )

                    }
                    {
                        // show the code if it is not empty in another div and renderHTML is false
                        code && !renderHtml ? (
                            <div className="html-output">
                                <pre>
                                    <code>{code}</code>
                                </pre>
                            </div>
                        ) : (
                            ''
                        )
                    }
                </div>
            </div>
            <style jsx>{`
                .container {
                    margin: 0 auto;
                    text-align: center;
                    width: 80%;
                }
                button {
                    margin: 0 0.5rem;
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
                .html-output {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 1.2rem;
                    margin-top: 1rem;
                    padding: 0.5rem;
                    text-align: left;
                }
            `}</style>
        </>
    );
}
