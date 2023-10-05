
import { Link, useLoaderData } from 'react-router-dom';
import Header from './Shared/Header';
import Navbar from './Shared/Navbar';
import RightSideNav from './Shared/RightSideNav';
import {BsArrowLeft} from 'react-icons/bs'



const NewsDetails = () => {

    const news = useLoaderData()
     const {
       rating,
       category_id,
       author,
       details,
       image_url,
       thumbnail_url,
       title,
       total_view,
       _id,
     } = news;

    console.log(news)
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="grid lg:grid-cols-4 gap-5">
          <div className="col-span-3">
            <h2 className="text-2xl font-semibold mb-4">Dragon News</h2>
            <div className='space-y-5 p-5 border rounded-lg'>
              <img src={image_url} alt="" />
              <h2 className="text-3xl font-bold">{title}</h2>
              <p>{details}</p>
              <Link to="/" className="bg-red-600 btn text-white p-2 px-3 rounded-md hover:bg-red-700">
                <BsArrowLeft className='text-2xl'></BsArrowLeft> All news in the category
              </Link>
              
            </div>
          </div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    );
};

export default NewsDetails;