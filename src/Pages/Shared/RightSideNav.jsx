import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
import background from '../../assets/bg.png'



const RightSideNav = () => {
const { googleSignIn, githubSignIn , user } = useContext(AuthContext);

const handleSocialLogin = (social) => {
  social()
  .then(res => console.log(res.user))
  .catch(err => console.log(err))
}

  return (
    <div className="space-y-5">
      {!user ? (
        <div className=" px-2">
          <h2 className="text-xl font-bold mb-4">Login with</h2>
          <div className="space-y-2">
            <button
              onClick={() => handleSocialLogin(googleSignIn)}
              className="btn w-full btn-outline"
            >
              <FcGoogle className="text-2xl" /> Login with Google
            </button>
            <button
              onClick={() => handleSocialLogin(githubSignIn)}
              className="btn w-full btn-outline"
            >
              {" "}
              <AiFillGithub className="text-2xl" /> Login with Github
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" px-2">
        <h2 className="text-xl font-bold mb-4">Find Us On</h2>
        <div>
          <a
            href="https://facebook.com"
            className="flex border-b-0 border hover:cursor-pointer duration-200 hover:bg-gray-100 hover:rounded-xl p-4 items-center gap-2 w-full"
          >
            <span className="text-xl text-blue-700 p-2 bg-gray-200 rounded-full">
              <FaFacebookF />
            </span>
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="flex border-b-0 border hover:cursor-pointer duration-200 hover:bg-gray-100 hover:rounded-xl p-4 items-center gap-2 w-full"
          >
            <span className="text-xl text-blue-400 p-2 bg-gray-200 rounded-full">
              <FaTwitter />
            </span>
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="flex  border hover:cursor-pointer duration-200 hover:bg-gray-100 hover:rounded-xl p-4 items-center gap-2 w-full"
          >
            <span className="text-xl text-red-400 p-2 bg-gray-200 rounded-full">
              <FaInstagram />
            </span>
            Instagram
          </a>
        </div>
      </div>
      <div className="bg-gray-200 py-4 px-2">
        <h2 className="text-xl font-bold mb-4">Q-Zone</h2>
        <div className="space-y-3">
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "500px",
        }}
        className="text-base-200 text-center flex flex-col justify-center items-center space-y-4 p-4"
      >
        <h2 className="text-4xl font-bold ">Create an Amazing Newspaper</h2>
        <h4 className="font-light">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </h4>
        <button className="text-3xl hover:rounded-xl duration-500 font-semibold bg-red-600 p-3">Learn More</button>
      </div>
      <div>
        <h2 className="text-xl font-bold"></h2>
      </div>
    </div>
  );
};

export default RightSideNav;
