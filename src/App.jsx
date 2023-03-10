// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import {ContactUs} from './components/ContactUs'
import './App.css'
import { RepasoHooks } from "./components/RepasoHooks/RepasoHooks"

function App() {

  return (
    <div className=''>
      <RepasoHooks/>
    </div>

    // <>
    //   <a href="https://reactjs.org" target="_blank">
    //     <img src={reactLogo} className="logo react" alt="React logo" />
    //   </a>    
    //   <ContactUs />
    // </>  
  )
}

export default App
//el default permite que al llamar a la funcion se pueda poner otro nombre, si no esta es obligatorio poner el mismo nombre del componentente 
// --> import reactLogo from './assets/react.svg' // import {ContactUs} from './components/ContactUs'