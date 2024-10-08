import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Logged Out Successfully!");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
        toast.error("Error logging out. Please try again later.");
      });
  }; 
  return (
       <div className="">
         <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg bg-gray-500 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
             {
              user ? (
              <ul className="menu menu-horizontal px-1">
                <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-products"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
                Products
              </NavLink>
            </li>
              </ul>) :
            (
              <ul className="menu menu-horizontal px-1">
                <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
               Login
              </NavLink>
            </li>
              </ul>
            )
            }
           
          </ul>
        </div>
        <div className="flex flex-row md:gap-2 justify-center items-center">
        <img className="w-8 md:w-12 hidden md:flex" src="android-chrome-192x192.png" />
        <div className="text-2xl text-blue-950 font-playfair font-bold ">
            Filter <span className="text-blue-500">Flow</span>
        </div> 

        </div>
      </div>
      <div className="navbar-center">
        <div className="hidden lg:flex">
        {
              user ? (
              <ul className="menu menu-horizontal px-1">
                <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-blue-950 text-blue-500"
                    : "font-bold text-blue-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-products"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
                Products
              </NavLink>
            </li>
              </ul>) :
            (
              <ul className="menu menu-horizontal px-1">
                <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive
                      ? "btn font-bold bg-blue-950 text-blue-500"
                      : "font-bold text-blue-500"
                  }
              >
               Login
              </NavLink>
            </li>
              </ul>
            )
            }
        </div>

        
      </div>
      <div className="navbar-end">
      {
        user ? (
          <div className="text-center items-center">
              <p className="text-blue-950 text-base font-bold">{user?.displayName}</p>
              <button onClick={handleSignOut} className="text-xs btn btn-xs w-14 font-bold bg-blue-950 text-white p-1">Log Out</button>
            </div>
        ): (<p></p>)
      }
      </div>
    </div>
       </div>
    );
};

export default Header;