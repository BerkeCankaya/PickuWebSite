import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";
import { FaGift } from 'react-icons/fa';
import { IoGameController } from "react-icons/io5";
import { RiLiveFill } from "react-icons/ri";
import { MdFastfood } from "react-icons/md";
import { PiFilmSlateFill } from "react-icons/pi";
import { FaMusic } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineHowToVote } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import ball from "../assets/ball.png";
import Card from './Card'; 


const Hero = () => {
  const categories = [
    { id: 1, name: "Eğlence", icon: <FaGift className='text-pink-400 text-xl' /> },
    { id: 2, name: "Spor", icon: <IoIosFootball className='text-cyan-400 text-xl' /> },
    { id: 3, name: "Influencer", icon: <RiLiveFill  className='text-blue-600 text-xl' /> },
    { id: 4, name: "Yemek", icon: <MdFastfood className='text-green-400 text-xl' /> },
    { id: 5, name: "Oyun", icon: <IoGameController className='text-blue-400 text-xl' /> },
    { id: 6, name: "Filmler", icon: <PiFilmSlateFill className='text-gray-700 text-xl' /> },
    { id: 7, name: "Müzik", icon: <FaMusic className='text-yellow-400 text-xl' /> },
    { id: 8, name: "Aşk", icon: <FaHeart className='text-red-500 text-xl' /> },
    { id: 9, name: "Alışveriş", icon: <FaShoppingCart className='text-orange-500 text-xl' /> },
    { id: 10, name: "Teknoloji", icon: <GrTechnology className='text-blue-500 text-xl' /> },
    { id: 12, name: "Siyaset", icon: <MdOutlineHowToVote className='text-yellow-400 text-xl' /> },
  ];

  const cards = [
    {
      id: 1,
      title: "Card 1",
      categoryname: "Eğlence",
      image: ball,
      description: "This is the first card description.",
      UserName:"Berke Çankaya"
    },
    {
      id: 2,
      title: "Card 2",
      categoryname: "Eğlence",
      image: ball,
      description: "This is the second card description.",
      UserName:"Berke Çankaya"
    },
    {
      id: 3,
      title: "Card 3",
      categoryname: "Eğlence",
      image: ball,
      description: "This is the third card description.",
      UserName:"Berke Çankaya"
    },
    {
      id: 4,
      title: "Card 4",
      categoryname: "Eğlence",
      image: ball,
      description: "This is the fourth card description.",
      UserName:"Berke Çankaya"
    },
  ];

    

  return (
    <div className="flex justify-between items-start w-full h-auto">
      <div className="flex justify-between items-center w-2/6 h-full">
        <div className="flex w-1/6 flex-col shadow-primary-shadow p-5 rounded-xl fixed top-40 left-96">
          <ul className='text-color'>
            <li className='flex flex-col gap-2'>
              <Link className='flex gap-2 items-center hover:bg-bg-hover p-2' to=""><FaStar className='text-yellow-400 text-xl' />Trends</Link>
              <Link className='flex gap-2 items-center hover:bg-bg-hover p-2' to=""><IoIosFootball className='text-white text-xl'/>SoccerGuess</Link>
              <span className="w-full border-b border-white pb-0"></span>
            </li>
          </ul>
          <ul className='text-color pt-5'>
            <h1 className='text-color text-xl'>Kategoriler</h1>
            <li className='flex flex-col gap-2 pt-5'>
              {categories.map((category) => (
                <Link key={category.id} className='flex gap-2 items-center hover:bg-bg-hover p-2 rounded' to={`/category/${category.name.toLowerCase()}`}>{category.icon} {category.name}</Link>
              ))}
            </li>
          </ul>
        </div>    
      </div>

      <div className="p-10 w-4/6 flex flex-wrap gap-10">
      {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            categoryname={card.categoryname}
            description={card.description}
            image={card.image}
            UserName={card.UserName}
          />
        ))}

      </div>
    </div>
  );
};

export default Hero;


