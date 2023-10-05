
import Navbar from './Shared/Navbar';
import Header from './Shared/Header';
import RightSideNav from './Shared/RightSideNav';
import LeftSideNav from './Components/LeftSideNav';
import BreakingNews from './Components/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './Components/NewsCard';
import { useState } from 'react';

const Home = () => {
  const news = useLoaderData()
  const [cat,setCat] = useState(0)
  const [categoryName,setCategoryName] = useState('All News')
  const [showAll,setShowAll] = useState(false)

  let newsToShow = []
  
  if(cat == 0){
    newsToShow = [...news]
  }else{
   const selected = news.filter(n=> n.category_id == cat)
   newsToShow = selected
  }

  if(!showAll){
    if (newsToShow.length >= 5) {
      const less = newsToShow.slice(0, 4);
      newsToShow = less;
    }
  }
  



    return (
      <div>
        <Header></Header>
        <BreakingNews
          setCat={setCat}
          setCategoryName={setCategoryName}
        ></BreakingNews>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <LeftSideNav
              cat={cat}
              setCategoryName={setCategoryName}
              setCat={setCat}
            ></LeftSideNav>
          </div>

          <div className="md:col-span-2 space-y-5">
            <h2 className="text-2xl font-semibold">{categoryName}</h2>
            <div className="space-y-10">
              {newsToShow.map((n) => (
                <NewsCard key={n._id} news={n}></NewsCard>
              ))}
            </div>
            {!showAll && (
              <div className="flex justify-center items-center">
                <button onClick={()=> setShowAll(!showAll)} className="btn text-white btn-error">Show More</button>
              </div>
            )}
          </div>

          <div>
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
    );
};

export default Home;