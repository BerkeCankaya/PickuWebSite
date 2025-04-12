import { Link } from 'react-router-dom';
import { MdOutlineDarkMode, MdPerson, MdMenu, MdClose } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { useState ,useEffect } from 'react';
import { FaHome } from "react-icons/fa";
import { FaTrophy , FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";



const Navbar = () => {


  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className='w-2/3 h-32 flex m-auto z-0 relative max-xl:w-[80%] max-lg:w-[90%] max-md:w-full z-50'>
      <div className="flex justify-center items-center w-1/4 h-full max-xl:w-1/2">
      <Link onClick={() => setSelectedCategory(null)} className='text-l' to="/"><h1 className='pt-7 text-5xl font-bold text-color max-sm:text-3xl'>PickU</h1></Link>
      </div>
      <div className="flex items-center justify-start pt-9 h-full w-1/3">
        <div className="relative w-full max-xl:hidden">
          <input
            type="text"
            placeholder="Arama Yapınız..."
            className="text-sm pt-2 pb-2 pl-2 pr-10 text-color border-transparent rounded-lg w-full bg-transparent border-none focus:outline-none shadow-primary-shadow"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoSearchSharp className="text-color absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" />
          </div>
        </div>
      <div className="flex items-center justify-center gap-5 pl-10 pt-7 h-full w-1/3 text-color max-xl:w-1/2 max-lg:pl-0 ">
      <Link className='text-xl pl-1' to="/CreateQuiz">
      <button className='text-xl bg-button-bgColor p-3 rounded-full text-white max-lg:text-lg max-sm:hidden'>Quiz Oluştur</button>
      </Link>
      <ul className='flex items-center justify-center gap-3'>
        <h1 className='max-sm:hidden'>|</h1>
        <li className='flex gap-x-1  items-center justify-center'>
          <Link className=' pl-1 max-sm:hidden' to="/LoginPage"><MdPerson className='text-2xl' /></Link>
          <MdOutlineDarkMode className='text-2xl' />
        </li>
      </ul>
        <div className="sm:hidden max-sm:pt-1">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <MdClose className="text-3xl" /> : <MdMenu className="text-3xl" />}
            </button>
        </div>
      </div>
      {menuOpen && (
         <motion.div 
         initial={{ x: "100%" }} 
         animate={{x:0}} 
         exit={{ x: "100%" }} 
         transition={{ duration: 0.4, ease: "easeInOut" }}
         className="fixed top-0 right-0 bg-slate-950 shadow-primary-shadow w-full p-5 flex flex-col justify-between min-h-screen z-[999] sm:hidden"
       >
  <div className="absolute top-0 left-0 bg-slate-950 shadow-primary-shadow w-full py-10 px-5 flex flex-col justify-between min-h-screen z-[999] sm:hidden">
    <div className="flex flex-col justify-between  gap-12">
      <div className='flex items-center justify-between w-full py-5'>
        <h1 className='text-5xl text-white font-bold'>Picku</h1>
        <button onClick={() => setMenuOpen(false)}>
          <MdClose className="text-5xl cursor-pointer text-white" />
        </button>
      </div>
      <div className="flex flex-col gap-10">
      <Link to="./" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-xl text-white"><FaHome className='text-sky-500'/>Home</Link>
      <Link  onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-xl text-white"><FaTrophy className='text-yellow-400'/>Trends</Link>
      <Link  onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-xl text-white"><FaStar className='text-yellow-500'/>Top Rated</Link>
    </div>
    </div>
    <div className="flex flex-col gap-5">
      <Link to="/CreateQuiz" onClick={() => setMenuOpen(false)}>
        <button className="w-full bg-button-bgColor text-white p-3 rounded-xl">Quiz Oluştur</button>
      </Link>
      <Link to="/LoginPage" onClick={() => setMenuOpen(false)}>
        <button className="w-full bg-button-bgColor text-white p-3 rounded-xl">Giriş Yap</button>
      </Link>
    </div>
  </div>
  </motion.div>
)}

    </nav>
  )
}

export default Navbar
