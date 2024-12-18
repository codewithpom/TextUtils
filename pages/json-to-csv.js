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
                <div className="text-center" style={{ marginTop: '20px' }}>
                    <h2>About JSON to CSV Converter</h2>
                    <p>The JSON to CSV Converter is a user-friendly online utility that allows you to convert JSON data into CSV format effortlessly. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements.</p>
                    <p>With the JSON to CSV Converter, you can easily upload your JSON file or paste the JSON data, and get the CSV output instantly. The tool supports multiple JSON files and provides a seamless experience for converting JSON to CSV.</p>
                    <h3>Features</h3>
                    <ul>
                        <li>Upload JSON files or paste JSON data</li>
                        <li>Convert JSON data to CSV format</li>
                        <li>Download the CSV output</li>
                    </ul>
                    <h3>Usage Instructions</h3>
                    <p>To use the JSON to CSV Converter, follow these simple steps:</p>
                    <ol>
                        <li>Click on the "Choose Files" button to select the JSON files you want to convert.</li>
                        <li>Drag and drop the selected JSON files into the tool.</li>
                        <li>Click on the "Convert" button to convert the JSON files to CSV format.</li>
                        <li>Download the CSV output by clicking on the "Download CSV" link.</li>
                    </ol>
                    <h3>Examples</h3>
                    <p>Here are some examples of how you can use the JSON to CSV Converter:</p>
                    <ul>
                        <li>Convert JSON data from a web service response to CSV format for easier processing.</li>
                        <li>Transform JSON configuration files into CSV format for use in web applications.</li>
                        <li>Convert JSON data from a database export to CSV format for data analysis.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default JsonToCsv;
