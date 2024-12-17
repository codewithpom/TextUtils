import Head from 'next/head';
import { useState, useEffect } from 'react';

const Base64EncoderDecoder = () => {
    const [encodedText, setEncodedText] = useState('');
    const [decodedText, setDecodedText] = useState('');

    const handleEncodedTextChange = (event) => {
        const encoded = event.target.value;
        setEncodedText(encoded);
        try {
            setDecodedText(atob(encoded));
        } catch (error) {
            setDecodedText('Invalid base64 string');
        }
    };

    const handleDecodedTextChange = (event) => {
        const decoded = event.target.value;
        setDecodedText(decoded);
        setEncodedText(btoa(decoded));
    };

    return (
        <>
            <Head>
                <title>Base64 Encoder/Decoder</title>
                <meta name="description" content="Encode and decode base64 strings easily with our user-friendly online tool. Enter your text and get the encoded or decoded result instantly." />
                <meta name="keywords" content="Base64 encoder, Base64 decoder, encode, decode" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Base64 Encoder/Decoder" />
                <meta property="og:description" content="Encode and decode base64 strings easily!" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>Base64 Encoder/Decoder</h1>
                <p>Enter the text below to encode or decode it using base64.</p>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="decodedText">Decoded Text</label>
                        <textarea
                            className="form-control"
                            id="decodedText"
                            rows="10"
                            placeholder="Enter text to encode"
                            value={decodedText}
                            onChange={handleDecodedTextChange}
                        ></textarea>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="encodedText">Encoded Text</label>
                        <textarea
                            className="form-control"
                            id="encodedText"
                            rows="10"
                            placeholder="Enter text to decode"
                            value={encodedText}
                            onChange={handleEncodedTextChange}
                        ></textarea>
                    </div>
                </div>
                <hr />
                <h2>Base64 Encoder/Decoder: A Handy Tool for Text Manipulation</h2>
                <h3>Introduction</h3>
                <p>Base64 encoding is a method of converting binary data into a text format, which can be easily transmitted over text-based protocols such as HTTP, SMTP, and others. It is commonly used in various applications, including email attachments, data storage, and data transfer. Base64 decoding is the reverse process of converting the encoded text back into its original binary form.</p>
                <p>The Base64 Encoder/Decoder tool is a user-friendly online utility that allows you to encode and decode base64 strings effortlessly. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements. In this section, we will explore the features and benefits of the Base64 Encoder/Decoder tool.</p>
                <h3>Effortless Encoding and Decoding</h3>
                <p>The Base64 Encoder/Decoder tool has a minimalist and intuitive interface that is easy to use and navigate. The interface has a dark theme background with white and grey text for visibility.</p>
                <p>To use the tool, simply input your text into the "Enter text here" field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field.</p>
                <p>The tool provides you with the ability to encode and decode base64 strings in seconds, without any errors or inconsistencies. It displays the encoded or decoded result in the "Encoded/Decoded result" field. The tool eliminates the uncertainty and hassle of encoding and decoding base64 strings manually, which can be tedious and time-consuming, especially if the text is long or complex.</p>
                <h3>Key Features</h3>
                <p>The Base64 Encoder/Decoder tool has some key features that make it stand out from other similar tools. Some of these features are:</p>
                <ul>
                    <li>Multi-Type Text Support: The tool can support any type of text, such as plain text, rich text, HTML, markdown, or code. This means that you can encode and decode any text that you encounter or create, regardless of the format or style. The tool can also detect and display the type of text that you input, giving you a better understanding of the text structure and content.</li>
                    <li>Multi-Language Text Support: The tool can support any language, such as English, Hindi, Chinese, or Japanese. This means that you can encode and decode any text that you encounter or create, regardless of the language or script. The tool can also detect and display the language of the text that you input, giving you a better understanding of the text meaning and context.</li>
                    <li>Interactive User Interface: The tool has an interactive and user-friendly design that makes it easy to navigate and use. The tool has clear and concise labels and instructions, as well as responsive and intuitive buttons and sliders. The tool also has a dark theme that contrasts well with the white text, making it comfortable for your eyes. The tool also has a feedback and support section, where you can rate the tool, share your suggestions or complaints, or contact the developers for any queries or issues. This gives you a satisfying and enjoyable user experience.</li>
                </ul>
                <h3>How It Works</h3>
                <p>The tool is very simple and easy to use, as it only requires three steps to encode and decode base64 strings. These steps are:</p>
                <ul>
                    <li>Paste Your Text: The first step is to copy and paste the text that you want to encode or decode into the "Enter text here" field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field.</li>
                    <li>Encode or Decode: The second step is to choose whether you want to encode or decode the text. You can do this by clicking on the "Encode" or "Decode" button. The tool will then encode or decode the text accordingly, and display the result in the "Encoded/Decoded result" field.</li>
                    <li>Copy or Save: The third and final step is to copy or save the encoded or decoded result. You can do this by selecting the text in the "Encoded/Decoded result" field and copying it to your clipboard, or by saving it to a file. The tool provides you with the flexibility to use the encoded or decoded result in any way you want.</li>
                </ul>
                <h3>Applications Across Scenarios</h3>
                <p>The Base64 Encoder/Decoder tool can be applied to various tasks and scenarios involving text manipulation and encoding/decoding. Some of the examples are:</p>
                <ul>
                    <li>Data Transmission: The tool can help you transmit data securely and efficiently, by enabling you to encode binary data into a text format that can be easily transmitted over text-based protocols such as HTTP, SMTP, and others. The tool can help you ensure the integrity and confidentiality of your data, by allowing you to encode sensitive information such as passwords, keys, and tokens into base64 strings. The tool can also help you decode the received data back into its original binary form, by allowing you to decode base64 strings into their original format.</li>
                    <li>Data Storage: The tool can help you store data compactly and conveniently, by enabling you to encode binary data into a text format that can be easily stored in text-based storage systems such as databases, files, and cookies. The tool can help you reduce the size and complexity of your data, by allowing you to encode large and complex data structures such as images, audio, and video into base64 strings. The tool can also help you retrieve the stored data back into its original binary form, by allowing you to decode base64 strings into their original format.</li>
                    <li>Data Processing: The tool can help you process data accurately and consistently, by enabling you to encode binary data into a text format that can be easily processed by text-based processing systems such as parsers, analyzers, and validators. The tool can help you simplify and streamline your data processing tasks, by allowing you to encode complex and heterogeneous data sources such as XML, JSON, and CSV into base64 strings. The tool can also help you convert the processed data back into its original binary form, by allowing you to decode base64 strings into their original format.</li>
                </ul>
                <h3>Unlock Your Text Potential</h3>
                <p>I invite you to experience the Base64 Encoder/Decoder tool for yourself, and see how it can help you unlock your text potential. You can access the tool by visiting the txtUtils website, where you can also find other useful and interesting tools for text manipulation and enhancement. You can also join the community of text users and creators who are benefiting from the Base64 Encoder/Decoder tool, by sharing your feedback, suggestions, or testimonials with the developers and other users. You can also embrace the Base64 Encoder/Decoder tool as an indispensable tool for text manipulation and encoding/decoding, by making it a part of your daily text and writing routine.</p>
                <h3>Closing Statement</h3>
                <p>The Base64 Encoder/Decoder tool is a beacon of efficiency in a world where text is abundant. It is a tool that can help you save time and effort, improve readability and aesthetics, and increase versatility and creativity when dealing with different texts. It is a tool that can help you encode and decode any text that you encounter or create, regardless of the type, language, or length. It is a tool that can help you optimize your text and productivity, by giving you the ability to encode and decode base64 strings in seconds. It is a tool that can help you enjoy your text, by giving you the ability to encode and decode base64 strings effortlessly. It is a tool that can help you unlock your text potential.</p>
            </div>
            <style jsx>{`
                .container {
                    margin: 0 auto;
                    text-align: center;
                    width: 80%;
                }
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                textarea {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                    padding: 0.5rem;
                    width: 100%;
                }
                button {
                    background-color: #0070f3;
                    border: none;
                    border-radius: 5px;
                    color: #fff;
                    cursor: pointer;
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                    padding: 0.5rem 1rem;
                }
                button:hover {
                    background-color: #0060d3;
                }
                p {
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
};

export default Base64EncoderDecoder;
