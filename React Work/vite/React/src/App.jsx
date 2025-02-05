
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Registration from './components/Registration';
// import Dashboard from './components/Dashboard';
function App() {
  const [store, setStore] = useState("");


  // return (
    // <div className='app'>
    //   <State/>
    // </div>

    
  // );

  return (
    <div>
      {JSON.stringify(store)}
      <BrowserRouter>
        
        <Routes>

          <Route path="/" element={<MainLayout/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration  regData={setStore}/>}/>
            
          </Route>
        
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App

