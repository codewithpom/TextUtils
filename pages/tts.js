import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';


export default function TextToSpeech() {
    const [text, setText] = useState('');
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState('');
    
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
            document.getElementById('toogle').textContent = 'Pause';
            synth.resume();
        } else {
            document.getElementById('toogle').textContent = 'Play';
            synth.pause();
        }
    }

    

    return (
        <>
            <Head>
                <title>Text to Speech</title>
                <meta name="description" content="Convert text to speech" />
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
                <button className='btn btn-danger' id = {'toogle'} onClick={toogle_play_pause}>Stop</button>
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


