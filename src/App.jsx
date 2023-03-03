import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {ContactUs} from './components/ContactUs'
//import './App.css'

function App() {

  return (
    <>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>    
      <ContactUs />
    </>  
  )
}

export default App
