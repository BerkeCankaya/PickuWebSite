import CardDetails from "../components/CardDetails"
import { useParams } from "react-router-dom";
import { useState } from "react";
import ball from "../assets/ball.png"

export default function CardDetailsPage() {

  const CardDetailsCard = [
    {
      id: 1,
      title: "Gelmiş Geçmiş En iyi Futbolcu",
      description: "Futbol tarihinin en büyük oyuncularını keşfedin ve en iyisini seçin!",
      image: ball,
      categoryname: "Eğlence",
      UserName: "Berke Çankaya",
      timesPlayed: "250 kez oynandı",
      date: "2 January 2025",
      LikeSayisi: "150",
      items: [
        { id: 1, name: "Cristiano Ronaldo" },
        { id: 2, name: "Lionel Messi" },
        { id: 3, name: "Neymar" },
        { id: 4, name: "Mohammed Salah" },
        { id: 5, name: "Vinicius Junior" },
        { id: 6, name: "Maradona" },
        { id: 7, name: "Ronaldo" },
        { id: 8, name: "Pele" },  
        { id: 9, name: "Kylian Mbappe" },
        { id: 10, name: "Erling Haland" },
        { id: 11, name: "Sergio Ramos" },
        { id: 12, name: "Iniesta" },
        { id: 13, name: "Xavi" },
        { id: 14, name: "Puyol" }, 
        { id: 15, name: "Virgil Van Dıjk" },
        { id: 16, name: "Kevin De Bruyne" },
        { id: 17, name: "Cristiano Ronaldo" },
        { id: 18, name: "Lionel Messi" },
        { id: 19, name: "Neymar" },
        { id: 20, name: "Mohammed Salah" },
        { id: 21, name: "Vinicius Junior" },
        { id: 22, name: "Maradona" },
        { id: 23, name: "Ronaldo" },
        { id: 24, name: "Pele" },  
        { id: 25, name: "Kylian Mbappe" },
        { id: 26, name: "Erling Haland" },
        { id: 27, name: "Sergio Ramos" },
        { id: 28, name: "Iniesta" },
        { id: 29, name: "Xavi" },
        { id: 30, name: "Puyol" }, 
        { id: 31, name: "Virgil Van Dıjk" },
        { id: 32, name: "Kevin De Bruyne" }
      ]
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the first card description.",
      image: ball,
      categoryname: "Eğlence",
      UserName: "Berke Çankaya",
      timesPlayed: "250 kez oynandı",
      date: "2 January 2025",
      LikeSayisi: "150",
      items: [
        { id: 1, name: "Çağayay Ulusoy" },
        { id: 2, name: "Serenay Sarıkaya" },
        { id: 3, name: "Neymar" },
        { id: 4, name: "Mohammed Salah" },
        { id: 5, name: "Vinicius Junior" },
        { id: 6, name: "Maradona" },
        { id: 7, name: "Ronaldo" },
        { id: 8, name: "Pele" },  
        { id: 9, name: "Kylian Mbappe" },
        { id: 10, name: "Erling Haland" },
        { id: 11, name: "Sergio Ramos" },
        { id: 12, name: "Iniesta" },
        { id: 13, name: "Xavi" },
        { id: 14, name: "Puyol" }, 
        { id: 15, name: "Virgil Van Dıjk" },
        { id: 16, name: "Kevin De Bruyne" },
        { id: 17, name: "Cristiano Ronaldo" },
        { id: 18, name: "Lionel Messi" },
        { id: 19, name: "Neymar" },
        { id: 20, name: "Mohammed Salah" },
        { id: 21, name: "Vinicius Junior" },
        { id: 22, name: "Maradona" },
        { id: 23, name: "Ronaldo" },
        { id: 24, name: "Pele" },  
        { id: 25, name: "Kylian Mbappe" },
        { id: 26, name: "Erling Haland" },
        { id: 27, name: "Sergio Ramos" },
        { id: 28, name: "Iniesta" },
        { id: 29, name: "Xavi" },
        { id: 30, name: "Puyol" }, 
        { id: 31, name: "Virgil Van Dıjk" },
        { id: 32, name: "Kevin De Bruyne" }
      ]
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the first card description.",
      image: ball,
      categoryname: "Eğlence",
      UserName: "Berke Çankaya",
      timesPlayed: "250 kez oynandı",
      date: "2 January 2025",
      LikeSayisi: "150",
      items: [
        { id: 1, name: "Cristiano Ronaldo" },
        { id: 2, name: "Lionel Messi" },
        { id: 3, name: "Neymar" },
        { id: 4, name: "Mohammed Salah" },
        { id: 5, name: "Vinicius Junior" },
        { id: 6, name: "Maradona" },
        { id: 7, name: "Ronaldo" },
        { id: 8, name: "Pele" },  
        { id: 9, name: "Kylian Mbappe" },
        { id: 10, name: "Erling Haland" },
        { id: 11, name: "Sergio Ramos" },
        { id: 12, name: "Iniesta" },
        { id: 13, name: "Xavi" },
        { id: 14, name: "Puyol" }, 
        { id: 15, name: "Virgil Van Dıjk" },
        { id: 16, name: "Kevin De Bruyne" },
        { id: 17, name: "Cristiano Ronaldo" },
        { id: 18, name: "Lionel Messi" },
        { id: 19, name: "Neymar" },
        { id: 20, name: "Mohammed Salah" },
        { id: 21, name: "Vinicius Junior" },
        { id: 22, name: "Maradona" },
        { id: 23, name: "Ronaldo" },
        { id: 24, name: "Pele" },  
        { id: 25, name: "Kylian Mbappe" },
        { id: 26, name: "Erling Haland" },
        { id: 27, name: "Sergio Ramos" },
        { id: 28, name: "Iniesta" },
        { id: 29, name: "Xavi" },
        { id: 30, name: "Puyol" }, 
        { id: 31, name: "Virgil Van Dıjk" },
        { id: 32, name: "Kevin De Bruyne" }
      ]
    },
  ];

  const WinnerOptions = [
    {
        title: "Cristiano Ronaldo",
        image: ball,
        percentage: "50%"

    },
    {
      title: "Lionel Messi",
      image: ball,
      percentage: "30%"
    },
    {
      title: "Mohammed Salah",
      image: ball,
      percentage: "80%"
    },
  ]

 
  const winners = WinnerOptions;

  const { id } = useParams();

  // id'ye göre kartı bul
  const selectedCard = CardDetailsCard.find((card) => card.id === Number(id));

  if (!selectedCard) {
    return <div className="h-screen text-white text-center">Kart bulunamadı.</div>;
  }
  const [blurred, setBlurred] = useState(true);

    // Mevcut kartı hariç tutarak benzer kartları filtrele
    const filteredCards = CardDetailsCard.filter((card) => card.id !== selectedCard.id);


  return (
    <div className="w-2/3 h-full m-auto">
      <CardDetails 
          card={selectedCard}
          winners={winners}
          cardDetailsCard={filteredCards} /* Filtrelenmiş kartları gönder */
          blurred={blurred}
          onUnblur={() => setBlurred(false)}
      />
    </div>
  )
}
