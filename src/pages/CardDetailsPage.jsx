import CardDetails from "../components/CardDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CardDetailsPage({ data }) {
  const { id } = useParams();
  const [blurred, setBlurred] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);

  const WinnerOptions = [
    {
      title: "Cristiano Ronaldo",
      image: "https://tmssl.akamaized.net/images/foto/galerie/cristiano-ronaldo-portugal-2024-1718210600-139467.jpg",
      percentage: "50%",
    },
    {
      title: "Lionel Messi",
      image: "https://entrevue.fr/wp-content/uploads/2025/01/messi.jpg",
      percentage: "30%",
    },
    {
      title: "Mohammed Salah",
      image: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/1320E/production/_101105387_f2405343-5a61-4fbf-8d68-e6c95a0d219c.jpg.webp",
      percentage: "80%",
    },
  ];

  // Seçili kartı ve filtrelenmiş kartları ayarla
  useEffect(() => {
    if (data?.cards) {
      const foundCard = data.cards.find((card) => card.id === Number(id));
      setSelectedCard(foundCard);
      setFilteredCards(data.cards.filter((card) => card.id !== Number(id)));
    }
  }, [data, id]);

  // Eğer `data` yüklenmemişse veya `selectedCard` bulunamazsa
  if (!data || !data.cards) {
    return <div className="h-screen text-white text-center">Yükleniyor...</div>;
  }
  if (!selectedCard) {
    return <div className="h-screen text-white text-center">Kart bulunamadı.</div>;
  }

  return (
    <div className="w-2/3 h-full m-auto">
      <CardDetails
        card={selectedCard}
        winners={WinnerOptions}
        cards={filteredCards}
        blurred={blurred}
        onUnblur={() => setBlurred(false)}
      />
    </div>
  );
}
