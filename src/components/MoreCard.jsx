import { Link } from "react-router-dom"

export default function MoreCard({cards ,id} ) {
  return (
    <div className="w-full min-h-full ">
         <Link to={`/CardDetailsPage/${id}`}>  
        <div className="w-[60%] rounded-lg shadow-primary-shadow h-1/3 m-auto p-5">
            <div className="w-full h-[80%] rounded-lg ">
                <img className="w-full h-full object-cover" src={cards.image} alt="" />
            </div>
            <div className="w-full h-[20%] pt-2">    
                <h1 className="text-white text-lg">{cards.title}</h1>
                <p className="text-white text-sm">{cards.description}</p>
            </div>
        </div>
        </Link>
    </div>
  )
}

