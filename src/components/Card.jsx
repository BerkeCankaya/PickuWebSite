import { Link } from "react-router-dom";
import {IoPersonSharp } from "react-icons/io5";

const Card = ({id, title, description , categoryname , image , UserName}) => {
  return (
    <div className="w-5/6  h-auto flex flex-col shadow-primary-shadow rounded-xl transition hover:bg-bg-hover max-2xl:w-[70%] max-xl:w-[90%] max-lg:w-full ">
       <Link to={`/CardDetailsPage/${id}`}>
      <div className="p-8 flex justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold max-md:text-lg">{title}</h2>
          <p className="text-white text-lg max-md:text-sm">{description}</p>
        </div>
        <div className="flex justify-end items-center ">
          <Link className="text-lg max-md:text-sm text-white" to="">
          <button className="pt-1 pb-1 pl-5 pr-5 rounded-xl bg-button-bgColor">{categoryname}</button>
          </Link>
        </div>
      </div>
      <div className="bg-secondary-backround p-5 rounded-2xl w-11/12 m-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex items-center gap-1 pt-5 pl-8 pb-5">
          <IoPersonSharp className="text-white max-md:text-lg text-2xl"/> 
          <h1 className="text-l max-md:text-sm text-white px-2">{UserName}</h1>
      </div>
      </Link>
    </div>
  );
};

export default Card;
