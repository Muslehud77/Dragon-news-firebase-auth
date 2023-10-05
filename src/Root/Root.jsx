

import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Components/Footer';

const Root = () => {
  const { pathname } = useLocation();
  
if(pathname === "/login" || pathname === "/register"){
   document.body.classList.remove("bg-white");
  document.body.classList.add('bg-gray-100')
}else{
  document.body.classList.remove('bg-gray-100')
   document.body.classList.add("bg-white");
}





    return (
      <div >
        <div className="max-w-6xl mx-auto font-poppins">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Root;