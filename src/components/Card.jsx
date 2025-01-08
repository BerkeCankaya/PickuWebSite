import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";

const Card = ({ title, description , categoryname , image , LikeSayisi=0 }) => {
  return (
    <div className="w-5/6 h-auto flex flex-col shadow-primary-shadow rounded-xl">
      <div className="p-8 flex justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">{title}</h2>
          <p className="text-white text-lg">{description}</p>
        </div>
        <div className="flex justify-end ">
          <Link className="text-l text-white" to="">
          <button className="pt-1 pb-1 pl-5 pr-5 rounded-xl bg-button-bgColor">{categoryname}</button>
          </Link>
        </div>
      </div>
      <div className="bg-secondary-backround p-5 rounded-2xl w-11/12 m-auto">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="flex flex-col gap-1 pt-5 pl-8 pb-5">
        <Link><BiLike className="text-white text-4xl" /></Link>
        <h1 className="text-white text-l ">{LikeSayisi} kişi beğendi</h1>
      </div>
    </div>
  );
};

export default Card;
