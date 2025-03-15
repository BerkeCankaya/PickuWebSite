import { Routes, Route, useLocation  } from 'react-router-dom';
import { useEffect, useState } from "react";  
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import CardDetailsPage from './pages/CardDetailsPage';
import Game from "./pages/Game"
import CreateQuiz from './pages/CreateQuiz';

function App() {

  const location = useLocation();

// Game sayfasında navbar ve footer'ı gizlemek için kontrol
const isGamePage = location.pathname === "/Game";

const [data, setData] = useState(null);

useEffect(() => {
  fetch("/PickuWebSite/data.json")
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err) => console.error("Hata:", err));
}, []);

  return (
  <div className='w-full h-full bg-background-color z-20'>
     {!isGamePage && <Navbar />} {/* Game sayfası değilse Navbar'ı göster */}
      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path="/LoginPage" element={<LoginPage/>}></Route>
        <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
        <Route path="/CardDetailsPage/:id" element={<CardDetailsPage data={data} />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/CreateQuiz" element={<CreateQuiz data={data}/>} />
      </Routes>
      {!isGamePage && <Footer />} {/* Game sayfası değilse Navbar'ı göster */}
  </div>
  )
}

export default App

