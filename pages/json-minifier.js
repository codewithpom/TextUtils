import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const JsonMinifier = () => {
    const [jsonData, setJsonData] = useState('');
    const [minifiedJsonData, setMinifiedJsonData] = useState('');
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');

    const handleJsonChange = (event) => {
        setJsonData(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setJsonData(e.target.result);
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
            setJsonData(data.content);
        } catch (error) {
            console.error('Error fetching data from URL:', error);
        }
    };

    const minifyJson = () => {
        try {
            const minified = JSON.stringify(JSON.parse(jsonData));
            setMinifiedJsonData(minified);
        } catch (error) {
            console.error('Error minifying JSON:', error);
        }
    };

    const copyToClipboard = () => {
        const textarea = document.getElementById('minifiedJsonResult');
        textarea.select();
        document.execCommand('copy');
    };

    const saveToFile = () => {
        const blob = new Blob([minifiedJsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'minified.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Head>
                <title>JSON Minifier</title>
                <meta name="description" content="Minify JSON data easily and quickly." />
                <meta name="keywords" content="JSON minifier, JSON minify, minify JSON" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="JSON Minifier" />
                <meta property="og:description" content="Minify JSON data easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>JSON Minifier</h1>
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter JSON data here"
                    value={jsonData}
                    onChange={handleJsonChange}
                ></textarea>
                <input
                    type="file"
                    className="form-control mt-3"
                    accept=".json"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter URL to fetch JSON data"
                    value={url}
                    onChange={handleUrlChange}
                />
                <button className="btn btn-primary mt-3" onClick={fetchDataFromUrl}>Fetch Data from URL</button>
                <button className="btn btn-primary mt-3" onClick={minifyJson}>Minify</button>
                <textarea
                    className="form-control mt-3"
                    rows="10"
                    id="minifiedJsonResult"
                    placeholder="Minified JSON result"
                    value={minifiedJsonData}
                    readOnly
                ></textarea>
                <button className="btn btn-secondary mt-3" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-secondary mt-3" onClick={saveToFile}>Save as File</button>
            </div>
        </>
    );
};

export default JsonMinifier;
