import React, { useState } from 'react'

import PropTypes from 'prop-types'

export default function TextForm(props) {


    const handleDownClick = () => {
        let new_text = text.toLowerCase();
        console.log("Lower case");
        change_text(new_text);

    }

    const handleUpClick = () => {

        let new_text = text.toUpperCase();
        change_text(new_text)
    }

    const handleOnchange = (event) => {

        change_text(event.target.value)
    }

    const most_used_charachter = function (str) {
        var max = 0,
            maxChar = '';
        str.split('').forEach(function (char) {

            if (str.split(char).length > max) {
                if (char === " ") {
                    return;
                } else {
                    max = str.split(char).length;
                    maxChar = char;
                }
            }
        });

        return maxChar;
    };

    const most_used_word = function (str) {
        var max = 0,
            maxChar = '';
        str.split(' ').forEach(function (char) {
            if (str.split(char).length > max) {
                max = str.split(char).length;
                maxChar = char;
            }
        });

        return maxChar;
    };

    const seconds_to_time = (text) => {

        let d = text.split(" ").length / 5;

        if (d < 1) {
            return "0 seconds"
        }

        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h > 0 ? h + (h === 1 ? " hour:" : " hours:") : "";
        var mDisplay = m > 0 ? m + (m === 1 ? " minute:" : " minutes:") : "";
        var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay;
    }
    const [text, change_text] = useState("Enter text here");

    return (
        <>
            <div>
                <div className="mb-3">
                    <div>
                        <h1>{props.heading}</h1>

                    </div>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="16" value={text} onChange={handleOnchange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>


                <button className="btn btn-primary" onClick={handleDownClick}>
                    Convert to Lowercase
                </button>

            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>Your text has <b>{text.split(" ").length}</b> words and <b>{text.length}</b> charachters and <b>{most_used_charachter(text).toString()}</b> is the most used charachter in it and <b>{most_used_word(text).toString()} </b>
                    is the most used word and the average time to read it is <b>{seconds_to_time(text)}</b>.
                </p>

                <h2>Preview</h2>
                <p><b>{text}</b></p>

            </div>
        </>
    )

}



TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
}

TextForm.defaultProps = {
    heading: "Give your heading here"
}
