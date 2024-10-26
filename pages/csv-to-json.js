import React, { useState, useEffect } from 'react';

const CsvToJson = () => {
    const [csvData, setCsvData] = useState('');
    const [jsonData, setJsonData] = useState('');

    const handleCsvChange = (event) => {
        setCsvData(event.target.value);
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
        navigator.clipboard.writeText(jsonData);
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
            <button className="btn btn-primary mt-3" onClick={convertCsvToJson}>Convert</button>
            <textarea
                className="form-control mt-3"
                rows="10"
                placeholder="JSON result"
                value={jsonData}
                readOnly
            ></textarea>
            <button className="btn btn-secondary mt-3" onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
    );
};

export default CsvToJson;
