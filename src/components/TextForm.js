import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    setText(text.toUpperCase());
    props.showalert("Converted to uppercase.", "success");
  };

  const handleLowclick = () => {
    setText(text.toLowerCase());
    props.showalert("Converted to lowercase.", "success");
  };

  const handleClear = () => {
    setText("");
    props.showalert("Cleared the textarea.", "danger");
  };

  const handleCapitalised = () => {
    const ar = text.split(".");
    let str = "";
    ar.forEach((element) => {
      element = element.trim();
      str += element.charAt(0).toUpperCase() + element.slice(1) + ". ";
    });

    setText(str);
    props.showalert("Capitalised first letter of each sentence.", "warning");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to clipboard!", "primary");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  //main template
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className={`form-control  text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#6c757d",
              color: props.mode === "light" ? "#6c757d" : "white",
            }}
            value={text}
            placeholder="Enter text here...."
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalised}>
          Convert to capitalised case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-danger  mx-1" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          Words : {text.trim() === "" ? 0 : text.trim().split(" ").length} |
          Characters : {text.length}
        </p>
        <p>
          Can be read in {0.008 * (text === "" ? 0 : text.split(" ").length)}{" "}
          minutes.
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
