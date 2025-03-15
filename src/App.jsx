import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";  
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CardDetailsPage from './pages/CardDetailsPage';
import Game from "./pages/Game";
import CreateQuiz from './pages/CreateQuiz';
import Navbar from './components/Navbar';

function App() {
  const location = useLocation(); // Sayfanın URL'sini almak için

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/PickuWebSite/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Hata:", err));
  }, []);

  return (
    <div className='w-full h-full bg-background-color z-20'>
      {/* Eğer bulunduğun sayfa "/Game" değilse Navbar'ı göster */}
      {location.pathname !== "/Game" && <Navbar />} 
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/CardDetailsPage/:id" element={<CardDetailsPage data={data} />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/CreateQuiz" element={<CreateQuiz data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
