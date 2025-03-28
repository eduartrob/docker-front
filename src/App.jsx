import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/authentication/login'; 
import Register from './pages/authentication/register';
import NotFound from './pages/404';
import Home from './pages/Home';
import ProtectedRoutes  from './components/ProtectedRoutes';
import ScreenLoading from './components/screenLoading';

import './assets/Main.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoutes/>}>
          <Route path="/home" element={<Home />} />
        </Route>


        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;