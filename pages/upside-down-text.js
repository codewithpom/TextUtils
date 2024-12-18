import Head from 'next/head';
import { useState } from 'react';

function UpsideDownText() {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const [reverse, setReverse] = useState(false);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleReverseChange = (e) => {
        setReverse(e.target.checked);
    };

    const generateUpsideDownText = () => {
        let upsideDownText = text.split('').reverse().map(char => {
            switch (char) {
                case 'a': return 'ɐ';
                case 'b': return 'q';
                case 'c': return 'ɔ';
                case 'd': return 'p';
                case 'e': return 'ǝ';
                case 'f': return 'ɟ';
                case 'g': return 'ƃ';
                case 'h': return 'ɥ';
                case 'i': return 'ᴉ';
                case 'j': return 'ɾ';
                case 'k': return 'ʞ';
                case 'l': return 'l';
                case 'm': return 'ɯ';
                case 'n': return 'u';
                case 'o': return 'o';
                case 'p': return 'd';
                case 'q': return 'b';
                case 'r': return 'ɹ';
                case 's': return 's';
                case 't': return 'ʇ';
                case 'u': return 'n';
                case 'v': return 'ʌ';
                case 'w': return 'ʍ';
                case 'x': return 'x';
                case 'y': return 'ʎ';
                case 'z': return 'z';
                case 'A': return '∀';
                case 'B': return '𐐒';
                case 'C': return 'Ɔ';
                case 'D': return '◖';
                case 'E': return 'Ǝ';
                case 'F': return 'Ⅎ';
                case 'G': return '⅁';
                case 'H': return 'H';
                case 'I': return 'I';
                case 'J': return 'ſ';
                case 'K': return '⋊';
                case 'L': return '⅃';
                case 'M': return 'W';
                case 'N': return 'N';
                case 'O': return 'O';
                case 'P': return 'Ԁ';
                case 'Q': return 'Ό';
                case 'R': return 'ᴚ';
                case 'S': return 'S';
                case 'T': return '⊥';
                case 'U': return '∩';
                case 'V': return 'Λ';
                case 'W': return 'M';
                case 'X': return 'X';
                case 'Y': return '⅄';
                case 'Z': return 'Z';
                case '1': return 'Ɩ';
                case '2': return 'ᄅ';
                case '3': return 'Ɛ';
                case '4': return 'ㄣ';
                case '5': return 'ϛ';
                case '6': return '9';
                case '7': return 'ㄥ';
                case '8': return '8';
                case '9': return '6';
                case '0': return '0';
                case '.': return '˙';
                case ',': return "'";
                case "'": return ',';
                case '"': return ',,';
                case '`': return ',';
                case '!': return '¡';
                case '?': return '¿';
                case '[': return ']';
                case ']': return '[';
                case '(': return ')';
                case ')': return '(';
                case '{': return '}';
                case '}': return '{';
                case '<': return '>';
                case '>': return '<';
                case '&': return '⅋';
                case '_': return '‾';
                case ' ': return ' ';
                default: return char;
            }
        }).join('');

        if (reverse) {
            upsideDownText = upsideDownText.split('').reverse().join('');
        }

        setResult(upsideDownText);
    };

    return (
        <>
            <Head>
                <title>Upside Down Text Generator</title>
                <meta name="description" content="Generate upside down text easily and have fun with your friends by sharing the flipped text on social media or messaging apps." />
                <meta name="keywords" content="Upside Down Text Generator, text, upside down, generator" />
                <meta name="author" content="Padmashree Jha" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Upside Down Text Generator" />
                <meta property="og:description" content="Generate upside down text easily!" />
                <meta property="og:type" content="website" />
            </Head>
            <div className="container">
                <h1>Upside Down Text Generator</h1>
                <p>Enter the text below to generate upside down text.</p>
                <textarea
                    id="text"
                    placeholder="Enter the text here"
                    value={text}
                    onChange={handleTextChange}
                ></textarea>
                <div className="text-center">
                    <button onClick={generateUpsideDownText}>Generate Upside Down Text</button>
                </div>
                <div className="text-center">
                    <label>
                        <input
                            type="checkbox"
                            checked={reverse}
                            onChange={handleReverseChange}
                        />
                        Reverse Text
                    </label>
                </div>
                <textarea
                    id="result"
                    placeholder="Resultant Text"
                    value={result}
                    readOnly={true}
                ></textarea>
                <button onClick={() => {
                    navigator.clipboard.writeText(result);
                    alert('Text copied to clipboard!');
                }}>Copy</button>
                <div className="text-center" style={{ marginTop: '20px' }}>
                    <h2>About Upside Down Text Generator</h2>
                    <p>The Upside Down Text Generator is a fun and easy-to-use online tool that allows you to flip your text upside down. It is a part of the suite of tools offered by txtUtils, a website that aims to provide a comprehensive hub for various textual utilities and enhancements.</p>
                    <p>With the Upside Down Text Generator, you can easily enter your text, generate the upside down version, and share it with your friends on social media or messaging apps. The tool supports multiple languages and provides a seamless experience for generating upside down text.</p>
                    <h3>Features</h3>
                    <ul>
                        <li>Enter text and generate upside down text</li>
                        <li>Option to reverse the text</li>
                        <li>Copy the generated text to clipboard</li>
                    </ul>
                    <h3>Usage Instructions</h3>
                    <p>To use the Upside Down Text Generator, follow these simple steps:</p>
                    <ol>
                        <li>Enter the text you want to flip in the text area.</li>
                        <li>Click on the "Generate Upside Down Text" button to generate the flipped text.</li>
                        <li>Optionally, check the "Reverse Text" checkbox to reverse the flipped text.</li>
                        <li>Copy the generated text to clipboard by clicking on the "Copy" button.</li>
                    </ol>
                    <h3>Examples</h3>
                    <p>Here are some examples of how you can use the Upside Down Text Generator:</p>
                    <ul>
                        <li>Flip your text upside down and share it on social media for fun.</li>
                        <li>Generate upside down text for creative and unique messages.</li>
                        <li>Use the flipped text in your online profiles or signatures.</li>
                    </ul>
                </div>
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

export default UpsideDownText;
