import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import Lifecycle from './components/Lifecycle';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Sara from './components/Sara';
import EventBind from './components/EventBind';


function App() {
  return (
    <div className="App">
   <EventBind />
   {/* <Sara /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Lifecycle /> */}
     {/* <Counter /> */}
      {/* <Message /> */}

      {/* <Greet name="Yash" heroname="shaktimaan">
      <p>This is Children props </p></Greet>
      <Greet name="Shrey" heroname="sonpari"/>
      import Hello from './components/Hello'

      <Greet name="Aman" heroname="Hatim">
        <button>
          Action
        </button>
      </Greet>
      <Welcome name="Yash" heroname="shaktimaan" />
      <Welcome />
      <Welcome /> */}
      {/* <Hello /> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello sarang!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
