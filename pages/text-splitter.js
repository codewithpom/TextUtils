// This is a Nxt.js page
// With bootstrap
import { useState, useEffect } from 'react';

function App() {
    const [text, setText] = useState('');
    const [existingDelimeter, setExistingDelimeter] = useState('\n');
    const [newDelimeter, setNewDelimeter] = useState(',');
    const [splittedText, setSplittedText] = useState('');

    function splitText() {
        const splittedText = text.split(existingDelimeter).join(newDelimeter);
        setSplittedText(splittedText);
    }

    return (
        <>
            <div className="container">
                <div className='text-center'>
                    <h1>Text Splitter</h1>
                    <p>Enter the text and split it accordingly !</p>
                </div>

                <label htmlFor='text'>Enter the text:- </label>
                <textarea id="text" placeholder="Enter the text here" value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                {/* add 2 selects and a button in a line with proper gapping */}
                <div className='text-center'>
                    <label htmlFor='exist'>Existing Delimeter:- </label>

                    <select id='exist' style={{
                        margin: '10px 10px 10px 10px',

                    }}
                        value={existingDelimeter}
                        onChange={(e) => setExistingDelimeter(e.target.value)}

                    >
                        <option value={","}>Comma (,)</option>
                        <option value={"."}>Full Stop (.)</option>
                        <option value={"-"}>Hyphen (-)</option>
                        <option value={"_"}>Underscore (_)</option>
                        <option value={" "}>Space</option>
                        <option value={"\t"}>Tab</option>
                        <option value={"\n"}>New line</option>
                        <option value={"/"}>Forward Slash (/)</option>
                        <option value={"\\"}>Backward Slash (\)</option>
                        <option value={"|"}>Vertical Bar (|)</option>
                        <option value={''}>Split charachters</option>
                    </select>

                    <label htmlFor='exist'>New Delimeter:- </label>
                    <select id='exist' style={
                        {
                            margin: '10px 10px 10px 10px',

                        }
                    }
                        value={newDelimeter}
                        onChange={(e) => setNewDelimeter(e.target.value)}
                    >
                        <option value={","}>Comma (,)</option>
                        <option value={"."}>Full Stop (.)</option>
                        <option value={"-"}>Hyphen (-)</option>
                        <option value={"_"}>Underscore (_)</option>
                        <option value={" "}>Space</option>
                        <option value={"\t"}>Tab</option>
                        <option value={"\n"}>New line</option>
                        <option value={"/"}>Forward Slash (/)</option>
                        <option value={"\\"}>Backward Slash (\)</option>
                        <option value={"|"}>Vertical Bar (|)</option>
                        <option value={''}>Split charachters</option>
                    </select>



                </div>
                <div className='text-center'>
                    <button onClick={splitText}>Split Text</button>
                </div>
                <textarea id="text" placeholder="Resultant Text" value={splittedText}
                    readOnly={true}
                ></textarea>
                {/* copy button */}
                <button onClick={() => {
                    navigator.clipboard.writeText(splittedText);
                    alert('Text copied to clipboard !')
                }}>Copy</button>


            </div>
            <hr></hr>
            {/* write about it */}
            <div className='text-center'>
                <h2>How to use it ?</h2>
                <p>Enter the text in the text area and select the existing delimeter and new delimeter and click on the split text button to get the resultant text.</p>
            </div>
            <div className='text-center'>
                <h2>What does it do ?</h2>
                <p>It splits the text based on the existing delimeter and joins it with the new delimeter.</p>
            </div>
            <div className='text-center'>
                <h2>Why was it made ?</h2>
                <p>It was made to split the text based on the delimeter and join it with the new delimeter.</p>
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