import React from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from "./Counter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter React Redux Example
        </p>
<Counter/>
      </header>
    </div>
  )
}

export default App
