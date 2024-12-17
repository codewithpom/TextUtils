import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const HtmlMinifier = () => {
    const [htmlData, setHtmlData] = useState('');
    const [minifiedHtmlData, setMinifiedHtmlData] = useState('');
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [originalSize, setOriginalSize] = useState(0);
    const [minifiedSize, setMinifiedSize] = useState(0);
    const [reductionPercentage, setReductionPercentage] = useState(0);

    const handleHtmlChange = (event) => {
        setHtmlData(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setHtmlData(e.target.result);
        };
        reader.readAsText(file);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const fetchDataFromUrl = async () => {
        try {
            const response = await fetch('/api/fetch-url-content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });
            const data = await response.json();
            setHtmlData(data.content);
        } catch (error) {
            console.error('Error fetching data from URL:', error);
        }
    };

    const formatSize = (size) => {
        if (size < 1024) return `${size} bytes`;
        else if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
        else if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
        else return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    };

    const minifyHtml = () => {
        try {
            const minified = htmlData.replace(/\s+/g, ' ').trim();
            setMinifiedHtmlData(minified);
            const originalSize = new Blob([htmlData]).size;
            const minifiedSize = new Blob([minified]).size;
            setOriginalSize(originalSize);
            setMinifiedSize(minifiedSize);
            setReductionPercentage(((originalSize - minifiedSize) / originalSize) * 100);
        } catch (error) {
            console.error('Error minifying HTML:', error);
        }
    };

    const copyToClipboard = () => {
        const textarea = document.getElementById('minifiedHtmlResult');
        textarea.select();
        document.execCommand('copy');
    };

    const saveToFile = () => {
        const blob = new Blob([minifiedHtmlData], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'minified.html';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Head>
                <title>HTML Minifier</title>
                <meta name="description" content="Minify HTML data easily and quickly with our user-friendly online tool. Upload your HTML file or paste the data to get the minified output instantly." />
                <meta name="keywords" content="HTML minifier, HTML minify, minify HTML" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="HTML Minifier" />
                <meta property="og:description" content="Minify HTML data easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>HTML Minifier</h1>
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter HTML data here"
                    value={htmlData}
                    onChange={handleHtmlChange}
                ></textarea>
                <input
                    type="file"
                    className="form-control mt-3"
                    accept=".html"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter URL to fetch HTML data"
                    value={url}
                    onChange={handleUrlChange}
                />
                <button className="btn btn-primary mt-3" onClick={fetchDataFromUrl}>Fetch Data from URL</button>
                <button className="btn btn-primary mt-3" onClick={minifyHtml}>Minify</button>
                <textarea
                    className="form-control mt-3"
                    rows="10"
                    id="minifiedHtmlResult"
                    placeholder="Minified HTML result"
                    value={minifiedHtmlData}
                    readOnly
                ></textarea>
                <button className="btn btn-secondary mt-3" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-secondary mt-3" onClick={saveToFile}>Save as File</button>
                <div className="mt-3">
                    <p>Original Size: {formatSize(originalSize)}</p>
                    <p>Minified Size: {formatSize(minifiedSize)}</p>
                    <p style={{ color: 'green' }}>Reduction Percentage: {reductionPercentage.toFixed(2)}%</p>
                </div>
            </div>
        </>
    );
};

export default HtmlMinifier;
