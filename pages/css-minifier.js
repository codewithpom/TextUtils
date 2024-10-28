import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { minify } from 'terser';

const CssMinifier = () => {
    const [cssData, setCssData] = useState('');
    const [minifiedCssData, setMinifiedCssData] = useState('');
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [originalSize, setOriginalSize] = useState(0);
    const [minifiedSize, setMinifiedSize] = useState(0);
    const [reductionPercentage, setReductionPercentage] = useState(0);
    const [error, setError] = useState('');

    const handleCssChange = (event) => {
        setCssData(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setCssData(e.target.result);
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
            setCssData(data.content);
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

    const minifyCss = async () => {
        try {
            const result = await minify(cssData);
            const minified = result.code;
            setMinifiedCssData(minified);
            const originalSize = new Blob([cssData]).size;
            const minifiedSize = new Blob([minified]).size;
            setOriginalSize(originalSize);
            setMinifiedSize(minifiedSize);
            setReductionPercentage(((originalSize - minifiedSize) / originalSize) * 100);
            setError('');
        } catch (error) {
            console.error('Error minifying CSS:', error);
            setError('Error minifying CSS: ' + error.message);
        }
    };

    const copyToClipboard = () => {
        const textarea = document.getElementById('minifiedCssResult');
        textarea.select();
        document.execCommand('copy');
    };

    const saveToFile = () => {
        const blob = new Blob([minifiedCssData], { type: 'text/css' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'minified.css';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Head>
                <title>CSS Minifier</title>
                <meta name="description" content="Minify CSS data easily and quickly." />
                <meta name="keywords" content="CSS minifier, CSS minify, minify CSS" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="CSS Minifier" />
                <meta property="og:description" content="Minify CSS data easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>CSS Minifier</h1>
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter CSS data here"
                    value={cssData}
                    onChange={handleCssChange}
                ></textarea>
                <input
                    type="file"
                    className="form-control mt-3"
                    accept=".css"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter URL to fetch CSS data"
                    value={url}
                    onChange={handleUrlChange}
                />
                <button className="btn btn-primary mt-3" onClick={fetchDataFromUrl}>Fetch Data from URL</button>
                <button className="btn btn-primary mt-3" onClick={minifyCss}>Minify</button>
                <textarea
                    className="form-control mt-3"
                    rows="10"
                    id="minifiedCssResult"
                    placeholder="Minified CSS result"
                    value={minifiedCssData}
                    readOnly
                ></textarea>
                <button className="btn btn-secondary mt-3" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-secondary mt-3" onClick={saveToFile}>Save as File</button>
                <div className="mt-3">
                    <p>Original Size: {formatSize(originalSize)}</p>
                    <p>Minified Size: {formatSize(minifiedSize)}</p>
                    <p style={{ color: 'green' }}>Reduction Percentage: {reductionPercentage.toFixed(2)}%</p>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </>
    );
};

export default CssMinifier;
