// This is a Nxt.js page
// With bootstrap
import { useState, useEffect } from 'react';

function App() {
    const [no_words, set_no_words] = useState();
    const [no_charachters, set_no_charachters] = useState();
    const [text, setText] = useState("");
    // use effect for change in text
    useEffect(() => {
        // calculate the no of words
        let words = text.split(" ");
        set_no_words(words.length);
        // calculate the no of charachters
        let charachters = text.replace(' ').length;
        set_no_charachters(charachters);
    }, [text]);

    return (
        <>
            <div className="container">

                <h1>Word and Charachter Counter</h1>
                <p>Enter the text below to calculate the no of words and charachters in it.</p>
                <textarea id="text" placeholder="Enter the text here" value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                <p>
                    {/* // conditionally render the no of words and charachters keeping the no bold*/}
                    {
                        no_words > 0 && no_charachters > 0 ?
                            <span>
                                The text contains <strong>{no_words}</strong> words and <strong>{no_charachters}</strong> charachters
                            </span>
                            :
                            null

                    }



                </p>
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
    )
}

export default App;