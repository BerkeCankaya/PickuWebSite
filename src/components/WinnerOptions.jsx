import React from 'react';

export default function WinnerOptions({ winners, blurred, onUnblur }) {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-3xl text-white pt-3">Kazanan Seçimler</h1>
      <div className="relative w-full h-full flex flex-col gap-10 pt-10">
           {/* Bulanıklık Katmanı */}
           {blurred && (
              <div className="absolute top-5 -left-5 w-[110%] h-full bg-transparent bg-opacity-50 backdrop-blur-lg flex flex-col items-center pt-[20%] gap-5 z-10 rounded-lg">
                <h1 className='text-white text-xl font-semibold'>Spoilerı önlemek için seçimler gizlenmiştir.</h1>
                <button
                  onClick={onUnblur}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                >
                  Seçimleri Göster
                </button>
              </div>
            )}
        {winners.map((winner, index) => (
          <div
            key={index}
            className="relative w-full h-64 flex rounded-lg shadow-primary-shadow p-5"
          >
            {/* İçerik */}
            <div className="w-1/2 h-full">
              <div className="w-[90%] h-[20%]">
                <h1 className="text-white text-lg">
                  {index + 1}. {winner.title}
                </h1>
              </div>
              <div className="w-full h-[80%]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={winner.image}
                  alt={winner.title}
                />
              </div>
            </div>
            <div className="w-1/2 h-auto flex flex-col gap-2 pl-2 justify-center">
              <h1 className="text-white text-xl">Tercih Edilme Oranı</h1>
              <div className="w-[90%] bg-gray-300 rounded-full h-5">
                <div
                  className="bg-blue-500 h-5 rounded-full text-white text-center flex items-center justify-center"
                  style={{ width: winner.percentage }}
                >
                  <span className="text-sm">{winner.percentage}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
