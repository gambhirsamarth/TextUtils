import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success")
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text Cleared", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);

  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success")
  };

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success")
  }

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#121517'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==='light'?'#F8F9FA':'#343A40', color: props.mode==='dark'?'white':'#121517', border: "none"
          }}
          ></textarea>
        </div>

        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={handleClearClick}>
          Clear Text
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={handleCopy}>
          Copy Text
        </button>
        <button className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={handleExtraSpaces}>
          Remove Spaces
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#121517'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words, {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length + " "} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to Preview here"}</p>
      </div>
    </>
  );
}
