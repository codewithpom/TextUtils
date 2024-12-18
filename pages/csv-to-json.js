import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const CsvToJson = () => {
    const [csvData, setCsvData] = useState('');
    const [jsonData, setJsonData] = useState('');
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');

    const handleCsvChange = (event) => {
        setCsvData(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setCsvData(e.target.result);
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
            setCsvData(data.content);
        } catch (error) {
            console.error('Error fetching data from URL:', error);
        }
    };

    const convertCsvToJson = () => {
        const lines = csvData.split('\n').filter(line => line.trim() !== '');
        const headers = lines[0].split(',');
        const result = lines.slice(1).map(line => {
            const values = line.split(',');
            const obj = {};
            headers.forEach((header, index) => {
                obj[header] = values[index];
            });
            return obj;
        });
        setJsonData(JSON.stringify(result, null, 2));
    };

    const copyToClipboard = () => {
        const textarea = document.getElementById('jsonResult');
        textarea.select();
        document.execCommand('copy');
    };

    const saveToFile = () => {
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Head>
                <title>CSV to JSON Converter</title>
                <meta name="description" content="Convert CSV data to JSON format easily and quickly with our user-friendly online tool. Upload your CSV file or paste the data to get the JSON output instantly." />
                <meta name="keywords" content="CSV to JSON, CSV converter, JSON converter" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="CSV to JSON Converter" />
                <meta property="og:description" content="Convert CSV data to JSON format easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>CSV to JSON Converter</h1>
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter CSV data here"
                    value={csvData}
                    onChange={handleCsvChange}
                ></textarea>
                <input
                    type="file"
                    className="form-control mt-3"
                    accept=".csv"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter URL to fetch CSV data"
                    value={url}
                    onChange={handleUrlChange}
                />
                <button className="btn btn-primary mt-3" onClick={fetchDataFromUrl}>Fetch Data from URL</button>
                <button className="btn btn-primary mt-3" onClick={convertCsvToJson}>Convert</button>
                <textarea
                    className="form-control mt-3"
                    rows="10"
                    id="jsonResult"
                    placeholder="JSON result"
                    value={jsonData}
                    readOnly
                ></textarea>
                <button className="btn btn-secondary mt-3" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-secondary mt-3" onClick={saveToFile}>Save as File</button>
                <div className="text-center" style={{ marginTop: '20px' }}>
                    <h2>About CSV to JSON Converter</h2>
                    <p>The CSV to JSON Converter is a user-friendly online utility that allows you to convert CSV data into JSON format effortlessly. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements.</p>
                    <p>With the CSV to JSON Converter, you can easily upload your CSV file or paste the CSV data, and get the JSON output instantly. The tool supports multiple CSV files and provides a seamless experience for converting CSV to JSON.</p>
                    <h3>Features</h3>
                    <ul>
                        <li>Upload CSV files or paste CSV data</li>
                        <li>Convert CSV data to JSON format</li>
                        <li>Download the JSON output</li>
                    </ul>
                    <h3>Usage Instructions</h3>
                    <p>To use the CSV to JSON Converter, follow these simple steps:</p>
                    <ol>
                        <li>Click on the "Choose Files" button to select the CSV files you want to convert.</li>
                        <li>Drag and drop the selected CSV files into the tool.</li>
                        <li>Click on the "Convert" button to convert the CSV files to JSON format.</li>
                        <li>Download the JSON output by clicking on the "Download JSON" link.</li>
                    </ol>
                    <h3>Examples</h3>
                    <p>Here are some examples of how you can use the CSV to JSON Converter:</p>
                    <ul>
                        <li>Convert CSV data from a spreadsheet to JSON format for use in web applications.</li>
                        <li>Transform CSV configuration files into JSON format for easier processing.</li>
                        <li>Convert CSV data from a database export to JSON format for data analysis.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CsvToJson;
