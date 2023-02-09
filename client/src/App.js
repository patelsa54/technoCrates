import './App.css';
import Home from './component/home';
import {BrowserRouter,Link,Route,Routes} from'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import Userdashboard from './component/userdashboard/userdashboard';
import Newappointment from './component/userdashboard/newappointment';

import Personaldetail from './component/userdashboard/personaldetail';
import Fillpersonaldata from './component/userdashboard/fillpersonaldata';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/register' element={<Register/>}> </Route> 
        </Route>
        <Route exact path='/userdashboard' element={<Userdashboard/>}>
            <Route exact path="/userdashboard/createappointment" element={<Newappointment/>}></Route>
            <Route exact path="/userdashboard/personaldetail" element={<Personaldetail/>}></Route> 
            <Route exact path="/userdashboard/fillpersonaldetails" element={<Fillpersonaldata/>}></Route>  
             

              
        </Route>  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
