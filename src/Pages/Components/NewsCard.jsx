import PropTypes from "prop-types";
import {BsShare, BsBookmarks} from 'react-icons/bs'
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";




const NewsCard = ({ news }) => {
 
    const { rating, author, details, image_url,  title, total_view , _id } = news;

    const {name, published_date, img} = author


    

  return (
    <div>
      <div className=" border rounded-xl">
        <div className="flex rounded-t-lg p-3 bg-gray-100 justify-between items-center">
          <div className="flex gap-4">
            <img src={img} className="w-12 rounded-full" alt="" />
            <div>
              <h4 className="font-semibold">{name || "Author"}</h4>
              <p>{published_date?.slice(0, 10)}</p>
            </div>
          </div>
          <div className="flex gap-4 text-2xl text-gray-600">
            <button>
              <BsBookmarks />
            </button>
            <button>
              <BsShare />
            </button>
          </div>
        </div>
        <div className="p-3 space-y-3">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div>
            <img src={image_url} className="object-cover w-full" alt="" />
          </div>
          <p className="mt-2">
            {details.slice(0, 254)}... <br />
            <Link to={`/news/${_id}`} className="font-semibold text-orange-500">
              Read More
            </Link>
          </p>
        </div>
        <hr className="mx-4" />
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center gap-3 ">
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <div>
              <p className="mt-1">{rating.number}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <AiFillEye className="text-2xl" />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
    news: PropTypes.object
};


export default NewsCard;


