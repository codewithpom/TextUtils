import { useState, useEffect } from 'react';
import Head from 'next/head';
import SEO from '../components/SEO'
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
            <SEO 
                title={'Reading Time Calculator'}
                description={'Calculate the reading time of your text with custom Words Per Minute Speed. Enter your text and get the estimated reading time instantly.'}
                keywords={[
                    'reading',
                    'text tools',
                    'reading time calculator',
                    'reading time'
                ]}
            />
            <div className="container">
                <div className='text-center'>
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


                
                <hr />
                <h2>Introducing TextUtils Reading Time Calculator: Your Personalized Reading Companion</h2>
                <p>In a world filled with information, managing your time effectively is crucial. Whether you&#39;re a student preparing for exams, a professional staying abreast of industry trends, or an avid reader diving into captivating content, TextUtils Reading Time Calculator is the tool you&#39;ve been waiting for. Tailored to your reading speed and preferences, TextUtils is not just a reading time calculator but your personalized reading companion.</p>
                <h3><strong>Effortless Reading Time Calculation:</strong></h3>
                <h4><strong>Precision at Your Fingertips:</strong></h4>
                <p>TextUtils Reading Time Calculator is designed to provide precise reading time calculations for any given text. Say goodbye to the uncertainty of estimating how long it will take to go through an article, document, or study material. TextUtils takes the guesswork out of your reading schedule.</p>
                <h4><strong>Customizable Reading Speed:</strong></h4>
                <p>What sets TextUtils apart is its customizable Words Per Minute (WPM) slider. Adjust your preferred reading speed seamlessly with the user-friendly slider, allowing you to find the perfect balance between comprehension and pace. Whether you&#39;re a fast reader absorbing information rapidly or someone who savors each word, TextUtils caters to your unique reading style.</p>
                <h3><strong>Key Features:</strong></h3>
                <h4><strong>Dynamic WPM Slider:</strong></h4>
                <p>The heart of TextUtils lies in its dynamic WPM slider. Slide it to the right for a faster reading experience or to the left for a more deliberate pace. The real-time adjustment ensures that your reading time calculation aligns with your current reading speed, providing an accurate estimate every time.</p>
                <h4><strong>Multi-Platform Compatibility:</strong></h4>
                <p>Access TextUtils seamlessly across various platforms. Whether you&#39;re using it on your desktop, laptop, tablet, or smartphone, the tool adapts to your device, offering a consistent and user-friendly experience.</p>
                <h4><strong>Interactive User Interface:</strong></h4>
                <p>Navigating TextUtils is a breeze, thanks to its interactive and intuitive user interface. Paste your text, adjust the WPM slider, and instantly receive a calculated reading time. The tool eliminates unnecessary steps, making it a convenient addition to your reading toolkit.</p>
                <h3><strong>How It Works:</strong></h3>
                <ol>
                    <li><p><strong>Paste Your Text:</strong>
                        Simply copy and paste the text you want to read into TextUtils. Whether it&#39;s an article, blog post, or study material, the tool accommodates texts of various lengths.</p>
                    </li>
                    <li><p><strong>Adjust WPM Slider:</strong>
                        Use the WPM slider to customize your reading speed. Whether you&#39;re in a hurry or prefer a leisurely read, TextUtils adapts to your pace.</p>
                    </li>
                    <li><p><strong>Get Reading Time:</strong>
                        Witness the real-time magic as TextUtils calculates the estimated reading time based on your selected WPM. The result is a precise reading time tailored to your preferences.</p>
                    </li>
                </ol>
                <h3><strong>Applications Across Scenarios:</strong></h3>
                <h4><strong>Academic Excellence:</strong></h4>
                <p>For students managing tight schedules, TextUtils ensures efficient time allocation for research papers, articles, and study materials.</p>
                <h4><strong>Professional Productivity:</strong></h4>
                <p>Professionals can optimize their reading time, staying informed without sacrificing productivity. TextUtils lets you strike the perfect balance between speed and comprehension.</p>
                <h4><strong>Leisurely Reading:</strong></h4>
                <p>For bookworms and literature enthusiasts, TextUtils enhances the joy of leisurely reading by providing a customized reading time estimate.</p>
                <h3><strong>Unlock Your Reading Potential:</strong></h3>
                <p>Experience the transformative power of TextUtils Reading Time Calculator today. Visit our website, paste your text, and witness the precision of personalized reading time calculation. Join the community of readers who have embraced TextUtils as an indispensable tool in their quest for efficient time management and enhanced reading experiences.</p>
                <p>In a world where time is a precious commodity, TextUtils stands as a beacon of efficiency, ensuring that every moment spent reading is tailored to your unique preferences. Welcome to a new era of personalized reading with TextUtils – where time meets readability.</p>

            </div>
            <style jsx>{`
                .container {
                    margin: 0 auto;
                    
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
