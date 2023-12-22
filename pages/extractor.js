// This is a Nxt.js page
// With bootstrap
import { useState, useEffect } from 'react';

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
                <h2>Introducing the Advanced Text Analysis Tool: Your All-in-One Solution for URL and Email Extraction</h2>
                <p>In the fast-paced digital age, information is abundant, but extracting meaningful data from the vast sea of text can be a daunting task. Whether you are a researcher, content creator, or simply looking to streamline data gathering, the Advanced Text Analysis Tool is your go-to solution for effortlessly extracting URLs and email addresses from any text.</p>
                <h3><strong>Unleashing the Power of Text Analysis:</strong></h3>
                <h4><strong>The Need for Precision:</strong></h4>
                <p>In a world inundated with data, precision in information extraction is paramount. The Advanced Text Analysis Tool is designed to meet this need head-on, providing a robust mechanism for extracting URLs and email addresses with surgical precision. No more sifting through endless lines of text; our tool empowers you to focus on what matters most.</p>
                <h4><strong>Versatility Across Domains:</strong></h4>
                <p>Whether you&#39;re analyzing research papers, code snippets, or customer feedback, the tool adapts seamlessly to various domains. From academic pursuits to content creation and beyond, the Advanced Text Analysis Tool ensures that you extract relevant URLs and emails regardless of the context.</p>
                <h3><strong>Key Features:</strong></h3>
                <h4><strong>Intuitive User Interface:</strong></h4>
                <p>The tool boasts an intuitive user interface that caters to users of all backgrounds. The straightforward design allows you to effortlessly paste your text, click a button, and witness the tool in action. No steep learning curves – just efficient data extraction.</p>
                <h4><strong>Efficient Extraction Algorithms:</strong></h4>
                <p>Powered by state-of-the-art extraction algorithms, the tool meticulously identifies and captures URLs and email addresses from even the most intricate text structures. The algorithms are continuously refined to ensure accuracy, making it a reliable companion in your data analysis journey.</p>
                <h4><strong>Customizable Output:</strong></h4>
                <p>Recognizing the diverse needs of users, the tool provides customizable output options. Whether you prefer a neatly organized list or a comprehensive report, the Advanced Text Analysis Tool allows you to tailor the output to suit your specific requirements.</p>
                <h3><strong>How It Works:</strong></h3>
                <ol>
                    <li><p><strong>Input Your Text:</strong>
                        Copy and paste the text you wish to analyze into the tool&#39;s user-friendly interface. The tool accommodates various text lengths, from concise messages to lengthy documents.</p>
                    </li>
                    <li><p><strong>Initiate Analysis:</strong>
                        With a simple click of a button, the tool&#39;s advanced algorithms get to work. The analysis is swift and thorough, scanning the input text for URLs and email addresses.</p>
                    </li>
                    <li><p><strong>Review the Results:</strong>
                        The tool presents the results in an easily digestible format. URLs and emails are neatly organized, allowing you to review and use the extracted information with unparalleled efficiency.</p>
                    </li>
                </ol>
                <h3><strong>Applications Across Industries:</strong></h3>
                <h4><strong>Research and Academia:</strong></h4>
                <p>For researchers and academics, the Advanced Text Analysis Tool serves as a time-saving resource. Quickly extract references, source URLs, and contact information from academic papers, facilitating a more streamlined research process.</p>
                <h4><strong>Content Creation:</strong></h4>
                <p>Content creators can enhance their workflow by effortlessly extracting URLs and email addresses from various sources. This ensures the integration of accurate information and helps maintain the integrity of the created content.</p>
                <h4><strong>Cybersecurity and Compliance:</strong></h4>
                <p>In cybersecurity and compliance industries, where precision is non-negotiable, the tool provides a valuable asset for analyzing logs, reports, and communication data for URLs and email addresses that may require attention.</p>
                <h3><strong>Looking Ahead:</strong></h3>
                <p>The Advanced Text Analysis Tool is more than just a data extraction tool; it is a testament to the power of innovation in simplifying complex processes. As we look to the future, our commitment to refining and expanding the capabilities of the tool remains unwavering. We envision a tool that not only meets your current needs but anticipates and adapts to the evolving landscape of data analysis.</p>
                <h3><strong>Try It Today:</strong></h3>
                <p>Experience the efficiency of the Advanced Text Analysis Tool firsthand. Visit our website, paste your text, and witness the seamless extraction of URLs and email addresses. Join the ranks of researchers, content creators, and professionals who have elevated their data analysis game with this indispensable tool.</p>
                <p>In a world where information is king, the Advanced Text Analysis Tool reigns supreme, empowering you to extract valuable insights with unparalleled precision and ease. Welcome to the future of text analysis – where efficiency meets excellence.</p>

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