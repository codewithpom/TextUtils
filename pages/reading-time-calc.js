// Note: This is a Next.js page
import { useState, useEffect } from 'react';
import Head from 'next/head';
function App() {
    const [result, setResult] = useState("");
    const [wpm, setWpm] = useState(140);
    const [text, setText] = useState("");
    // useEffecft hook to calculate the reading time
    useEffect(() => {
        // calculate the reading time
        const calculateReadingTime = () => {
            // get the number of words in the text
            const words = text.trim().split(/\s+/).length;
            if (words === 0) setResult("");
            // calculate the reading time
            const time = Math.round(words / (wpm / 60));
            // set the result in tthe format of 1 min 30 sec
            setResult(`The person can read it in <b>${Math.floor(time / 60)} min ${time % 60} sec </b>`);

        };
        // call the function
        calculateReadingTime();
    }, [text, wpm]);

    return (
        <>
            <Head>
                <title>Reading Time Calculator</title>
                <meta name="description" content="Calculate reading time for your text for free!" />
                <meta name="keywords" content="reading time calculator,read time estimator,case converter" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* for social media */}
                <meta property="og:title" content="Reading Time Calculator" />
                <meta property="og:description" content="Calculate reading time for your text for free!" />
                <meta property="og:type" content="website" />


            </Head>
            <div className="container">
                <h1>Reading Time Calculator</h1>
                <p>Enter the text below to calculate the reading time.</p>
                <textarea id="text" placeholder="Enter the text here" value={text}
                    onChange={(e) => setText(e.target.value)}


                ></textarea>

                {/* add a slider for adjusting WPM. t defaults to 140 WPM*/}
                <p>WPM: <span id="wpm">{wpm}</span></p>
                <input
                    type="range"
                    id="wpm-slider"
                    min="30"
                    max="500"
                    value={wpm}
                    onChange={(e) => setWpm(e.target.value)}

                />


                <p id="result"
                    dangerouslySetInnerHTML={{ __html: result }}
                ></p>
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
}
export default App;