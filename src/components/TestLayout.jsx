import { useState } from "react";
import vs from "/src/assets/pngwing.com.png";
import Navbar from "./Navbar";

export default function TestLayout({ items, title, description, selectedOption }) {
  const [selectedCount, setSelectedCount] = useState(1);
  const [currentRound, setCurrentRound] = useState(selectedOption);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isFinal, setIsFinal] = useState(false);
  const [currentItems, setCurrentItems] = useState(items.slice(0, 2));
  const [remainingPlayers, setRemainingPlayers] = useState(items);
  const [selectedIndex, setSelectedIndex] = useState(null); // Seçilen div'in indexi
  const [animating, setAnimating] = useState(false); // Animasyon kontrolü

  const handleSelectItem = (index) => {
    setSelectedIndex(index);
    setAnimating(true);

    setTimeout(() => {
      const selectedItem = currentItems[index];
      const newSelectedItems = [...selectedItems, selectedItem];

      setSelectedItems(newSelectedItems);
      setSelectedCount(selectedCount + 1);
      setAnimating(false);
      setSelectedIndex(null);

      if (newSelectedItems.length === currentRound / 2) {
        if (newSelectedItems.length === 1) {
          setIsFinal(true);
          setCurrentItems(newSelectedItems);
          return;
        }

        setCurrentRound(currentRound / 2);
        setSelectedCount(1);
        setRemainingPlayers(newSelectedItems);
        setSelectedItems([]);

        setCurrentItems([newSelectedItems[0], newSelectedItems[1]]);
      } else {
        setCurrentItems([remainingPlayers[selectedCount * 2], remainingPlayers[selectedCount * 2 + 1]]);
      }
    }, 2500); // 5 saniye bekletiyoruz
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
       {isFinal && <Navbar />}
      <div className="w-full h-[20%] flex flex-col justify-end gap-4 ">
        <h1 className="text-center text-white text-3xl max-sm:text-lg">{title}</h1>
        <p className="text-center text-white text-xl max-sm:text-sm">{description}</p>
        <p className="text-center text-white text-l max-sm:text-sm">
          {isFinal ? "" : `Son ${currentRound}`}
          {!isFinal && <span className="pl-4">{selectedCount}/{currentRound / 2}</span>}
        </p>
      </div>

      <div className="w-[80%] max-lg:w-full gap-0 flex items-center  justify-between h-2/3 max-lg:p-0 relative">
        {isFinal ? (
          <div className="w-full flex flex-col items-center mb-20">
            <h1 className="text-3xl text-white max-sm:text-lg">Kazanan: {currentItems[0]?.name}</h1>
            <img src={currentItems[0]?.image} alt={currentItems[0]?.name} className="w-48 h-48 object-cover rounded-lg mt-4 " />
          </div>
        ) : (
          <>
            {/* İlk oyuncu */}
            <div
              className={`w-[40%] max-lg:w-[30%] max-lg:m-auto h-3/4 border-4 border-red-500 rounded-lg cursor-pointer transition-all duration-1000 ${
                selectedIndex === 0 ? "center-div-fromLeft " : animating ? "opacity-0" : ""
              }`}
              onClick={() => handleSelectItem(0)}
            >
              <img src={currentItems[0]?.image} alt={currentItems[0]?.name} className="w-full h-full object-cover rounded-lg" />
              <h1 className="text-white text-center pt-2">{currentItems[0]?.name}</h1>
            </div>

            {/* VS Görseli */}
            <img
              className={`w-14 max-sm:w-auto max-sm:h-8 h-14 transition-opacity duration-1000 ${animating ? "opacity-0" : "opacity-100"}`}
              src={vs}
              alt="vs"
            />

            {/* İkinci oyuncu */}
            <div
              className={`w-[40%] max-lg:w-[30%] max-lg:m-auto h-3/4 border-4 border-cyan-500 rounded-lg cursor-pointer transition-all duration-1000 ${
                selectedIndex === 1 ? "center-div-fromRight " : animating ? "opacity-0" : ""
              }`}
              onClick={() => handleSelectItem(1)}
            >
              <img src={currentItems[1]?.image} alt={currentItems[1]?.name} className="w-full h-full object-cover rounded-lg" />
              <h1 className="text-white text-center pt-2">{currentItems[1]?.name}</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
