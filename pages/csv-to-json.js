import React, { useState, useEffect } from 'react';

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
            const response = await fetch(url);
            const data = await response.text();
            setCsvData(data);
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

    return (
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
        </div>
    );
};

export default CsvToJson;
