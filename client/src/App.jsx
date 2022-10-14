import './app.css'
import TopBar from "./components/TopBar/TopBar";
import Home from "./components/Pages/Home/Home";
import Single from './components/Pages/single/Single';
import Write from './components/Pages/write/Write';
import Settings from './components/Pages/settings/Settings';
import Register from './components/Pages/register/Register';
import Login from './components/Pages/login/Login';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './components/context/Context';



function App() {
  const {user} = useContext(Context);
  
  return (
    <BrowserRouter>

      <TopBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Home/> : <Login />} />
        <Route path='/register' element={user ? <Home/> : <Register />} />
        <Route path='/write' element={user ? <Write/> : <Register />} />
        <Route path='/settings' element={user ? <Settings/> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
        
      </Routes>

    </BrowserRouter>

  );
}

export default App;
