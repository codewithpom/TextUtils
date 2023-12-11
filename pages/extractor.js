// This is a Nxt.js page
// With bootstrap
import { useState, useEffect } from 'react';

function App() {
    function findEmails(text) {
        // Regular expression for matching email addresses
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;

        // Find all matches in the text
        const matches = text.match(emailPattern);

        return matches || [];
    }

    function extractUrls(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.match(urlRegex) || [];
    }
    const function_calls = {
        'email': findEmails,
        'url': extractUrls
    }

    const [text, setText] = useState('');
    const [toExtract, setToExtract] = useState('email');
    const [result, setResult] = useState('');

    function extract() {
        const result = function_calls[toExtract](text);
        setResult(result.join('\n'));
    }
    return (
        <>
            <div className="container">
                <div className='text-center'>
                    <h1>Email and URL Extractor</h1>
                    <p>Enter the text and extract the URLs and emials !</p>
                </div>

                <label htmlFor='text'>Enter the text:- </label>
                <textarea id="text" placeholder="Enter the text here" value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                {/* add 2 selects and a button in a line with proper gapping */}
                <div className='text-center'>
                    <label htmlFor='exist'>Extract:- </label>

                    <select id='exist' style={{
                        margin: '10px 10px 10px 10px',

                    }}
                        value={toExtract}
                        onChange={(e) => setToExtract(e.target.value)}

                    >
                        <option value='email'>Emails</option>
                        <option value='url'>URLs</option>
                    </select>





                </div>
                <div className='text-center'>
                    <button onClick={extract}>Extract !</button>
                </div>
                <textarea id="text" placeholder="Resultant Text"
                    readOnly={true}
                    value={result}
                ></textarea>
                {/* copy button */}
                <button onClick={() => {
                    navigator.clipboard.writeText(result);
                    alert('Text copied to clipboard !')
                }}>Copy</button>


            </div>
            <hr></hr>
            {/* write about it */}
            <div className='text-center'>
                <h2>How to use it ?</h2>
                <p>
                    Enter the text in the text area and select the type of data you want to extract.
                </p>
            </div>
            <div className='text-center'>
                <h2>What does it do ?</h2>
                <p>
                    It extracts the data from the text and displays it in the resultant text area.
                </p>
            </div>
            <div className='text-center'>
                <h2>Why was it made ?</h2>
                <p>
                    It was made to extract the emails and URLs from the text.
                </p>
            </div>


            <style jsx>{`
                .container {
                    margin: 0 auto;
                    
                    width: 80%;
                }
                h1 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    text-align: center;
                }
                h2 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    text-align: center;
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
    )
}

export default App;