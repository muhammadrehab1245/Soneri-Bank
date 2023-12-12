import './App.css'
import { SignupHead } from './components/SignupHead'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signupone } from './components/Signupone';
import { Signuptwo } from './components/Signuptwo';
import { Signupthree } from './components/Signupthree';
import { Signupfour } from './components/Signupfour';
import { Signupfive } from './components/Signupfive';
import { Signupsix } from './components/Signupsix';
import Notestate from './context/Notestate';
import { Usernameone } from './components/usernameone';
import { Usernametwo } from './components/Usernametwo';
import { Usernamethree } from './components/Usernamethree';
import { Passwordone } from './components/Passwordone';
import { Passwordtwo } from './components/Passwordtwo';
import { Passwordthree } from './components/Passwordthree';
import { Passwordfour } from './components/Passwordfour';
import { Passwordfive } from './components/Passwordfive';
function App() {

  return (
   <Router>
    <Notestate>
   <SignupHead/>
   <Routes>
   <Route path="/signup1" element={<Signupone />} />
    <Route path="/signup1" element={<Signupone />} />
   <Route path="/signup2" element={<Signuptwo />} />
     <Route path="/signup3" element={<Signupthree />} />
   
     <Route path="/signup4" element={<Signupfour />} /> 
     <Route path="/signup5" element={<Signupfive />} /> 
     <Route path="/signup6" element={<Signupsix />} /> 
    <Route path="/forgotusername1" element={<Usernameone />} />
   <Route path="/forgotusername2" element={<Usernametwo />} />
     <Route path="/forgotusername3" element={<Usernamethree />} />
     <Route path="/forgotpassword1" element={<Passwordone />} />
   <Route path="/forgotpassword2" element={<Passwordtwo />} />
     <Route path="/forgotpassword3" element={<Passwordthree />} />
   
     <Route path="forgotpassword4" element={<Passwordfour />} /> 
     <Route path="forgotpassword5" element={<Passwordfive />} /> 

   </Routes>
 </Notestate>
 </Router>
  )
}

export default App
