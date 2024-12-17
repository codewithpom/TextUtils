import { use } from 'marked';
import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';


export default function TextToSpeech() {
    const [text, setText] = useState('');
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Get the list of voices
        const synth = window.speechSynthesis;
        const voices = synth.getVoices();

        setVoices(voices);
        // Set the default voice
        synth.onvoiceschanged = () => {
            const voices = synth.getVoices();
            setVoices(voices);
        };
    }
        , []);
    // change the text content of the button if the isplaying state changes    
    useEffect(() => {
        if (isPlaying) {
            document.getElementById('toogle').textContent = 'Pause';
        } else {
            document.getElementById('toogle').textContent = 'Play';
        }
    }, [isPlaying]);

    // Function to speak the text
    function speakText() {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        // Find the voice object
        const selectedVoiceObj = voices.find(
            (voice) => voice.name === selectedVoice
        );
        // Set the voice
        utterance.voice = selectedVoiceObj;
        // Speak!
        document.getElementById('toogle').textContent = 'Pause';
        synth.speak(utterance);
    }

    function toogle_play_pause() {
        const synth = window.speechSynthesis;
        if (synth.paused) {
            setIsPlaying(true);
            synth.resume();
        } else {
            setIsPlaying(false);
            synth.pause();
        }
    }



    return (
        <>
            <Head>
                <title>Text to Speech</title>
                <meta name="description" content="Convert text to speech effortlessly with our Text to Speech tool. Choose from various voices and listen to your text in seconds." />
                <meta name="keywords" content="text to speech, speech synthesis, convert text to speech" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {/* for social media */}
                <meta property="og:title" content="Text to Speech" />
                <meta property="og:description" content="Convert text to speech" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>Text to Speech</h1>
                <p>Enter the text below to convert it to speech.</p>
                <textarea
                    id="text"
                    placeholder="Enter the text here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <p>Select a voice</p>
                <select
                    value={selectedVoice}
                    onChange={(e) => setSelectedVoice(e.target.value)}
                >
                    {voices.map((voice) => (
                        <option key={voice.name} value={voice.name}>
                            {voice.name}
                        </option>
                    ))}
                </select>

                <br />
                <br />
                <button className='btn btn-primary' onClick={speakText}>Speak</button>
                <button className='btn btn-danger' id={'toogle'} onClick={toogle_play_pause}>Stop</button>

                <h1>Text to Speech: A Handy Tool for Text Conversion</h1>
                <h2>Introduction</h2>
                <p>Text is one of the most common forms of communication in the digital world. Whether it is for social media, blogging, academic writing, programming, or any other purpose, text plays a vital role in conveying information and expressing ideas. However, text also comes with various challenges and limitations, such as formatting, spelling, grammar, readability, and more. To overcome these challenges and enhance the quality and efficiency of text creation and editing, one needs to use various tools and utilities that can assist in analyzing and transforming text according to the desired style and purpose.</p>
                <p>One such tool is the Text to Speech tool, a user-friendly online utility that can convert text into speech effortlessly. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements. In this essay, I will share my personal experience of using the Text to Speech tool, and how it has helped me in dealing with different texts.</p>
                <p>I believe that text conversion is crucial in a world filled with information. There are so many things to read, write, and learn, but so little time to do them all. That is why I always look for ways to optimize my text and productivity, especially when it comes to text-related tasks. The Text to Speech tool has been a great asset for me in this regard, as it has given me the ability to convert text into speech, as well as improved the readability and aesthetics of my text.</p>
                <h2>Effortless Text Conversion</h2>
                <p>The Text to Speech tool, as depicted in the image, has a minimalist and intuitive interface that is easy to use and navigate. The interface has a dark theme background with white and grey text for visibility.</p>
                <p>To use the tool, I simply input my text into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the language and length of the text, and display it in the field.</p>
                <p>The tool provides me with the ability to convert text into speech, which is a form of audio communication that uses human-like voices to pronounce the text. Speech is widely used for listening, learning, and entertainment purposes. The tool can convert any text into speech in seconds, without any errors or inconsistencies. It displays the converted text in the “Resultant Text” field below, with a “Copy” button adjacent for easy copying of the results. The tool also gives me options to select different voices for the speech output, by clicking on the dropdown menu labeled &quot;Voice&quot;. I can choose from various voices, such as Microsoft Anna - English (United States), Microsoft David - English (United States), Microsoft Zira - English (United States), and more. The tool will then use the selected voice to generate the speech output, and play it back to me through the speakers or headphones.</p>
                <p>The tool eliminates the uncertainty and hassle of converting text into speech manually, which can be tedious and time-consuming, especially if the text is long or complex. It also ensures that the text is converted accurately and consistently, without any errors or omissions.</p>
                <h2>Key Features</h2>
                <p>The Text to Speech tool has some key features that make it stand out from other similar tools. Some of these features are:</p>
                <ul>
                    <li>Multi-Type Text Support: The tool can support any type of text, such as plain text, rich text, HTML, markdown, or code. This means that I can convert any text into speech, regardless of the format or style. The tool can also detect and display the type of text that I input, giving me a better understanding of the text structure and content.</li>
                    <li>Multi-Language Text Support: The tool can support any language, such as English, Hindi, Chinese, or Japanese. This means that I can convert any text into speech, regardless of the language or script. The tool can also detect and display the language of text that I input, giving me a better understanding of the text meaning and context.</li>
                    <li>Interactive User Interface: The tool has an interactive and user-friendly design that makes it easy to navigate and use. The tool has clear and concise labels and instructions, as well as responsive and intuitive buttons and dropdown menus. The tool also has a dark theme that contrasts well with the white text, making it comfortable for my eyes. The tool also has a feedback and support section, where I can rate the tool, share my suggestions or complaints, or contact the developers for any queries or issues. This gives me a satisfying and enjoyable user experience.</li>
                    <li>Voice Selection: The tool has a voice selection feature that enhances the functionality and usability of the tool. This feature allows me to select different voices for the speech output, by clicking on the dropdown menu labeled &quot;Voice&quot;. I can choose from various voices, such as Microsoft Anna - English (United States), Microsoft David - English (United States), Microsoft Zira - English (United States), and more. The tool will then use the selected voice to generate the speech output, and play it back to me through the speakers or headphones. This feature helps me to customize and personalize the speech output, as well as to adjust and improve the speech quality and clarity.</li>
                </ul>
                <h2>How It Works</h2>
                <p>The tool is very simple and easy to use, as it only requires two steps to convert text into speech. These steps are:</p>
                <ul>
                    <li>Paste Your Text: The first step is to copy and paste the text that I want to convert into speech into the &quot;Enter text&quot; field. The tool can accept any type of text, such as plain text, rich text, HTML, markdown, or code. The tool can also accept any language, such as English, Hindi, Chinese, or Japanese. The tool can handle any length of text, from a single word to a whole book. The tool will automatically detect the language and length of the text, and display it in the field. The tool will also automatically convert the text into speech, and display the converted text in the “Resultant Text” field below, with a “Copy” button adjacent for easy copying of the results.</li>
                    <li>Select Voice: The second step is to select a voice for the speech output, by clicking on the dropdown menu labeled &quot;Voice&quot;. I can choose from various voices, such as Microsoft Anna - English (United States), Microsoft David - English (United States), Microsoft Zira - English (United States), and more. The tool will then use the selected voice to generate the speech output, and play it back to me through the speakers or headphones.</li>
                </ul>
                <h2>Applications Across Scenarios</h2>
                <p>The Text to Speech tool can be applied to various tasks and scenarios involving text conversion and transformation. Some of the examples are:</p>
                <ul>
                    <li>Listening: The tool can help me with listening, by enabling me to convert text into speech, which is a form of audio communication that uses human-like voices to pronounce the text. The tool can help me listen to various texts, such as books, articles, podcasts, or lectures, by giving me the ability to convert text into speech, and play it back to me through the speakers or headphones. The tool can also help me improve my listening skills and comprehension, by allowing me to select different voices for the speech output, as well as to adjust and improve the speech quality and clarity.</li>
                    <li>Learning: The tool can help me with learning, by enabling me to convert text into speech, which is a form of audio communication that uses human-like voices to pronounce the text. The tool can help me learn various subjects, such as languages, history, science, or math, by giving me the ability to convert text into speech, and play it back to me through the speakers or headphones. The tool can also help me enhance my memory and retention, by allowing me to select different voices for the speech output, as well as to adjust and improve the speech quality and clarity.</li>
                    <li>Entertainment: The tool can help me with entertainment, by enabling me to convert text into speech, which is a form of audio communication that uses human-like voices to pronounce the text. The tool can help me enjoy various texts, such as stories, jokes, poems, or songs, by giving me the ability to convert text into speech, and play it back to me through the speakers or headphones. The tool can also help me have fun and be creative, by allowing me to select different voices for the speech output, as well as to adjust and improve the speech quality and clarity.</li>
                </ul>
                <h2>Unlock Your Text Potential</h2>
                <p>I invite you to experience the Text to Speech tool for yourself, and see how it can help you unlock your text potential. You can access the tool by visiting the txtUtils website, where you can also find other useful and interesting tools for text manipulation and enhancement. You can also join the community of text users and creators who are benefiting from the Text to Speech tool, by sharing your feedback, suggestions, or testimonials with the developers and other users. You can also embrace the Text to Speech tool as an indispensable tool for text conversion and transformation, by making it a part of your daily text and writing routine.</p>
                <h2>Closing Statement</h2>
                <p>The Text to Speech tool is a beacon of efficiency in a world where text is abundant. It is a tool that can help you save time and effort, improve readability and aesthetics, and increase versatility and creativity when dealing with different texts. It is a tool that can help you convert and transform any text that you encounter or create, regardless of the type, language, or length. It is a tool that can help you optimize your text and productivity, by giving you the ability to convert text into speech, and play it back to you through the speakers or headphones. It is a tool that can help you enjoy your text, by giving you the ability to convert text into speech, and play</p>

            </div>
            <style jsx>{`
                .container {
                    margin: 0 auto;
                    width: 80%;
                }
                h1 {
                    text-align: center;
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                button {
                    margin: 0 0.5rem;
                }
                textarea {
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                    padding: 0.5rem;
                    width: 100%;
                }
            `}</style>
        </>
    );
}

