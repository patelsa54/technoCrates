import './App.css';
import Home from './component/home';
import {BrowserRouter,Link,Route,Routes} from'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import Userdashboard from './component/userdashboard/userdashboard';

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
          
        </Route>  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
