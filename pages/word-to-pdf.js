import React, { useState } from 'react';
import Head from 'next/head';
import { PDFDocument } from 'pdf-lib';
import { Document, Packer } from 'docx';
import { saveAs } from 'file-saver';

const WordToPdf = () => {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [pdfUrl, setPdfUrl] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const fetchDataFromUrl = async () => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            setFile(blob);
        } catch (error) {
            console.error('Error fetching data from URL:', error);
        }
    };

    const convertWordToPdf = async () => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (e) => {
            const arrayBuffer = e.target.result;
            const doc = await Document.load(arrayBuffer);
            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage();
            const { width, height } = page.getSize();
            const fontSize = 12;
            const text = doc.getText();
            const lines = text.split('\n');
            let y = height - fontSize;

            lines.forEach((line) => {
                page.drawText(line, {
                    x: 50,
                    y,
                    size: fontSize,
                });
                y -= fontSize + 2;
            });

            const pdfBytes = await pdfDoc.save();
            const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(pdfBlob);
            setPdfUrl(pdfUrl);
        };
        reader.readAsArrayBuffer(file);
    };

    const downloadPdf = () => {
        if (!pdfUrl) return;
        saveAs(pdfUrl, 'converted.pdf');
    };

    return (
        <>
            <Head>
                <title>Word to PDF Converter</title>
                <meta name="description" content="Convert Word files to PDF easily and quickly." />
                <meta name="keywords" content="Word to PDF, Word converter, PDF converter" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Word to PDF Converter" />
                <meta property="og:description" content="Convert Word files to PDF easily and quickly." />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>Word to PDF Converter</h1>
                <input
                    type="file"
                    className="form-control"
                    accept=".docx"
                    onChange={handleFileChange}
                />
                <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="Enter URL to fetch Word file"
                    value={url}
                    onChange={handleUrlChange}
                />
                <button className="btn btn-primary mt-3" onClick={fetchDataFromUrl}>Fetch Data from URL</button>
                <button className="btn btn-primary mt-3" onClick={convertWordToPdf}>Convert</button>
                {pdfUrl && (
                    <div className="mt-3">
                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">View PDF</a>
                        <button className="btn btn-secondary mt-3" onClick={downloadPdf}>Download PDF</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default WordToPdf;
