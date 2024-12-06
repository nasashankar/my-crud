
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Register from './Pages/Register';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
function App() {
  return (
    <div className="App">
     
     
      
      <BrowserRouter>
        
        <HelmetProvider>
        <Routes>      
          
          <Route path="/home" element={<Home/>}/>          
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/Aboutus" element={<AboutUs/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Contactus" element={<ContactUs/>}/>
          
          
         
          
             
        </Routes>
        </HelmetProvider>
       
        
      

      </BrowserRouter>
    </div>
  );
}

export default App;
