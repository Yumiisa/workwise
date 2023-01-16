import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './pages/footer/Footer';
import SignIn from './pages/authentication/components/signIn/SignIn';
import SignUp from './pages/authentication/components/signUp/SignUp';
import Home from './pages/Home/Home';

function App() {
  return (
   <BrowserRouter>
 <Home/>
   <Footer/>
   <Routes>
       
        <Route path="sign" element={<SignIn/>} />
        <Route path="signup" element={<SignUp/>} />
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
