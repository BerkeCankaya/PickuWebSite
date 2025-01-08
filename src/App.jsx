import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
  <div className='w-full min-h-screen bg-background-color'>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
  </div>
  )
}

export default App

