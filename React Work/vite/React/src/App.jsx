
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Registration from './components/Registration';
// import Dashboard from './components/Dashboard';
function App() {
  
  // return (
    // <div className='app'>
    //   <State/>
    // </div>

    
  // );

  return (
    <div>
      <BrowserRouter>
        
        <Routes>

          <Route path="/" element={<MainLayout/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
          </Route>
        
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App

