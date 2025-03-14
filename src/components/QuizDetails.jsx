import React, { useState, useRef } from 'react';
import { IoIosCloudDownload } from "react-icons/io";

export default function QuizDetails({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full h-full flex justify-center">
      <form className="w-[80%] h-full flex flex-col shadow-primary-shadow rounded">
        
        {/* Başlık Alanı */}
        <div className="h-1/4 flex flex-col justify-center p-8">
          <label className="text-color text-l p-1">Başlık</label>
          <input
            className="w-full p-2 bg-background-color text-color rounded-xl outline-none border-white border-2 mt-1"
            type="text"
            maxLength="70"
            placeholder="Başlık"
          />
        </div>

        {/* Açıklama Alanı */}
        <div className="h-1/4 flex flex-col px-8">
          <label className="text-color text-l p-1">Açıklama</label>
          <textarea
            maxLength="120"
            rows="3"
            className="w-full bg-background-color text-color rounded-xl outline-none border-white border-2 p-2 mt-1"
            placeholder="Açıklama"
          />
        </div>

        {/* Kapak Fotoğrafı */}
        <div className="w-full h-1/2 flex">
          <div className="w-1/2 h-full flex flex-col justify-center p-8">
            <label className="text-color text-l p-1">Kapak Fotoğrafı Ekle</label>
            <div 
              className="w-[90%] rounded-xl h-[80%] bg-bg-hover opacity-50 hover:opacity-100 hover:border-gray-500 border-2 border-dashed border-gray-700 flex flex-col justify-center items-center cursor-pointer"
              onClick={handleFileUpload}
            >
              <input 
                id="file-input"
                type="file"
                className="hidden"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
              />
              {imagePreview && (
              <img 
                src={imagePreview} 
                alt="Seçilen Resim" 
                className="w-20 h-20 object-cover rounded-lg mb-3 border border-gray-500 opa-100"
              />
            )}
              <IoIosCloudDownload className="text-white text-3xl"/>
              <span className="text-white text-l">Download Images</span>
            </div>
          </div>

          {/* Kategori Seçimi ve Buton */}
          <div className="w-1/2 h-full flex flex-col items-center justify-center gap-10 p-8">
            <select
              className="w-full p-2 bg-background-color text-color rounded-xl outline-none border-white border-2 cursor-pointer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
               <option value="" disabled>Kategori Seçin</option>
                {categories.map((category) => (
                        <option key={category.id}>{category.name}</option>
                    ))}
            </select>

            <button className="w-1/2 text-xl bg-button-bgColor p-3 rounded-full text-white">
              Quiz Oluştur
            </button>
          </div>
        </div> 
        
      </form>
    </div>
  );
}
