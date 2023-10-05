import { useEffect } from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = ({ setCat, setCategoryName }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data.filter((n) => n.others_info.is_trending)));
  }, []);

  return (
    <div className="relative bg-gray-200 py-5 px-3 rounded-xl">
      <button
        onClick={() =>{ setCat(1); setCategoryName('Breaking News'); }}
        className="btn btn-secondary absolute z-10 top-2"
      >
        Breaking News
      </button>
      <Marquee speed={100} pauseOnHover={true}>
        {news.map((n) => (
          <p key={n._id} className="mr-10 font-semibold text-xl">
            {n.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;