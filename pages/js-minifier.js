import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { minify } from 'terser';

const JsMinifier = () => {
    const [jsData, setJsData] = useState('');
    const [minifiedJsData, setMinifiedJsData] = useState('');
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [originalSize, setOriginalSize] = useState(0);
    const [minifiedSize, setMinifiedSize] = useState(0);
    const [reductionPercentage, setReductionPercentage] = useState(0);

    const handleJsChange = (event) => {
        setJsData(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setJsData(e.target.result);
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
            setJsData(data.content);
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

    const minifyJs = async () => {
        try {
            const result = await minify(jsData);
            const minified = result.code;
            setMinifiedJsData(minified);
            const originalSize = new Blob([jsData]).size;
            const minifiedSize = new Blob([minified]).size;
            setOriginalSize(originalSize);
            setMinifiedSize(minifiedSize);
            setReductionPercentage(((originalSize - minifiedSize) / originalSize) * 100);
        } catch (error) {
            console.error('Error minifying JavaScript:', error);
        }
    };

    const copyToClipboard = () => {
        const textarea = document.getElementById('minifiedJsResult');
        textarea.select();
        document.execCommand('copy');
    };

    const saveToFile = () => {
        const blob = new Blob([minifiedJsData], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'minified.js';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Head>
                <title>JavaScript Minifier</title>
                <meta name="description" content="Minify JavaScript data easily and quickly." />
                <meta name="keywords" content="JavaScript minifier, JavaScript minify, minify JavaScript" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="JavaScript Minifier" />
                <meta property="og:description" content="Minify JavaScript data easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>JavaScript Minifier</h1>
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter JavaScript data here"
                    value={jsData}
                    onChange={handleJsChange}
                ></textarea>
                <input
                    type="file"
                    className="form-control mt-3"
                    accept=".js"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter URL to fetch JavaScript data"
                    value={url}
                    onChange={handleUrlChange}
                />
                <button className="btn btn-primary mt-3" onClick={fetchDataFromUrl}>Fetch Data from URL</button>
                <button className="btn btn-primary mt-3" onClick={minifyJs}>Minify</button>
                <textarea
                    className="form-control mt-3"
                    rows="10"
                    id="minifiedJsResult"
                    placeholder="Minified JavaScript result"
                    value={minifiedJsData}
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

export default JsMinifier;
