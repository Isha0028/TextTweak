import React,{useState} from "react";

export default function Form(props) {
    const [text, setText] = useState('');

    const handleOnChange= (event)=>{
        console.log('on change');
        setText(event.target.value);
    }
    const handleUpClick= ()=>{
        console.log('Uppercase button has been clicked.'+ text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert('Text has been updated to uppercase.', 'success')
    }
    const handleDownClick= ()=>{
        console.log('LowerCase button has been clicked.'+ text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert('Text has been updated to lowercase.', 'success')
    }
    const handleClearClick= ()=>{
        let newText= '';
        setText(newText)
        setSearch(newText)
        setReplacement(newText)
        props.showAlert('Text has been cleared.', 'success')
    }

    const handleCopyClick =()=>{
     navigator.clipboard.writeText(text)
   
     props.showAlert('Text has been copied.', 'success')
    }
    const handleSpaceClick =()=>{
     let newText= text.split(/[ ]+/);
     setText(newText.join(' '))
     props.showAlert('Extra space has been removed.', 'success')
    }

    // search function
    // search function
const [search, setSearch] = useState('');
const [searchCount, setSearchCount] = useState(0);

const handleSearchClick = () => {
  let lines = text.split("\n"); // Split text into lines

  let numbs = 0;
  setSearchCount(numbs);

  let updatedLines = lines.map((line) => {
    let words = line.split(" ");

    let replacedWords = words.map((word) => {
      if (word.toLowerCase() === search.toLowerCase()) {
        numbs += 1;

        // Replace the word if a replacement value is provided
        if (replacement) {
          return replacement;
        }
      }
      return word;
    });

    return replacedWords.join(" ");
  });

  setSearchCount(numbs);

  // Update the text with replaced words, if any
  setText(updatedLines.join("\n"));

  props.showAlert("Text counted replaced", "success");
};


const handleReplaceChange = (event) => {
  setReplacement(event.target.value);
}

// Replace input
const [replacement, setReplacement] = useState('');

// on change search input, just so you can keep typing like the text area
    const handleOnChangeSearch = (event) => {
        setSearch(event.target.value)
    }

    
    const handleCapitalizeCaseClick = () => {
      if (text) {
        let linesArray = text.split("\n"); // Split text into lines
    
        let capitalizedLines = linesArray.map((line) => {
          let wordsArray = line
            .split(/\s+/)
            .filter((element) => element.length !== 0);
    
          let capitalizedWords = wordsArray.map((word) => {
            return word[0].toUpperCase() + word.substring(1);
          });
    
          return capitalizedWords.join(" ");
        });
    
        let newText = capitalizedLines.join("\n"); // Join lines back into text
    
        setText(newText);
        props.showAlert("Text has been capitalized", "success");
      } else {
        console.log("Text is undefined or empty.");
      }
    };
    
    
 

  return (

    <div className="container" style={{color:props.mode==='light'? '#0d2842':'white'}}>
      <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea placeholder="Enter the text here" className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white':'#6c757d', color:props.mode==='light'? '#0d2842':'white'}} id="mybox" rows="8"></textarea>
      </div>
     
      <button className={`btn btn-${props.mode==='light'? 'info':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleClearClick}>Clear</button>
      <button className={`btn btn-${props.mode==='light'? 'info':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleCopyClick}>Copy </button>
      <button className={`btn btn-${props.mode==='light'? 'info':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
      <button className={`btn btn-${props.mode==='light'? 'info':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleDownClick}>Convert to LowerCase</button>
      <button className={`btn btn-${props.mode==='light'? 'info':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleSpaceClick}>Remove Extra Space</button>
      <button className={`btn btn-${props.mode==='light'? 'info':'light'} mx-1 my-1`} disabled={text.length===0} onClick={handleCapitalizeCaseClick}>Capitalize first letter </button>
      <div className="my-4" >
      <h4>Find and Replace</h4>
      <input type="text" className="form-control my-3" placeholder="Find word (case insensitive)" value={search} onChange={handleOnChangeSearch} style={{backgroundColor:props.mode==='light'? 'white':'#6c757d', color:props.mode==='light'? '#0d2842':'white'}} />
      <input type="text" className="form-control my-3" placeholder="Replace with" value={replacement} onChange={handleReplaceChange} style={{backgroundColor:props.mode==='light'? 'white':'#6c757d', color:props.mode==='light'? '#0d2842':'white'}} />
      <button className={`btn btn-${props.mode==='light'? 'info':'light'} mb-3`} disabled={search.length === 0} onClick={handleSearchClick}>Find</button>
    <h2> Your Text Summary -</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes text read</p>
    <p>{search} appeared {searchCount} times</p>
    <h2>Preview -</h2>  
    <p>{(text.length>0)? text:'Nothing to preview'}</p>
     </div>
    </div>
  );
}
