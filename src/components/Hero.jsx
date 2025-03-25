import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import Card from './Card'; 
import { FaGift, FaMusic, FaHeart, FaShoppingCart } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { MdFastfood, MdOutlineHowToVote } from "react-icons/md";
import { PiFilmSlateFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { IoGameControllerOutline } from 'react-icons/io5'; 
import { FaTrophy } from "react-icons/fa6";

const Hero = ({ categories, cards }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const GetIcon = (iconName) => {
    const icons = {
      FaGift: <FaGift className='text-pink-400 text-xl' />,
      IoIosFootball: <IoIosFootball className='text-cyan-400 text-xl' />,
      RiLiveFill: <RiLiveFill className='text-blue-600 text-xl' />,
      MdFastfood: <MdFastfood className='text-green-400 text-xl' />,
      IoGameControllerOutline: <IoGameControllerOutline className='text-blue-400 text-xl' />,
      PiFilmSlateFill: <PiFilmSlateFill className='text-gray-700 text-xl' />,
      FaMusic: <FaMusic className='text-yellow-400 text-xl' />,
      FaHeart: <FaHeart className='text-red-500 text-xl' />,
      FaShoppingCart: <FaShoppingCart className='text-orange-500 text-xl' />,
      GrTechnology: <GrTechnology className='text-blue-500 text-xl' />,
      MdOutlineHowToVote: <MdOutlineHowToVote className='text-yellow-400 text-xl' />,
    };
    return icons[iconName] || null;
  };

  // Seçilen kategoriye göre kartları filtrele
  const filteredCards = selectedCategory 
    ? cards.filter(card => card.categoryname.toLowerCase() === selectedCategory.toLowerCase()) 
    : cards;

    const [selectedCate, setSelectedCate] = useState("");

  return (
    <div className="flex justify-between items-center w-full min-h-screen max-lg:flex max-lg:flex-col">
      {/* Kategoriler */}
      <div className="flex justify-between  items-center w-2/6 h-full">
        <div className="flex w-1/6 flex-col shadow-primary-shadow p-5 rounded-xl fixed max-lg:static top-40 left-96 max-2xl:left-64 max-2xl:w-[20%] max-xl:left-44 max-xl:w-[25%] max-lg:hidden">
          <ul className='text-color'>
            <li className='flex flex-col gap-2'>
              <Link className='flex gap-2 items-center hover:bg-bg-hover p-2' to="">
                <FaStar className='text-yellow-400 text-xl' />Trends
              </Link>
              <Link className='flex gap-2 items-center hover:bg-bg-hover p-2' to="">
                <FaTrophy className='text-yellow-500 text-xl' />Top Rated
              </Link>
              <span className="w-full border-b border-white pb-0"></span>
            </li>
          </ul>
          <ul className='text-color pt-5'>
            <h1 className='text-color text-xl'>Kategoriler</h1>
            <li className='flex flex-col gap-2 pt-5'>
              {categories.map((category) => (
                <button 
                  key={category.id} 
                  className={`flex gap-2 items-center hover:bg-bg-hover p-2 rounded w-full ${selectedCategory === category.name ? 'bg-gray-700' : ''}`} 
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {GetIcon(category.icon)} {category.name}
                </button>
              ))}
            </li>
          </ul>
        </div>    
      </div>
      <div className='w-full flex items-center justify-center pt-10 hidden max-lg:flex'>
      <select
              className="w-2/3 p-2 bg-background-color text-color rounded-xl outline-none border-white border-2 cursor-pointer"
              value={selectedCate}
              onChange={(e) => setSelectedCate(e.target.value)}
            >
               <option value="" disabled>Kategori Seçin</option>
                {categories.map((category) => (
                        <option key={category.id}>{category.name}</option>
                    ))}
            </select>
      </div>

      {/* Filtrelenmiş Kartlar */}
      <div className="p-10 w-4/6 max-2xl:w-[60%] max-lg:w-[80%] max-lg:gap-32 max-md:gap-16 max-lg:pt-20 flex flex-wrap gap-10">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              categoryname={card.categoryname}
              description={card.description}
              image={card.image}
              UserName={card.UserName}
            />
          ))
        ) : (
          <p className="text-white text-lg">Bu kategoride henüz bir quiz bulunmuyor.</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
