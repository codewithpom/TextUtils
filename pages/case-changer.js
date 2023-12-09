// usestate
// useeffect
// Nextjs is being used here along with bootstrap

import Head from "next/head";
import { useState, useEffect } from "react";
function App() {
    const [convertedText, setConvertedText] = useState("");
    const [text, setText] = useState("");
    const handleTextChange = (event) => {
        setText(event.target.value);

    };
    function convertToSentenceCase(text) {
        // make the first letter of every word capital
        let newText = "";
        text = text.split(" ");
        for (let i = 0; i < text.length; i++) {
            // of every word irresrective of the number of spaces or periods
            try {
                newText += text[i].charAt(0).toUpperCase() + text[i].slice(1) + ' ';

            } catch (error) {
                console.log(error);
            }
        }
        return newText;
    }
    function convertToAlternatingCase(text) {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        return newText;
    }

    const handleClick = (event) => {
        const id = event.target.id;
        if (id === "upper") {
            setConvertedText(text.toUpperCase());
        } else if (id === "lower") {
            setConvertedText(text.toLowerCase());
        } else if (id === "sentence") {
            setConvertedText(convertToSentenceCase(text));
        } else if (id === "alternating") {
            setConvertedText(convertToAlternatingCase(text));
        }


    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(convertedText);
    };


    return (
        <>
            <Head>
                <title>Case Changer</title>
                <meta name="description" content="Case changer for text in almost all languages!" />
                <meta name="keywords" content="Case changer,text,case converter" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* for social media */}
                <meta property="og:title" content="Case Changer" />
                <meta property="og:description" content="Case changer" />
                <meta property="og:type" content="website" />


            </Head>
            <div className="container">

                <h1 className="text-center">Case Changer</h1>


                <div className="form-group">
                    <label htmlFor="text">Enter text</label>
                    <textarea
                        className="form-control"
                        id="text"
                        rows="3"
                        onChange={handleTextChange}
                        value={text}
                    ></textarea>
                </div>
                {/* add a button to convert it */}
                <br></br>
                <div className="text-center" id='button-list'
                    onClick={handleClick}
                >
                    <button className="btn btn-primary" id='upper'>Uppercase</button>
                    <button className="btn btn-primary" id='lower'>Lowercase</button>

                    <button className="btn btn-primary" id='sentence'>Sentence case</button>
                    <button className="btn btn-primary" id='alternating'>Alternating case</button>
                </div>
                {/* add one textarea beside the text area and add a button below the textarea */}
                <div className="form-group">
                    <label htmlFor="text" >Converted text</label>
                    <textarea
                        className="form-control"
                        id="text"
                        rows="3"
                        value={convertedText}
                        readOnly={true}
                    ></textarea>

                </div>
                <br></br>

                <button className="btn btn-primary" id='copy'
                    onClick={copyToClipboard}
                >Copy</button>

            </div>


        </>
    );
}

export default App;
