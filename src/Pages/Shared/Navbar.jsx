import { Link, NavLink } from "react-router-dom";
import userImg from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

  const {logOut,user} = useContext(AuthContext)



    const navLinks = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/career">Career</NavLink>
        </li>
      </>
    );


    return (
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <>
                <div className="dropdown dropdown-hover">
                  <label tabIndex={0} className="avatar online">
                    <div className="w-12 hover:cursor-pointer rounded-full">
                      <img src={user.photoURL ? user.photoURL : userImg} />
                    </div>
                  </label>

                  {/* <label tabIndex={0} className="btn m-1">
                    Hover
                  </label> */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <button className="capitalize">
                        {user?.reloadUserInfo?.screenName ||
                          user?.displayName ||
                          "User"}
                      </button>
                    </li>
                    <li>
                      <button onClick={logOut}>Logout</button>
                    </li>
                  </ul>
                </div>

                
              </>
            ) : (
              <Link to="/login" className="btn btn-neutral">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;