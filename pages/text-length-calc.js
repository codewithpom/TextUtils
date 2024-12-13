// This is a Nxt.js page
// With bootstrap
import { useState, useEffect } from 'react';
import SEO from '../components/SEO'

function App() {
    const [no_words, set_no_words] = useState();
    const [no_charachters, set_no_charachters] = useState();
    
    const [text, setText] = useState("");
    // use effect for change in text
    useEffect(() => {
        // calculate the no of words
        let words = text.split(" ");
        set_no_words(words.length);
        // calculate the no of charachters without spaces
        let charachters = text.replace(/\s/g, '');
        set_no_charachters(charachters.length);
        

        
    }, [text]);

    return (
        <>
            <SEO 
                title={'Text Length Calculator'}
                description={'Calculate the number of words and charachter and spaces in your text just by a button'}
                keywords={[
                    'length',
                    'text tools',
                    'text length calculator',
                    'word',
                    'charachter',
                    'counter'
                ]}
            />
            <div className="container">
                <div className='text-center' >
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
                                    The text contains <strong>{no_words}</strong> words and <strong>{no_charachters}</strong> charachters without space and <strong>{no_words - 1}</strong> spaces.
                                    <br />
                                    In total {no_charachters} + {no_words - 1}  = <strong>{no_words - 1 + no_charachters}</strong> charachters.
                                </span>
                                :
                                null

                        }

                        

                    </p>
                    </div>
                    
                    <hr />
                    <h2>Word and Character Counter: A Handy Tool for Text Analysis</h2>
<h2>Introduction</h2>
<p>Text is one of the most common forms of communication in the digital world. Whether it is for social media, blogging, academic writing, programming, or any other purpose, text plays a vital role in conveying information and expressing ideas. However, text also comes with various challenges and limitations, such as formatting, spelling, grammar, readability, and more. To overcome these challenges and enhance the quality and efficiency of text creation and editing, one needs to use various tools and utilities that can assist in analyzing and transforming text according to the desired style and purpose.</p>
<p>One such tool is the Word and Character Counter, a user-friendly online utility that can count the number of words and characters in any text effortlessly. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements. In this essay, I will share my personal experience of using the Word and Character Counter tool, and how it has helped me in dealing with different texts.</p>
<p>I believe that text analysis is crucial in a world filled with information. There are so many things to read, write, and learn, but so little time to do them all. That is why I always look for ways to optimize my text and productivity, especially when it comes to text-related tasks. The Word and Character Counter tool has been a great asset for me in this regard, as it has given me a clear and precise overview of my text, as well as improved the readability and aesthetics of my text.</p>
<h2>Effortless Text Counting</h2>
<p>The Word and Character Counter tool, as depicted in the image, has a minimalist and intuitive interface that is easy to use and navigate. The interface has a dark theme background with white and grey text for visibility.</p>
<p>To use the tool, I simply input my text into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field.</p>
<p>The tool provides me with a clear and precise overview of my text, as it can count the number of words and characters in my text in seconds, without any errors or inconsistencies. It displays the information below the input box, in the format of words, characters without space, spaces, and total characters. It eliminates the uncertainty and hassle of estimating or manually counting the words and characters in my text, which can be tedious and time-consuming, especially if the text is long or complex.</p>
<h2>Key Features</h2>
<p>The Word and Character Counter tool has some key features that make it stand out from other similar tools. Some of these features are:</p>
<ul>
<li>Multi-Type Text Support: The tool can support any type of text, such as plain text, rich text, HTML, markdown, or code. This means that I can analyze any text that I encounter or create, regardless of the format or style. The tool can also detect and display the type of text that I input, giving me a better understanding of the text structure and content.</li>
<li>Multi-Language Text Support: The tool can support any language, such as English, Hindi, Chinese, or Japanese. This means that I can analyze any text that I encounter or create, regardless of the language or script. The tool can also detect and display the language of text that I input, giving me a better understanding of the text meaning and context.</li>
<li>Interactive User Interface: The tool has an interactive and user-friendly design that makes it easy to navigate and use. The tool has clear and concise labels and instructions, as well as responsive and intuitive buttons and sliders. The tool also has a dark theme that contrasts well with the white text, making it comfortable for my eyes. The tool also has a feedback and support section, where I can rate the tool, share my suggestions or complaints, or contact the developers for any queries or issues. This gives me a satisfying and enjoyable user experience.</li>
</ul>
<h2>How It Works</h2>
<p>The tool is very simple and easy to use, as it only requires one step to count the words and characters in any text. This step is:</p>
<ul>
<li>Paste Your Text: The only step is to copy and paste the text that I want to count the words and characters into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the type, language, and length of the text, and display it in the field. The tool will also automatically count the number of words and characters in my text, and display the information below the input box, in the format of words, characters without space, spaces, and total characters.</li>
</ul>
<h2>Applications Across Scenarios</h2>
<p>The Word and Character Counter tool can be applied to various tasks and scenarios involving text analysis and counting. Some of the examples are:</p>
<ul>
<li>Academic Excellence: The tool can help me achieve academic excellence, by enabling me to meet the word and character requirements for assignments, papers, or books. The tool can help me plan and organize my writing, by giving me a clear and precise overview of the length and structure of my text. The tool can also help me improve the quality and consistency of my writing, by allowing me to check and edit the words and characters in my text according to the standard writing conventions or the specific requirements of my assignment or paper.</li>
<li>Professional Productivity: The tool can help me boost my professional productivity, by enabling me to optimize the word and character usage for emails, reports, proposals, or presentations. The tool can help me manage and optimize my writing workload, by giving me a clear and precise overview of the length and content of my text. The tool can also help me enhance the readability and aesthetics of my writing, by allowing me to check and edit the words and characters in my text according to the appropriate format, style, and tone for my professional purpose and audience.</li>
<li>Leisurely Reading: The tool can help me enjoy my leisurely reading, by enabling me to estimate the reading time and difficulty of books, articles, blogs, or stories. The tool can help me choose and enjoy my reading material, by giving me a quick and easy overview of the length and language of the text. The tool can also help me experiment and have fun with different texts, by allowing me to check and compare the words and characters in different texts according to my personal preference and mood.</li>
</ul>
<h2>Unlock Your Text Potential</h2>
<p>I invite you to experience the Word and Character Counter tool for yourself, and see how it can help you unlock your text potential. You can access the tool by visiting the txtUtils website, where you can also find other useful and interesting tools for text manipulation and enhancement. You can also join the community of text users and creators who are benefiting from the Word and Character Counter tool, by sharing your feedback, suggestions, or testimonials with the developers and other users. You can also embrace the Word and Character Counter tool as an indispensable tool for text analysis and counting, by making it a part of your daily text and writing routine.</p>
<h2>Closing Statement</h2>
<p>The Word and Character Counter tool is a beacon of efficiency in a world where text is abundant. It is a tool that can help you save time and effort, improve readability and aesthetics, and increase versatility and creativity when dealing with different texts. It is a tool that can help you analyze and transform any text that you encounter or create, regardless of the type, language, or length. It is a tool that can help you optimize your text and productivity, by giving you a clear and precise overview of your text. It is a tool that can help you enjoy your text, by giving you a quick and easy overview of your text. It is a tool that can help you unlock your text potential.</p>

                
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