import React,{useState} from "react";
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
 const [mode,setMode]=useState('light'); 
 const [btn, setBtn]= useState('Dark mode');
 const [alert, setAlert]= useState(null);
 

const showAlert=(message, type)=>{
   setAlert({
    msg:message,
    type: type
   })

   setTimeout(() => {
    setAlert(null)
   }, 1700);
}
 

   const togglemode=()=>{
      if(mode==='light'){ 
        setMode('dark'); 
        document.body.style.backgroundColor ='#0d2842';
        setBtn('Light mode');
        showAlert('Dark mode has been enabled.', 'success')
     
      } 
  
      else{
        setMode('light');
        document.body.style.backgroundColor ='white';
      setBtn('Dark mode');
      showAlert('Light mode has been enabled.', 'success')
     
      }
   }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextTweak" about='About' mode={mode} togglemode={togglemode} button={btn}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/" element={<Form heading='Edit your text with TextTweak '  mode={mode} showAlert={showAlert}/>}>
          </Route>
          <Route path="/about" element={ <About mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
