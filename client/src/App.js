import './App.css';
import Home from './component/home';
import {BrowserRouter,Link,Route,Routes} from'react-router-dom';
import Login from './component/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          <Route path='/login' element={<Login/>}> </Route>
          
        </Route> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
