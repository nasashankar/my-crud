
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Register from './Pages/Register';
function App() {
  return (
    <div className="App">
     
     
      
      <BrowserRouter>
        
        <HelmetProvider>
        <Routes>      
          
          <Route path="/home" element={<Home/>}/>  
          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          
         
          
             
        </Routes>
        </HelmetProvider>
       
        
      

      </BrowserRouter>
    </div>
  );
}

export default App;
