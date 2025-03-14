import CardDetails from "../components/CardDetails"
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function CardDetailsPage({data}) {

  const WinnerOptions = [
    {
        title: "Cristiano Ronaldo",
        image:"https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-portugal-2024-1718210600-139467.jpg",
        percentage: "50%"

    },
    {
      title: "Lionel Messi",
      image: "https://entrevue.fr/wp-content/uploads/2025/01/messi.jpg",
      percentage: "30%"
    },
    {
      title: "Mohammed Salah",
      image:"https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1320E/production/_101105387_f2405343-5a61-4fbf-8d68-e6c95a0d219c.jpg.webp",
      percentage: "80%"
    },
  ]

 
  const winners = WinnerOptions;

  const { id } = useParams();

  // id'ye göre kartı bul
  const selectedCard = data.cards.find((card) => card.id === Number(id));

  if (!selectedCard) {
    return <div className="h-screen text-white text-center">Kart bulunamadı.</div>;
  }
  const [blurred, setBlurred] = useState(true);

    // Mevcut kartı hariç tutarak benzer kartları filtrele
    const filteredCards = data.cards.filter((card) => card.id !== selectedCard.id);


  return (
    <div className="w-2/3 h-full m-auto">
      <CardDetails 
          card={selectedCard}
          winners={winners}
          cards={filteredCards} /* Filtrelenmiş kartları gönder */
          blurred={blurred}
          onUnblur={() => setBlurred(false)}
      />
    </div>
  )
}
