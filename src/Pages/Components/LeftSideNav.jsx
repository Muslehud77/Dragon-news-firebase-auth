import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BsCalendarEvent} from 'react-icons/bs'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'

const LeftSideNav = ({ setCat, setCategoryName , cat }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-xl font-bold mb-4">All Category</h2>
        <ul>
          {categories.map((category) => (
            <a
              className={`hover:cursor-pointer `}
              onClick={() => {
                setCat(category.id);
                setCategoryName(category.name);
              }}
              key={category.id}
            >
              <li
                className={`p-4 text-xl duration-300 hover:bg-gray-100 hover:rounded-xl ${
                  cat == category.id && "bg-black text-white rounded-xl hover:bg-black"
                }`}
              >
                {category.name}
              </li>
            </a>
          ))}
        </ul>
      </div>
      <div className="space-y-3">
        <div className="space-y-4">
          <img src={img1} alt="" />
          <h2 className="text-xl  font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex justify-between">
            <h3>Sports</h3>
            <h3 className="flex items-center gap-2">
              <BsCalendarEvent /> Jan 4, 2022
            </h3>
          </div>
        </div>
        <div className="space-y-4">
          <img src={img2} alt="" />
          <h2 className="text-xl  font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex justify-between">
            <h3>Sports</h3>
            <h3 className="flex items-center gap-2">
              <BsCalendarEvent /> Jan 4, 2022
            </h3>
          </div>
        </div>
        <div className="space-y-4">
          <img src={img3} alt="" />
          <h2 className="text-xl  font-semibold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h2>
          <div className="flex justify-between">
            <h3>Sports</h3>
            <h3 className="flex items-center gap-2">
              <BsCalendarEvent /> Jan 4, 2022
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
