import TestLayout from "../components/TestLayout"
import { useLocation } from "react-router-dom";

export default function Game() {

  const { state } = useLocation(); 
  const { items, title,description,selectedOption } = state || {}; 

  console.log("Received Items:", items); // Veriyi kontrol et
  console.log("Title:", title); // Veriyi kontrol et
  console.log("Description:", description); // Veriyi kontrol et
  console.log("selectedOption:", selectedOption); // Veriyi kontrol et

  
  

  return (
    <div className='w-full h-screen '>
        <TestLayout 
      items={items} title={title} description={description} selectedOption={selectedOption} />
    </div>
  )
}
