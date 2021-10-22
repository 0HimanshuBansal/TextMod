import React, { useState } from "react";

export default function TextInput(props) {
    const [text, setText] = useState("");

    let myStyle = {
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid black',
        borderRadius: '5px'
    };

    let btnTheme = 'primary'

    if (props.mode === 'dark') {
        myStyle = {
            color: 'white',
            backgroundColor: 'rgb(60, 62, 65)',
            border: '2px solid white',
            borderRadius: '5px'
        };
        btnTheme = 'light'
    } else {
        myStyle = {
            color: 'black',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '5px'
        };
        btnTheme = 'primary'
    }

    let characters = text.length;
    let words = text.trim().split(' ').length;

    if (characters === 0) { words = 0; }

    let time = words / 5;
    let sec = (time % 60);
    let min = parseInt(time / 60);
    let hour = parseInt(min / 60);

    const handleOnChange = (event) => {
        // console.log("On Change " + text);
        setText(event.target.value);
    }

    const upperCase = () => {
        setText(text.toUpperCase());
        text.length !== 0 && props.showAlert("Input text has been converted to", "Upper Case", "Success");
    }
    const lowerCase = () => {
        setText(text.toLowerCase());
        text.length !== 0 && props.showAlert("Input text has been converted to", "Lower Case", "Success");
    }
    const sentenceCase = () => {
        setText(sentenceCasefn(text));
        text.length !== 0 && props.showAlert("Input text has been converted to", "Sentence Case", "Success");
    }
    const captalizeEachWord = () => {
        setText(captalizeEachWordfn(text));
        text.length !== 0 && props.showAlert("Each word has been", "Capitalized", "Success");
    }
    const toggleCase = () => {
        setText(toggleCasefn(text));
        text.length !== 0 && props.showAlert("Input text has been converted to", "Toggle Case", "Success");
    }

    function sentenceCasefn(str) {
        return str.toLowerCase().split('. ').map(function (sentence) {
            return (sentence.charAt(0).toUpperCase() + sentence.slice(1));
        }).join('. ');
    }

    function captalizeEachWordfn(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    function toggleCasefn(str) {
        return str.toUpperCase().split(' ').map(function (word) {
            return (word.charAt(0).toLowerCase() + word.slice(1));
        }).join(' ');
    }

    return (
        <div className="container my-2" style={myStyle}>
            <h3>Enter the text you want to transform</h3>
            <div className="mb-3" >
                {/* <label for="exampleFormControlTextarea1" className="form-label">Enter Text to be Tranform</label> */}
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="10" style={myStyle} placeholder="Enter your text here"></textarea>
            </div>
            {/* <div className="btn-group" role="group" aria-label="Basic outlined example"> */}
            <button disabled={text.length===0} type="button" className={`btn btn-${btnTheme} mx-1`} onClick={upperCase}>UPPER CASE</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${btnTheme} mx-1`} onClick={lowerCase}>lower case</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${btnTheme} mx-1`} onClick={sentenceCase}>Sentence case</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${btnTheme} mx-1`} onClick={captalizeEachWord}>Capitalize Each Word</button>
            <button disabled={text.length===0} type="button" className={`btn btn-${btnTheme} mx-1`} onClick={toggleCase}>tOGGLE cASE</button>
            {/* </div> */}
            <h6>
                <span className="badge bg-secondary">{words}</span> words and
                <span className="badge bg-secondary">{characters}</span> total characters.
            </h6>
            <h6>Average reading time is
                <span className="badge bg-secondary">{time}</span> Seconds,
                <span className="badge bg-secondary">{hour}</span> H
                <span className="badge bg-secondary">{min}</span> M
                <span className="badge bg-secondary">{sec}</span> S.
            </h6>

            <h3>Preview</h3>
            <p>{text.trim()}</p>
        </div>
    )
}