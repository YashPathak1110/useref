import React, { useState } from 'react';
import './App.css';
import { useRef } from 'react';

// what is useRef = It is DOM Manipulate...
// How it use it??

function App() {
  const refElement = useRef("");
  const [name, setName] = useState("Yash")
  console.log(refElement)
  function Reset(){
    setName("")
    refElement.current.focus();
  }
    function handleInput(){
      refElement.current.style.color="blue"
    }
  return (
    <>
    <h1 className='h1'>Learning useRef</h1>
    <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)} className='input'></input><br></br>
    <button onClick={Reset} className='button'>Reset</button>
    <button onClick={handleInput} className='button button1'> color change </button>
    </>
  );
}

export default App;
