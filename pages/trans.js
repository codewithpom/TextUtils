// This is a Nxt.js page
// With bootstrap
import { useState, useEffect } from 'react';

function App() {
    const [text, setText] = useState('');
    const [langguage_to_be_translated, setLanguageToBeTranslated] = useState('en');
    const [translatedText, setTranslatedText] = useState('');

    function translateText() {
        fetch('/api/trans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                language: langguage_to_be_translated
            })
        })
        .then(response => response.json())
        .then(data => {
            setTranslatedText(data.translation);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <>
            <div className="container">
                <div className='text-center'>
                    <h1>Text Translator</h1>
                    <p>Enter the text and translate it accordingly !</p>
                </div>

                <label htmlFor='text'>Enter the text:- </label>
                <textarea id="text" placeholder="Enter the text here" value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <label htmlFor='lang'>Enter the language to be converted into:- </label>
                <input type='text' id='lang' 
                    value={langguage_to_be_translated}
                    onChange={(e) => setLanguageToBeTranslated(e.target.value)}
                ></input>
                <div className='text-center'>
                    <button onClick={translateText}>Translate Text</button>
                </div>
                <textarea id="text" placeholder="Translated Text" value={translatedText}
                    readOnly={true}
                ></textarea>
                {/* copy button */}
                <button onClick={() => {
                    navigator.clipboard.writeText(translatedText);
                    alert('Text copied to clipboard !')
                }}>Copy</button>


            </div>
            <hr></hr>
            {/* write about it */}
            <div className='text-center'>
                <h2>How to use it ?</h2>
                <p>Enter the text in the text area and select the existing delimeter and new delimeter and click on the translate text button to get the translated text.</p>
            </div>
            <div className='text-center'>
                <h2>What does it do ?</h2>
                <p>It translates the text based on the existing delimeter and joins it with the new delimeter.</p>
            </div>
            <div className='text-center'>
                <h2>Why was it made ?</h2>
                <p>It was made to translate the text based on the delimeter and join it with the new delimeter.</p>
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