import { Link } from 'react-router-dom';
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { MdPerson } from "react-icons/md";


const Navbar = () => {

  return (
    <nav className='w-2/3 h-32 flex m-auto z-0 relative'>
      <div className="flex justify-center items-center w-1/4 h-full">
      <Link className='text-l' to="/"><h1 className='pt-7 text-5xl font-bold text-color'>PickU</h1></Link>
      </div>
      <div className="flex items-center justify-start pt-9 h-full w-1/3">
        <div className="relative w-full ">
          <input
            type="text"
            placeholder="Arama Yapınız..."
            className="text-sm pt-2 pb-2 pl-2 pr-10 text-color border-transparent rounded-lg w-full bg-transparent border-none focus:outline-none shadow-primary-shadow"
            aria-label="Search"
          />
          <IoSearchSharp className="text-color absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" />
          </div>
        </div>
      <div className="flex items-center justify-center gap-5 pl-10 pt-7 h-full w-1/3 text-color ">
      <Link className='text-xl pl-1' to="/Profile">
      <button className='text-xl bg-button-bgColor p-3 rounded-full text-white'>Quiz Oluştur</button>
      </Link>
      <ul className='flex items-center justify-center gap-3'>
        <h1>|</h1>
        <li className='flex gap-x-1  items-center justify-center'>
          <Link className=' pl-1' to="/LoginPage"><MdPerson className='text-2xl' /></Link>
          <Link className=' pl-1' to="/Profile"><MdOutlineDarkMode className='text-2xl' /></Link>
        </li>
      </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
