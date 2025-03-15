import { BrowserRouter as Router ,Routes, Route  } from 'react-router-dom';
import { useEffect, useState } from "react";  
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CardDetailsPage from './pages/CardDetailsPage';
import Game from "./pages/Game"
import CreateQuiz from './pages/CreateQuiz';

function App() {


const [data, setData] = useState(null);

useEffect(() => {
  fetch("/PickuWebSite/data.json")
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err) => console.error("Hata:", err));
}, []);

  return (
    <Router basename='/PickuWebSite'>
  <div className='w-full h-full bg-background-color z-20'>
      <Routes>
        <Route path="/" element={<Home data={data} />}></Route>
        <Route path="/LoginPage" element={<LoginPage/>}></Route>
        <Route path="/RegisterPage" element={<RegisterPage/>}></Route>
        <Route path="/CardDetailsPage/:id" element={<CardDetailsPage data={data} />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/CreateQuiz" element={<CreateQuiz data={data}/>} />
      </Routes>
  </div>
  </Router>
  )
}

export default App

