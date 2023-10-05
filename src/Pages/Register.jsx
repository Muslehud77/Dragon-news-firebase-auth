
import { useContext } from 'react';
import Navbar from './Shared/Navbar';
import { AuthContext } from '../Providers/AuthProvider';
import {  updateProfile } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';

const Register = () => {

const {emailRegister } = useContext(AuthContext)
const navigate = useNavigate()


    const handleSubmit = e => {
        e.preventDefault()
        // const displayName = e.target.name.value
        // const photoURL = e.target.photoUrl.value;
        // const email = e.target.email.value
        // const password = e.target.password.value

        const form = new FormData(e.currentTarget)
        
        const displayName = form.get('name')
        const photoURL = form.get('photoUrl')
        const email = form.get('email')
        const password = form.get('password')



       emailRegister(email, password)
         .then((res) => {
           updateProfile(res.user, {
             displayName,
             photoURL
           });
           console.log(res.user);
           navigate('/')
         })
         .catch((err) => console.error(err));
    }

  



    return (
      <div className='pb-10'>
        <Navbar></Navbar>
        <div className="max-w-xl border py-10 px-16 mx-auto space-y-8 bg-white rounded-md">
          <h2 className="font-semibold text-3xl">Register your account</h2>
          <hr />
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-semibold">Your Name</p>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-100"
              
            />
            <p className="font-semibold">Your Photo</p>
            <input
              type="url"
              name="photoUrl"
              placeholder="Your photo url"
              className="input input-bordered w-full bg-gray-100"
              
            />
            <p className="font-semibold">Your Email</p>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-100"
              
            />
            <p className="font-semibold">Set Password</p>
            <input
              required
              type="password"
              name="password"
              placeholder="Password must be at-least 6 characters"
              className="input input-bordered w-full bg-gray-100"
             
            />
            <div className='space-y-8'>
              <div className="flex gap-2">
                <input required type="checkbox" name="" id="" />
                <label>
                  Accept{" "}
                  <a className="hover:underline" href="">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-neutral w-full"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;