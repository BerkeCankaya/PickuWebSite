import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import WinnerOptions from "./WinnerOptions"
import { Link ,useNavigate } from "react-router-dom";
import MoreCard from "./MoreCard";


export default function CardDetails({ card, winners ,cards , blurred,
  onUnblur }) {

    const itemsCount = card.items.length;

    // Mümkün olan seçenekleri belirle
    const options = [8, 16, 32, 64].filter(option => option <= itemsCount);
  
    // Eğer seçenekler arasında bir seçim yapılması gerekiyorsa
    const bestOption = options[options.length - 1]; // En büyük uygun seçenek

     // State ile seçili butonu takip et
    const [selectedOption, setSelectedOption] = useState(bestOption);

    const navigate = useNavigate();

    // Oyuna Başla butonuna tıklanınca işlem yap
    const handleStartGame = () => {
      const selectedItems = card.items.slice(0, selectedOption); // Seçilen seçenek kadar item al
      console.log("Selected Items:", selectedItems); // Kontrol için
      console.log("Card Title:", card.title); // Kontrol için
    
      if (selectedItems.length > 0) {
        // navigate ile veriyi gönder
        navigate("/Game", { state: { items: selectedItems, title: card.title ,description: card.description, selectedOption }, replace: true });
      } else {
        alert("No items selected!");
      }
    };

    
  return (
    <div className="w-full h-full pt-10 flex flex-col gap-20 items-center pl-10">
      {/* Card details içerikleri */}
      <div className="flex h-[30%] w-[90%] ">
        <div className="w-[40%] h-full shadow-primary-shadow rounded-lg relative">
          <button className="cursor-default py-1 px-5 absolute left-5 top-5 rounded-xl bg-button-bgColor text-white">{card.categoryname}</button>
          <img className="w-full h-full object-cover" src={card.image} alt={card.title} />
        </div>
        <div className="w-[60%] h-[30%] rounded-lg flex flex-col gap-2 px-14">
          <h1 className="text-white text-2xl">{card.title}</h1>
          <p  className="text-white text-l truncate">{card.description}</p>
          <div className="flex gap-5 pt-4">
            <div className="flex ">
              <AiFillLike className="text-white text-2xl"/> 
              <h1 className="text-l text-white px-2">{card.LikeSayisi}</h1>
            </div>
            <div className="flex">
              <FaPlay className="text-white text-2xl"/>                   
              <h1 className="text-l text-white px-2">{card.timesPlayed}</h1>
            </div>
            <div className="flex">
              <FaRegCalendarDays className="text-white text-2xl"/> 
              <h1 className="text-l text-white px-2">{card.date}</h1>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-4">
        {options.map(option => (
          <button key={option} className={`text-l text-white w-10 p-2 border-white border rounded-lg ${
            option === selectedOption ? "bg-blue-500" : "bg-gray-700"
          }`}
          onClick={() => setSelectedOption(option)} // Tıklanan seçeneği seçili yap
        >
            {option}
          </button>
        ))}
      </div>
          <div className="w-full pt-2">
              <button onClick={handleStartGame}  className='w-1/2 text-xl bg-red-500 py-1.5 px-10 rounded-full text-white'>Oyuna Başla</button>
          </div>
        </div>
      </div>
      {/* Kazanan Seçimler */}
      <div className="flex w-[95%]">
        <div className="w-[50%] h-full">
          <WinnerOptions winners={winners}  blurred={blurred}
          onUnblur={onUnblur} />
        </div>
    
        {/* Benzer Örnekler */}
        <div className="w-[50%] h-full">
          <h1 className="text-3xl text-white pl-[20%] p-3">Benzer Örnekler</h1>
          <div className="w-full h-full flex flex-col gap-10 my-5">
          {cards
              .filter((similarCard) => similarCard.id !== card.id) // Mevcut kartı hariç tut
              .slice(0, 3) // Sadece 3 kart göster
              .map((similarCard) => (
                <div key={similarCard.id} className="w-full h-1/3">
                  <MoreCard
                    id={similarCard.id} // Link için gerekli ID
                    cards={similarCard} // Tüm kart verisini aktar
                  />
              </div>
                ))}
          </div>
        </div>      
      </div>
    </div>
  );
}
