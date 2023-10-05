import { useContext } from "react";
import Navbar from "./Shared/Navbar";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";



const Login = () => {
  const [err,setErr] = useState(null)
    const navigate = useNavigate();
    const location = useLocation()
  
 

  const { emailSignIn, googleSignIn, githubSignIn } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null)
    // const email = e.target.email.value;
    // const password = e.target.password.value;


    
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const password = form.get("password");

    emailSignIn(email, password)
      .then((res) => {
        navigate(location?.state ? location.state : '/')
        console.log(res.user);
      })
      .catch((err) =>{
        setErr(err.message);
         console.error(err);
      });
  };

  const handleSocialLogin = (social) => {
    social()
      .then((res) => {
        navigate(location?.state ? location.state : "/")
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };




  return (
    <div className="pb-10">
      <Navbar></Navbar>
      <div className="max-w-xl border py-10 px-16 mx-auto space-y-8 bg-white rounded-md">
        <h2 className="font-semibold text-3xl">Login your account</h2>
        <hr />
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="font-semibold">Your Email</p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full bg-gray-100"
          />
          <p className="font-semibold">Password</p>
          <input
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full bg-gray-100"
          />
          <div className="space-y-8">
            <input
              type="submit"
              value="login"
              className="btn btn-neutral w-full"
            />
          </div>
          {err && <p className="text-red-600">{err}</p>}
        </form>
        <div>
          <span>
            Don't Have An Account ?{" "}
            <Link className="hover:font-semibold text-blue-700" to="/register">
              Register
            </Link>
          </span>
          <div className="mt-3">
            <div className="flex justify-center gap-5 items-center mb-2">
              <div className="w-16 h-[1px] bg-black"></div>
              <h2 className="text-xl font-bold ">or</h2>
              <div className="w-16 h-[1px] bg-black"></div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => handleSocialLogin(googleSignIn)}
                className="btn w-full btn-outline"
              >
                <FcGoogle className="text-2xl" /> continue with Google
              </button>
              <button
                onClick={() => handleSocialLogin(githubSignIn)}
                className="btn w-full btn-outline"
              >
                {" "}
                <AiFillGithub className="text-2xl" /> continue with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
