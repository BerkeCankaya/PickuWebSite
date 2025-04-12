import { Link } from "react-router-dom";
import {IoPersonSharp } from "react-icons/io5";

const Card = ({id, title , categoryname , image , UserName}) => {
  return (
    <div className="w-5/6 p-8 max-sm:p-4  h-auto shadow-primary-shadow rounded-xl transition hover:bg-bg-hover max-2xl:w-[70%] max-xl:w-[90%] max-lg:w-full max-sm:w-full ">
       <Link className="flex flex-col gap-7 " to={`/CardDetailsPage/${id}`}>
      <div className="flex justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold max-md:text-lg max-sm:text-[15px] py-5">{title}</h2>
        </div>
        <div className="flex justify-end items-center ">
          <Link className="text-lg max-md:text-sm max-sm:text-[12px] text-white" to="">
          <button className="pt-1 pb-1 pl-5 pr-5  rounded-xl bg-button-bgColor">{categoryname}</button>
          </Link>
        </div>
      </div>
      <div className="bg-secondary-backround rounded-2xl m-auto w-full h-full object-cover">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>
      <div className="flex items-center gap-1 py-2">
          <IoPersonSharp className="text-white max-md:text-lg text-2xl"/> 
          <h1 className="text-l max-md:text-sm text-white px-2">{UserName}</h1>
      </div>
      </Link>
    </div>
  );
};

export default Card;
