import { useState } from "react";
import vs from '/src/assets/pngwing.com.png';  // VS görsel yolu

export default function TestLayout({ items, title, description, selectedOption }) {
  const [selectedCount, setSelectedCount] = useState(1);  // 1. seçimden başla
  const [currentRound, setCurrentRound] = useState(selectedOption);  // İlk turda tüm seçenekler
  const [currentItems, setCurrentItems] = useState(items.slice(0, 2));  // İlk 2 öğeyi göster
  const [currentIndex, setCurrentIndex] = useState(2);  // Sonraki çift için index
  const [selectedItems, setSelectedItems] = useState([]);  // Seçilen öğeleri saklamak için dizi

  const handleSelectItem = (index) => {
    const selectedItem = currentItems[index];  // Seçilen öğeyi al
    setSelectedItems([...selectedItems, selectedItem]);  // Seçilen öğeyi selectedItems dizisine ekle
    setSelectedCount(selectedCount + 1);

    // Seçim tamamlandıysa, bir sonraki tura geç
    if (selectedCount === currentRound / 2) {
      // Eğer tur tamamlandıysa, selectedCount'u sıfırla ve bir sonraki tura geç
      setSelectedCount(1);  // Bir sonraki tur için sayacı sıfırla
      setCurrentRound(currentRound / 2);  // Seçenekleri yarıya indir
      setCurrentIndex(0);  // Bir sonraki tur için index'i sıfırla

      // Seçilen öğeleri kullanarak bir sonraki tur için yeni öğeleri al
      const nextRoundItems = [];
      for (let i = 0; i < selectedItems.length; i += 2) {
        nextRoundItems.push(selectedItems.slice(i, i + 2));  // Öğeleri çiftler halinde grupla
      }
      setCurrentItems(nextRoundItems[0] || []);  // İlk çifti bir sonraki turda göster
    } else {
      // Eğer seçim tamamlanmadıysa, bir sonraki çift öğeyi al
      const nextPair = items.slice(currentIndex, currentIndex + 2);
      setCurrentItems(nextPair);
      setCurrentIndex(currentIndex + 2);  // Sonraki çift için index'i güncelle
    }
  };

  // Bir sonraki turdaki öğeleri göster
  const getNextRoundItems = () => {
    if (selectedItems.length === currentRound / 2) {
      return selectedItems;
    }
    return [];  // Eğer seçim tamamlanmamışsa boş dönebilir
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className='w-full h-[20%] flex flex-col justify-end gap-4'>
        <h1 className='text-center text-white text-3xl'>{title}</h1>
        <p className='text-center text-white text-xl'>{description}</p>
        <p className='text-center text-white text-l'>
          Son {selectedOption} <span className='pl-4'>{selectedCount}/{currentRound / 2}</span> {/* Seçim durumu */}
        </p>
      </div>

      <div className='w-[80%] gap-10 flex items-center justify-between h-2/3 p-10'>
        {/* İlk div */}
        <div
          className='w-[40%] h-3/4 border-4 border-red-500 rounded-lg cursor-pointer'
          onClick={() => handleSelectItem(0)} // İlk öğe seçimi
        >
          <img src={currentItems[0]?.image} alt={currentItems[0]?.name} className="w-full h-full object-cover rounded-lg" />
          <h1 className='text-white text-center'>{currentItems[0]?.name}</h1>
        </div>

        {/* VS görseli */}
        <img className='w-14 h-14' src={vs} alt="vs" />

        {/* İkinci div */}
        <div
          className='w-[40%] h-3/4 border-4 border-cyan-500 rounded-lg cursor-pointer'
          onClick={() => handleSelectItem(1)} // İkinci öğe seçimi
        >
          <img src={currentItems[1]?.image} alt={currentItems[1]?.name} className="w-full h-full object-cover rounded-lg" />
          <h1 className='text-white text-center'>{currentItems[1]?.name}</h1>
        </div>
      </div>
    </div>
  );
}
