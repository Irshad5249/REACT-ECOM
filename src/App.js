// import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
import Layout from './Components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
// import About from './Pages/About';
import OurStore from './Pages/OurStore';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import Signup from './Pages/Signup';
import Resetpassword from './Pages/Resetpassword';
// import Contact from './Pages/Contact';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Layout />} >
    
  <Route index element={<Home />} />
  
  {/* <Route path='/' element={<About />} /> */}
  <Route path='/store' element={<OurStore />} />
  <Route path='blog' element={<Blog />} />
  <Route path='contact' element={<Contact />} />
  <Route path='login' element={<Login />} />
  <Route path='forgot-password' element={<Forgotpassword />} />
  <Route path='signup' element={<Signup/>} />
  <Route path='reset-password' element={<Resetpassword/>} />

  </Route>
  
  </Routes>
  </BrowserRouter>


  
    </>
  );
}

export default App;