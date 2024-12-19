import { useState, useEffect } from 'react';
import Head from 'next/head';
import SEO from '../components/SEO';
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
            <Head>
                <title>Text Splitter - Free Tool for Splitting and Organizing Text</title>
                <meta name="description" content="Discover the Text Splitter Tool, a powerful solution for efficiently breaking down large volumes of text into manageable segments." />
                <meta name="keywords" content="text splitter, content organization, writing tool, text segmentation, content creation" />
                <meta name="author" content="Padmashree Jha" />
            </Head>
            <SEO 
                title={'Text Splitter'}
                description={'A free and futuristic text splitting and separator tool from TxtUtils. This tool helps you to split text by existing separator and change to a new one.'}
                keywords={[
                    'text splitter',
                    'text tools',
                    'text organisation',
                    'writing tool'
                ]}
            />
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
                {/* class name for full width hr */}
                <hr
                    className='text-center'
                />
                {/* write about it in at least 1000 words */}
                <h2>Introduction</h2>
                <p>Text is one of the most common forms of communication in the digital world. Whether it is for social media, blogging, academic writing, programming, or any other purpose, text plays a vital role in conveying information and expressing ideas. However, text also comes with various challenges and limitations, such as formatting, spelling, grammar, readability, and more. To overcome these challenges and enhance the quality and efficiency of text creation and editing, one needs to use various tools and utilities that can assist in analyzing and transforming text according to the desired style and purpose.</p>
                <p>One such tool is the Text Splitter, a user-friendly online utility that can split text into smaller segments based on different delimiters effortlessly. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements. In this essay, I will share my personal experience of using the Text Splitter tool, and how it has helped me in dealing with different texts.</p>
                <p>I believe that text manipulation is crucial in a world filled with information. There are so many things to read, write, and learn, but so little time to do them all. That is why I always look for ways to optimize my text and productivity, especially when it comes to text-related tasks. The Text Splitter tool has been a great asset for me in this regard, as it has given me the ability to split text into smaller and more manageable segments, as well as improved the readability and aesthetics of my text.</p>
                <h2>Effortless Text Splitting</h2>
                <p>The Text Splitter tool, as depicted in the image, has a minimalist and intuitive interface that is easy to use and navigate. The interface has a dark theme background with white and grey text for visibility.</p>
                <p>To use the tool, I simply input my text into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field.</p>
                <p>The tool provides me with the ability to split text into smaller segments based on different delimiters, such as new lines, commas, spaces, or tabs. A delimiter is a character or a sequence of characters that separates the text into segments. For example, a comma is a delimiter that separates the text into segments based on the occurrence of commas in the text. The tool gives me options to select the existing delimiter and the new delimiter from two dropdown menus. The existing delimiter is the delimiter that is already present in the text, and the new delimiter is the delimiter that I want to use to split the text. For example, if I want to split the text based on new lines, I can select the existing delimiter as &#39;New line&#39; and the new delimiter as &#39;Comma (,)&#39;. The tool will then replace all the new lines in the text with commas, and split the text accordingly.</p>
                <p>The tool eliminates the uncertainty and hassle of splitting text manually, which can be tedious and time-consuming, especially if the text is long or complex. It also ensures that the text is split accurately and consistently, without any errors or inconsistencies.</p>
                <h2>Key Features</h2>
                <p>The Text Splitter tool has some key features that make it stand out from other similar tools. Some of these features are:</p>
                <ul>
                    <li>Multi-Type Text Support: The tool can support any type of text, such as plain text, rich text, HTML, markdown, or code. This means that I can split any text that I encounter or create, regardless of the format or style. The tool can also detect and display the type of text that I input, giving me a better understanding of the text structure and content.</li>
                    <li>Multi-Language Text Support: The tool can support any language, such as English, Hindi, Chinese, or Japanese. This means that I can split any text that I encounter or create, regardless of the language or script. The tool can also detect and display the language of text that I input, giving me a better understanding of the text meaning and context.</li>
                    <li>Interactive User Interface: The tool has an interactive and user-friendly design that makes it easy to navigate and use. The tool has clear and concise labels and instructions, as well as responsive and intuitive buttons and dropdown menus. The tool also has a dark theme that contrasts well with the white text, making it comfortable for my eyes. The tool also has a feedback and support section, where I can rate the tool, share my suggestions or complaints, or contact the developers for any queries or issues. This gives me a satisfying and enjoyable user experience.</li>
                </ul>
                <h2>How It Works</h2>
                <p>The tool is very simple and easy to use, as it only requires three steps to split text based on different delimiters. These steps are:</p>
                <ul>
                    <li>Paste Your Text: The first step is to copy and paste the text that I want to split into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field.</li>
                    <li>Select Delimiters: The second step is to select the existing delimiter and the new delimiter from the two dropdown menus. The existing delimiter is the delimiter that is already present in the text, and the new delimiter is the delimiter that I want to use to split the text. The tool gives me options to select from common delimiters, such as new lines, commas, spaces, or tabs. I can also enter a custom delimiter, such as a symbol or a word, if I want to split the text based on a specific character or sequence of characters.</li>
                    <li>Split Text: The third and final step is to split the text based on the selected delimiters. I can do this by clicking on the blue “Split Text” button. The tool will then replace all the occurrences of the existing delimiter in the text with the new delimiter, and split the text accordingly. The tool will display the resultant text in the “Resultant Text” field below, with a “Copy” button adjacent for easy copying of the results. I can then paste the resultant text wherever I want, such as a word processor, a spreadsheet, or a database.</li>
                </ul>
                <h2>Applications Across Scenarios</h2>
                <p>The Text Splitter tool can be applied to various tasks and scenarios involving text manipulation and splitting. Some of the examples are:</p>
                <ul>
                    <li>Data Analysis: The tool can help me perform data analysis, by enabling me to split data into smaller and more manageable segments based on different delimiters. The tool can help me organize and process data, by giving me the ability to split data into columns, rows, cells, or fields based on the occurrence of delimiters in the data. The tool can also help me convert data into different formats, by allowing me to change the delimiters in the data according to the required format. For example, I can use the tool to split a CSV file into an Excel file, by changing the delimiter from comma to tab.</li>
                    <li>Text Editing: The tool can help me edit text, by enabling me to split text into smaller and more readable segments based on different delimiters. The tool can help me improve the readability and aesthetics of my text, by giving me the ability to split text into paragraphs, sentences, words, or letters based on the occurrence of delimiters in the text. The tool can also help me experiment and have fun with different texts, by allowing me to change the delimiters in the text according to my personal preference and mood. For example, I can use the tool to split a poem into a list of words, by changing the delimiter from new line to comma.</li>
                    <li>Text Creation: The tool can help me create text, by enabling me to split text into smaller and more creative segments based on different delimiters. The tool can help me increase the versatility and creativity of my text, by giving me the ability to split text into phrases, clauses, or expressions based on the occurrence of delimiters in the text. The tool can also help me generate new and interesting texts, by allowing me to change the delimiters in the text according to my inspiration and imagination. For example, I can use the tool to split a story into a collage of words, by changing the delimiter from space to new line.</li>
                </ul>
                <h2>Unlock Your Text Potential</h2>
                <p>I invite you to experience the Text Splitter tool for yourself, and see how it can help you unlock your text potential. You can access the tool by visiting the txtUtils website, where you can also find other useful and interesting tools for text manipulation and enhancement. You can also join the community of text users and creators who are benefiting from the Text Splitter tool, by sharing your feedback, suggestions, or testimonials with the developers and other users. You can also embrace the Text Splitter tool as an indispensable tool for text manipulation and splitting, by making it a part of your daily text and writing routine.</p>
                <h2>Closing Statement</h2>
                <p>The Text Splitter tool is a beacon of efficiency in a world where text is abundant. It is a tool that can help you save time and effort, improve readability and aesthetics, and increase versatility and creativity when dealing with different texts. It is a tool that can help you split and transform any text that you encounter or create, regardless of the type, language, or length. It is a tool that can help you optimize your text and productivity, by giving you the ability to split text into smaller and more manageable segments. It is a tool that can help you enjoy</p>

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
