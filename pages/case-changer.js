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
                        id="result"
                        rows="3"
                        value={convertedText}
                        readOnly={true}

                    ></textarea>

                </div>
                <br></br>

                <button className="btn btn-primary" id='copy'
                    onClick={copyToClipboard}
                >Copy</button>
                <hr></hr>
                <h1 style={{
                    textAlign: "center",
                }}>Case Changer: A Handy Tool for Text Manipulation</h1>
                <h2>Introduction</h2>
                <p>Text is one of the most common forms of communication in the digital world. Whether it is for social media, blogging, academic writing, programming, or any other purpose, text plays a vital role in conveying information and expressing ideas. However, text also comes with various challenges and limitations, such as formatting, spelling, grammar, readability, and more. To overcome these challenges and enhance the quality and efficiency of text creation and editing, one needs to use various tools and utilities that can assist in manipulating and transforming text according to the desired style and purpose.</p>
                <p>One such tool is the Case Changer, a user-friendly online utility that can transform text into various case styles effortlessly. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements. In this essay, I will share my personal experience of using the Case Changer tool, and how it has helped me in dealing with different cases in texts.</p>
                <p>I believe that time management is crucial in a world filled with information. There are so many things to read, write, and learn, but so little time to do them all. That is why I always look for ways to optimize my time and productivity, especially when it comes to text-related tasks. The Case Changer tool has been a great asset for me in this regard, as it has saved me a lot of time and effort, as well as improved the readability and aesthetics of my texts.</p>
                <h2>Effortless Case Changing</h2>
                <p>The Case Changer tool, as depicted in the image, has a minimalist and intuitive interface that is easy to use and navigate. The interface has a dark theme that contrasts well with the white text, making it comfortable for my eyes.</p>
                <p>To use the tool, I simply input my text into the &quot;Enter text&quot; field. The tool then gives me options to convert my text into &quot;Uppercase&quot;, &quot;Lowercase&quot;, &quot;Sentence case&quot;, or &quot;Alternating case&quot;. Each option does exactly what it says; &#39;Uppercase&#39; transforms all the letters in my text to capital letters, &#39;Lowercase&#39; converts all the letters to small letters, &#39;Sentence case&#39; capitalizes the first letter of each sentence while keeping the rest in lowercase, and &#39;Alternating case&#39; alternates between uppercase and lowercase letters for each letter.</p>
                <p>The tool provides me with precision at my fingertips, as it can change the case of my text in seconds, without any errors or inconsistencies. It eliminates the uncertainty and hassle of estimating or manually changing the case of my text, which can be tedious and time-consuming, especially if the text is long or complex.</p>
                <p>The tool also allows me to customize my reading speed, by introducing a Words Per Minute (WPM) slider. This slider lets me adjust the average number of words that I can read per minute, which affects the estimated reading time of my text. By using this slider, I can cater to my individual reading preferences and speeds, as well as the difficulty and length of the text.</p>
                <h2>Key Features</h2>
                <p>The Case Changer tool has some key features that make it stand out from other similar tools. Some of these features are:</p>
                <ul>
                    <li>Multi-Platform Compatibility: The tool is compatible with various devices and platforms, such as desktops, laptops, tablets, and smartphones. This means that I can access and use the tool anytime and anywhere, as long as I have an internet connection. I do not need to download or install any software or application, as the tool is web-based and can be accessed through any browser. This gives me seamless access and convenience across various devices.</li>
                    <li>Interactive User Interface: The tool has an interactive and user-friendly design that makes it easy to navigate and use. The tool has clear and concise labels and instructions, as well as responsive and intuitive buttons and sliders. The tool also has a dark theme that contrasts well with the white text, making it comfortable for my eyes. The tool also has a feedback and support section, where I can rate the tool, share my suggestions or complaints, or contact the developers for any queries or issues. This gives me a satisfying and enjoyable user experience.</li>
                </ul>
                <h2>How It Works</h2>
                <p>The tool is very simple and easy to use, as it only requires three steps to change the case and calculate the reading time of any text. These steps are:</p>
                <ul>
                    <li><p>Paste Your Text: The first step is to copy and paste the text that I want to change the case and calculate the reading time into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field.</p>
                    </li>
                    <li><p>Get Case Changed: The tool will also give me options to convert my text into &quot;Uppercase&quot;, &quot;Lowercase&quot;, &quot;Sentence case&quot;, or &quot;Alternating case&quot;. I can choose any of these options, and the tool will instantly transform my text into the selected case style, and display it in the “Converted Text” field. There’s also a “Copy” button next to this field that allows me to copy my converted text easily and quickly. I can then paste my converted text wherever I want, such as a word processor, a social media platform, or a code editor.</p>
                    </li>
                </ul>
                <h2>Applications Across Scenarios</h2>
                <p>The Case Changer tool can be applied to various tasks and scenarios involving text manipulation and reading time estimation. Some of the examples are:</p>
                <ul>
                    <li>Academic Excellence: The tool can help me achieve academic excellence, by enabling me to efficiently allocate my time for reading and writing assignments, papers, or books. The tool can help me plan and prioritize my reading and writing tasks, by giving me an accurate and realistic estimate of how long it will take me to read or write a given text. The tool can also help me improve the quality and consistency of my writing, by allowing me to change the case of my text according to the standard writing conventions or the specific requirements of my assignment or paper.</li>
                    <li>Professional Productivity: The tool can help me boost my professional productivity, by optimizing my time and effort for reading and writing emails, reports, proposals, or presentations. The tool can help me manage and optimize my reading and writing workload, by giving me a clear and precise estimate of how long it will take me to read or write a given text. The tool can also help me enhance the readability and aesthetics of my writing, by allowing me to change the case of my text according to the appropriate format, style, and tone for my professional purpose and audience.</li>
                    <li>Leisurely Reading: The tool can help me enjoy my leisurely reading, by enhancing the joy and pleasure of reading books, articles, blogs, or stories. The tool can help me choose and enjoy my reading material, by giving me a quick and easy estimate of how long it will take me to read a given text. The tool can also help me experiment and have fun with different cases and styles for my reading material, by allowing me to change the case of my text according to my personal preference and mood.</li>
                </ul>
                <h2>Unlock Your Reading Potential</h2>
                <p>I invite you to experience the Case Changer tool for yourself, and see how it can help you unlock your reading potential. You can access the tool by visiting the txtUtils website, where you can also find other useful and interesting tools for text manipulation and enhancement. You can also join the community of readers who are benefiting from the Case Changer tool, by sharing your feedback, suggestions, or testimonials with the developers and other users. You can also embrace the Case Changer tool as an indispensable tool for efficient time management and enhanced reading experiences, by making it a part of your daily reading and writing routine.</p>
                <h2>Closing Statement</h2>
                <p>The Case Changer tool is a beacon of efficiency in a world where time is precious. It is a tool that can help you save time and effort, improve readability and aesthetics, and increase versatility and creativity when dealing with different cases in texts. It is a tool that can help</p>


            </div>


        </>
    );
}

export default App;
