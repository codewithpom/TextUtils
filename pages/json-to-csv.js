import React, { useState } from 'react';
import Head from 'next/head';

const JsonToCsv = () => {
    const [jsonData, setJsonData] = useState('');
    const [csvData, setCsvData] = useState('');
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

    const convertJsonToCsv = () => {
        const json = JSON.parse(jsonData);
        const headers = Object.keys(json[0]);
        const csv = [
            headers.join(','), 
            ...json.map(row => headers.map(field => row[field]).join(','))
        ].join('\n');
        setCsvData(csv);
    };

    const copyToClipboard = () => {
        const textarea = document.getElementById('csvResult');
        textarea.select();
        document.execCommand('copy');
    };

    const saveToFile = () => {
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Head>
                <title>JSON to CSV Converter</title>
                <meta name="description" content="Convert JSON data to CSV format easily and quickly with our user-friendly online tool. Upload your JSON file or paste the data to get the CSV output instantly." />
                <meta name="keywords" content="JSON to CSV, JSON converter, CSV converter" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="JSON to CSV Converter" />
                <meta property="og:description" content="Convert JSON data to CSV format easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>JSON to CSV Converter</h1>
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
                <button className="btn btn-primary mt-3" onClick={convertJsonToCsv}>Convert</button>
                <textarea
                    className="form-control mt-3"
                    rows="10"
                    id="csvResult"
                    placeholder="CSV result"
                    value={csvData}
                    readOnly
                ></textarea>
                <button className="btn btn-secondary mt-3" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-secondary mt-3" onClick={saveToFile}>Save as File</button>
            </div>
        </>
    );
};

export default JsonToCsv;
