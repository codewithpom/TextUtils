import React, { useState } from 'react';
import Head from 'next/head';
import { parseString } from 'xml2js';

const XmlToJson = () => {
    const [xmlData, setXmlData] = useState('');
    const [jsonData, setJsonData] = useState('');
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');

    const handleXmlChange = (event) => {
        setXmlData(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            setXmlData(e.target.result);
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
            setXmlData(data.content);
        } catch (error) {
            console.error('Error fetching data from URL:', error);
        }
    };

    const convertXmlToJson = () => {
        parseString(xmlData, (err, result) => {
            if (err) {
                console.error('Error converting XML to JSON:', err);
            } else {
                setJsonData(JSON.stringify(result, null, 2));
            }
        });
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
                <title>XML to JSON Converter</title>
                <meta name="description" content="Convert XML data to JSON format easily and quickly." />
                <meta name="keywords" content="XML to JSON, XML converter, JSON converter" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="XML to JSON Converter" />
                <meta property="og:description" content="Convert XML data to JSON format easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>XML to JSON Converter</h1>
                <textarea
                    className="form-control"
                    rows="10"
                    placeholder="Enter XML data here"
                    value={xmlData}
                    onChange={handleXmlChange}
                ></textarea>
                <input
                    type="file"
                    className="form-control mt-3"
                    accept=".xml"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter URL to fetch XML data"
                    value={url}
                    onChange={handleUrlChange}
                />
                <button className="btn btn-primary mt-3" onClick={fetchDataFromUrl}>Fetch Data from URL</button>
                <button className="btn btn-primary mt-3" onClick={convertXmlToJson}>Convert</button>
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
            </div>
        </>
    );
};

export default XmlToJson;
