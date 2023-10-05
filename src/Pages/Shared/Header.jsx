import logo from '../../assets/logo.png'
import moment from "moment";

const Header = () => {
    return (
      <div className="flex flex-col justify-center items-center mt-8 mb-2 space-y-1">
        <img src={logo} alt="" />
        <p className="text-gray-500">Journalism Without Fear or Favour</p>
       

        <h5 className="text-xl ">
          <span className='font-semibold'>{moment().format(`dddd,`)}</span>{" "}
          {moment().format(` MMMM D, YYYY`)}
        </h5>
      </div>
    );
};

export default Header;