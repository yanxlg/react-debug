import * as React from 'react';
import logo from './logo.svg';
import './App.css';

const {useCallback, useState} = React;

function App() {
  const [count,setCount] = useState(0);

  const onClick = useCallback(()=>{
    setCount((count)=>count+1);
  },[]);

  return (
    <div className="App" onClick={onClick}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{count}
        </a>
      </header>
    </div>
  );
}

export default App;
