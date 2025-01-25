import { Routes, Route, useLocation  } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import CardDetailsPage from './pages/CardDetailsPage';
import Game from "./pages/Game"

function App() {

  const location = useLocation();

// Game sayfasında navbar ve footer'ı gizlemek için kontrol
const isGamePage = location.pathname === "/Game";

  return (
  <div className='w-full h-full bg-background-color z-20'>
     {!isGamePage && <Navbar />} {/* Game sayfası değilse Navbar'ı göster */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/LoginPage" element={<LoginPage/>}></Route>
        <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
        <Route path="/CardDetailsPage/:id" element={<CardDetailsPage />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
      {!isGamePage && <Footer />} {/* Game sayfası değilse Navbar'ı göster */}
  </div>
  )
}

export default App

