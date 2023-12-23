// This is a Nxt.js page
// With bootstrap
import { useState, useEffect } from 'react';
import SEO from './components/SEO'

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
            <SEO 
                title={'Email and URL extractor'}
                description={'Extract Emails and URLs from your text with a single click and copy the results for free !'}
                keywords={[
                    'email',
                    'text tools',
                    'email extractor',
                    'url extractor',
                    'url'
                ]}
            />
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

                <hr></hr>
                <h1>Email and URL Extractor: A Handy Tool for Text Manipulation</h1>
                <h2>Introduction</h2>
                <p>Text is one of the most common forms of communication in the digital world. Whether it is for social media, blogging, academic writing, programming, or any other purpose, text plays a vital role in conveying information and expressing ideas. However, text also comes with various challenges and limitations, such as formatting, spelling, grammar, readability, and more. To overcome these challenges and enhance the quality and efficiency of text creation and editing, one needs to use various tools and utilities that can assist in analyzing and transforming text according to the desired style and purpose.</p>
                <p>One such tool is the Email and URL Extractor, a user-friendly online utility that can extract emails and URLs from any text effortlessly. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements. In this essay, I will share my personal experience of using the Email and URL Extractor tool, and how it has helped me in dealing with different texts.</p>
                <p>I believe that text manipulation is crucial in a world filled with information. There are so many things to read, write, and learn, but so little time to do them all. That is why I always look for ways to optimize my text and productivity, especially when it comes to text-related tasks. The Email and URL Extractor tool has been a great asset for me in this regard, as it has given me the ability to extract emails and URLs from any text, as well as improved the readability and aesthetics of my text.</p>
                <h2>Effortless Text Extraction</h2>
                <p>The Email and URL Extractor tool, as depicted in the image, has a minimalist and intuitive interface that is easy to use and navigate. The interface has a dark theme background with white and grey text for visibility.</p>
                <p>To use the tool, I simply input my text into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field.</p>
                <p>The tool provides me with the ability to extract emails and URLs from any text, based on the standard formats and patterns of these elements. An email is a string of characters that contains an &#39;@&#39; symbol and a domain name, such as &#39;<a href="mailto:example@example.com">example@example.com</a>&#39;. A URL is a string of characters that starts with &#39;http://&#39; or &#39;https://&#39; and contains a domain name and a path, such as &#39;<a href="https://www.example.com/path">https://www.example.com/path</a>&#39;. The tool gives me options to select what to extract from the text, either emails or URLs, from a dropdown menu. I can choose either option, and the tool will instantly scan the text and extract all the emails or URLs that match the criteria, and display them in the “Resultant Text” field below. There’s also a “Copy” button next to this field that allows me to copy the extracted information easily and quickly.</p>
                <p>The tool eliminates the uncertainty and hassle of extracting emails and URLs manually, which can be tedious and time-consuming, especially if the text is long or complex. It also ensures that the emails and URLs are extracted accurately and consistently, without any errors or omissions.</p>
                <h2>Key Features</h2>
                <p>The Email and URL Extractor tool has some key features that make it stand out from other similar tools. Some of these features are:</p>
                <ul>
                    <li>Multi-Type Text Support: The tool can support any type of text, such as plain text, rich text, HTML, markdown, or code. This means that I can extract emails and URLs from any text that I encounter or create, regardless of the format or style. The tool can also detect and display the type of text that I input, giving me a better understanding of the text structure and content.</li>
                    <li>Multi-Language Text Support: The tool can support any language, such as English, Hindi, Chinese, or Japanese. This means that I can extract emails and URLs from any text that I encounter or create, regardless of the language or script. The tool can also detect and display the language of text that I input, giving me a better understanding of the text meaning and context.</li>
                    <li>Interactive User Interface: The tool has an interactive and user-friendly design that makes it easy to navigate and use. The tool has clear and concise labels and instructions, as well as responsive and intuitive buttons and dropdown menus. The tool also has a dark theme that contrasts well with the white text, making it comfortable for my eyes. The tool also has a feedback and support section, where I can rate the tool, share my suggestions or complaints, or contact the developers for any queries or issues. This gives me a satisfying and enjoyable user experience.</li>
                </ul>
                <h2>How It Works</h2>
                <p>The tool is very simple and easy to use, as it only requires two steps to extract emails and URLs from any text. These steps are:</p>
                <ul>
                    <li>Paste Your Text: The first step is to copy and paste the text that I want to extract emails and URLs from into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field.</li>
                    <li>Select Extraction Option: The second step is to select what to extract from the text, either emails or URLs, from the dropdown menu. I can choose either option, and the tool will instantly scan the text and extract all the emails or URLs that match the criteria, and display them in the “Resultant Text” field below. There’s also a “Copy” button next to this field that allows me to copy the extracted information easily and quickly.</li>
                </ul>
                <h2>Applications Across Scenarios</h2>
                <p>The Email and URL Extractor tool can be applied to various tasks and scenarios involving text manipulation and extraction. Some of the examples are:</p>
                <ul>
                    <li>Data Collection: The tool can help me collect data, by enabling me to extract emails and URLs from various sources of text, such as websites, documents, or emails. The tool can help me gather and organize data, by giving me the ability to extract emails and URLs from large and diverse texts, and store them in a separate and structured format. The tool can also help me analyze and use data, by allowing me to access and communicate with the extracted emails and URLs, such as sending emails or visiting websites.</li>
                    <li>Text Editing: The tool can help me edit text, by enabling me to extract emails and URLs from the text that I want to modify or delete. The tool can help me improve the readability and aesthetics of my text, by giving me the ability to extract emails and URLs from cluttered and messy texts, and remove or replace them with more suitable elements. The tool can also help me experiment and have fun with different texts, by allowing me to extract emails and URLs from interesting and creative texts, and use them for different purposes.</li>
                    <li>Text Creation: The tool can help me create text, by enabling me to extract emails and URLs from the text that I want to use or reference. The tool can help me increase the versatility and creativity of my text, by giving me the ability to extract emails and URLs from relevant and useful texts, and incorporate them into my own text. The tool can also help me generate new and interesting texts, by allowing me to extract emails and URLs from random and unexpected texts, and use them as inspiration or material for my text.</li>
                </ul>
                <h2>Unlock Your Text Potential</h2>
                <p>I invite you to experience the Email and URL Extractor tool for yourself, and see how it can help you unlock your text potential. You can access the tool by visiting the txtUtils website, where you can also find other useful and interesting tools for text manipulation and enhancement. You can also join the community of text users and creators who are benefiting from the Email and URL Extractor tool, by sharing your feedback, suggestions, or testimonials with the developers and other users. You can also embrace the Email and URL Extractor tool as an indispensable tool for text manipulation and extraction, by making it a part of your daily text and writing routine.</p>
                <h2>Closing Statement</h2>
                <p>The Email and URL Extractor tool is a beacon of efficiency in a world where text is abundant. It is a tool that can help you save time and effort, improve readability and aesthetics, and increase versatility and creativity when dealing with different texts. It is a tool that can help you extract and transform any text that you encounter or create, regardless of the type, language, or length. It is a tool that can help you optimize your text and productivity, by giving you the ability to extract emails and URLs from any text. It is a tool that can help you enjoy your text, by giving you the ability to extract emails and URLs from any text. It is a tool that can help you unlock your text potential.</p>

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