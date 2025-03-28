import './home.css'; // Asegúrate de que el archivo home.css esté en la misma carpeta o ajusta la ruta.
import { useState, useEffect } from 'react';
import { User, LogOut } from 'lucide-react'; // Asegúrate de que los íconos estén bien importados.
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [currentTime, setCurrentTime] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    setCurrentTime(now.toLocaleTimeString(undefined, options));
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('token'); // Elimina el token de sessionStorage
    navigate('/'); // Redirige al usuario a la página de inicio
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1 className="title">
            <User size={18} /> {/* Aquí estamos usando el ícono de User */}
            Dashboard
          </h1>
        </div>
        <div className="content">
          <p className="welcomeText">
            Welcome back, <span className="userText">eduartrob</span>!
          </p>
          <p className="infoText">You have successfully logged in to your account.</p>
        </div>
        <div className="footer">
          <span className="timeText">Login time: {currentTime}</span>
          <button onClick={handleLogout} className="logoutButton">
            <LogOut size={14} /> {/* Aquí estamos usando el ícono de LogOut */}
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
