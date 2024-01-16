import React from 'react'
import { useState } from 'react'
import './index.css'
import 'flowbite'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Modification from './components/Modification';
import Alert from './components/Alert';
import { Route,Routes } from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light');
  const [modeText,setModeText] = useState('Dark Mode');
  const [alert,setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      message : message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const modeToggleHandler=()=>{
    if(mode==='light'){
      setMode('dark');
      setModeText('Light Mode');
      document.body.style.backgroundColor = '#121212';
    }else{
      setMode('light');
      setModeText('Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar modeFunction={modeToggleHandler} modeText={modeText} mode={mode}/>
    <Alert alert={alert}/>
    <div className="px-5 sm:px-10 lg:px-14 py-5 lg:py-10">
    <Routes>
      <Route exact path='/' element={<Home mode={mode}/>}/>
      <Route exact path='/about' element={<About mode={mode}/>}/>
      <Route exact path='/modification' element={<Modification mode={mode} alert={showAlert}/>}/>
    </Routes>
    
    </div>
    </>
  )
}

export default App
