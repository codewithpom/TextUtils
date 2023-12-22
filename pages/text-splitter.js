// This is a Nxt.js page
// With bootstrap
import { useState, useEffect } from 'react';
import Head from 'next/head';

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
                <title>Text Splitter</title>
                <meta name="description" content="Discover the Text Splitter Tool, a powerful solution for efficiently breaking down large volumes of text into manageable segments." />
                <meta name="keywords" content="text splitter, content organization, writing tool, text segmentation, content creation" />
                <meta name="author" content="Padmashree Jha" />
            </Head>
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
                <h1 class="mb-4">Introducing the Text Splitter Tool</h1>

                <p class="lead">In the realm of content creation, managing and organizing textual information is a critical aspect of efficiency. Enter the Text Splitter Tool, a powerful solution designed to streamline the process of breaking down large volumes of text into more manageable segments. Let's explore how this tool can revolutionize your content creation workflow.</p>

                <div class="row">
                    <div class="col-md-6">
                        <h2 class="mt-4">Key Features:</h2>
                        <ul>
                            <li><strong>Effortless Content Division:</strong> The Text Splitter Tool excels in breaking down lengthy textual content into smaller, more digestible sections.</li>
                            <li><strong>Maintaining Context and Flow:</strong> The segmentation process is intelligently designed to ensure that each split maintains the logical progression of ideas.</li>
                            <li><strong>Time-Saving Efficiency:</strong> In a world where time is of the essence, the Text Splitter Tool shines as a time-saving asset.</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h2 class="mt-4">How It Works:</h2>
                        <ol>
                            <li><strong>Input Your Content:</strong> Copy and paste your text into the Text Splitter interface.</li>
                            <li><strong>Adjust Current and New Delimeter:</strong> Customize the segmentation by specifying the desired current and new delimeter.</li>
                            <li><strong>Generate Segmented Content:</strong> With a simple click, let the Text Splitter work its magic.</li>
                            <li><strong>Copy, Paste, and Refine:</strong> Easily copy the segmented content and seamlessly integrate it into your writing environment.</li>
                        </ol>
                    </div>
                </div>

                <h2 class="mt-4">Applications:</h2>
                <ul>
                    <li><strong>Bloggers and Content Creators:</strong> Simplify the structuring of blog posts and articles for a more engaging reader experience.</li>
                    <li><strong>Academic Writers:</strong> Facilitate the organization of research papers and essays, ensuring clarity and coherence.</li>
                    <li><strong>Creative Writers:</strong> Enhance the flow of creative writing projects, from short stories to novels, by breaking them into manageable parts.</li>
                    <li><strong>Collaborative Writing:</strong> Streamline collaboration among writers by efficiently dividing tasks and content segments.</li>
                </ul>

                <p class="mt-4">The Text Splitter Tool stands as a testament to the power of innovation in simplifying the intricacies of content creation. Embrace a more efficient and organized writing process with this tool, designed to empower writers across various domains. Try it today and experience a new level of control over your textual creations.</p>

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