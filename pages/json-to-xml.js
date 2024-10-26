import React, { useState } from 'react';
import Head from 'next/head';
import { parseString, Builder } from 'xml2js';

const JsonToXml = () => {
    const [jsonData, setJsonData] = useState('');
    const [xmlData, setXmlData] = useState('');
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

    const convertJsonToXml = () => {
        try {
            const json = JSON.parse(jsonData);
            const builder = new Builder();
            const xml = builder.buildObject(json);
            setXmlData(xml);
        } catch (error) {
            console.error('Error converting JSON to XML:', error);
        }
    };

    const copyToClipboard = () => {
        const textarea = document.getElementById('xmlResult');
        textarea.select();
        document.execCommand('copy');
    };

    const saveToFile = () => {
        const blob = new Blob([xmlData], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'output.xml';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Head>
                <title>JSON to XML Converter</title>
                <meta name="description" content="Convert JSON data to XML format easily and quickly." />
                <meta name="keywords" content="JSON to XML, JSON converter, XML converter" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="JSON to XML Converter" />
                <meta property="og:description" content="Convert JSON data to XML format easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>JSON to XML Converter</h1>
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
                <button className="btn btn-primary mt-3" onClick={convertJsonToXml}>Convert</button>
                <textarea
                    className="form-control mt-3"
                    rows="10"
                    id="xmlResult"
                    placeholder="XML result"
                    value={xmlData}
                    readOnly
                ></textarea>
                <button className="btn btn-secondary mt-3" onClick={copyToClipboard}>Copy to Clipboard</button>
                <button className="btn btn-secondary mt-3" onClick={saveToFile}>Save as File</button>
            </div>
        </>
    );
};

export default JsonToXml;
