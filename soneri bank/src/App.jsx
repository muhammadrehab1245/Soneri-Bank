import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signupone } from './components/Signupone';
import { Signuptwo } from './components/Signuptwo';
import { Signupthree } from './components/Signupthree';
import { Signupfour } from './components/Signupfour';
import { Signupfive } from './components/Signupfive';
import { Signupsix } from './components/Signupsix';
import Notestate from './context/Notestate';
import { Usernameone } from './components/Usernameone';
import { Usernametwo } from './components/Usernametwo';
import { Usernamethree } from './components/Usernamethree';
import { Passwordone } from './components/Passwordone';
import { Passwordtwo } from './components/Passwordtwo';
import { Passwordthree } from './components/Passwordthree';
import { Passwordfour } from './components/Passwordfour';
import { Passwordfive } from './components/Passwordfive';
import { Header } from './pages/Header';
import { Login } from './components/Login';
import { Slide } from './components/Slide';
import { Translation } from './components/Translation';
import { Maps } from './components/Maps';
import { Maps2 } from './components/Maps2';
import { ChartCompo } from './components/ChartCompo';

function App() {
 
  return (
   <Router>
    <Notestate>

   <Routes>
   <Route path="/login" element={<Login />} />
   <Route path="/trans" element={<Translation />} />
   <Route path="/map" element={<Maps/>} />
   <Route path="/map2" element={<Maps2/>} />
   <Route path="/slide" element={<Slide />} />
   <Route path="/chart" element={ <ChartCompo/>} />
   <Route path="/header" element={ <Header/>} >


    <Route path="signup1" element={<Signupone />} />
   <Route path="signup2" element={<Signuptwo />} />
     <Route path="signup3" element={<Signupthree />} />
     <Route path="signup3" element={<Signupthree />} />
   
     <Route path="signup4" element={<Signupfour />} /> 
     <Route path="signup5" element={<Signupfive />} /> 
     <Route path="signup6" element={<Signupsix />} /> 
  <Route path="forgotusername1" element={<Usernameone />} />
   <Route path="forgotusername2" element={<Usernametwo />} />
     <Route path="forgotusername3" element={<Usernamethree />} />
     <Route path="forgotpassword1" element={<Passwordone />} />
   <Route path="forgotpassword2" element={<Passwordtwo />} />
     <Route path="forgotpassword3" element={<Passwordthree />} />
   
     <Route path="forgotpassword4" element={<Passwordfour />} /> 
     <Route path="forgotpassword5" element={<Passwordfive />} />  
     </Route>
   </Routes>
 </Notestate>
 </Router>
  )
}

export default App
