import Head from 'next/head';
import { useState } from 'react';
import emojiRegex from 'emoji-regex';

function App() {
    const [text, setText] = useState('');
    const [resultantText, setResultantText] = useState('');

    function removeEmojis() {
        const regex = emojiRegex();
        const result = text.replace(regex, '');
        setResultantText(result);
    }

    return (
        <>
            <Head>
                <title>Emoji Remover</title>
                <meta name="description" content="Remove emojis from your text easily!" />
                <meta name="keywords" content="Emoji Remover, text, emoji, remover" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Emoji Remover" />
                <meta property="og:description" content="Remove emojis from your text easily!" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <div className='text-center'>
                    <h1>Emoji Remover</h1>
                    <p>Enter the text and remove emojis!</p>
                </div>

                <label htmlFor='text'>Enter the text:- </label>
                <textarea id="text" placeholder="Enter the text here" value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                <div className='text-center'>
                    <button onClick={removeEmojis}>Remove Emojis</button>
                </div>
                <textarea id="text" placeholder="Resultant Text" value={resultantText}
                    readOnly={true}
                ></textarea>
                <button onClick={() => {
                    navigator.clipboard.writeText(resultantText);
                    alert('Text copied to clipboard!')
                }}>Copy</button>
            </div>
            <hr></hr>
            <div className='text-center'>
                <h2>How to use it?</h2>
                <p>Enter the text in the text area and click on the "Remove Emojis" button to get the resultant text without emojis.</p>
            </div>
            <div className='text-center'>
                <h2>What does it do?</h2>
                <p>It removes emojis from the input text.</p>
            </div>
            <div className='text-center'>
                <h2>Why was it made?</h2>
                <p>It was made to remove emojis from the text.</p>
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
