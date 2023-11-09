import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'

const Navbar = () => {
  const { user, logout } = useContext(AuthProvider);
  const [ lightTheme, setLightTheme ] = useState(  localStorage.getItem('theme') === 'dark' ? false : true )
  

  const theme = lightTheme ? "light" : "dark"

  useEffect( () => {
    document.querySelector('html').setAttribute('data-theme', theme)
    localStorage.setItem('theme', lightTheme ? 'light' : 'dark');
  } , [theme] )

  const HandleTheme = () => {
    setLightTheme(!lightTheme)
  }


  const paths = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/addBooks",
      name: "Add Book",
    },
    {
      id: 3,
      path: "/allBooks",
      name: "All Books",
    },
    {
      id: 4,
      path: "/borrowedBooks",
      name: "Borrowed Books",
    },
  ];

  const HandleLogout = () => {
    logout().then().catch();
  };

  return (
    <div className="navbar bg-base-300 py-6 lg:pb-12 lg:px-12">
      <div className="navbar-start">
        <a className="normal-case text-xl absolute">
          <img
            src="https://i.ibb.co/0VNwMj0/Pngtree-open-book-vintage-old-6966262.png"
            className="w-20 lg:w-28"
            alt=""
          />
          <span className="absolute text-center bottom-2 right-0 left-0 text-sm lg:text-lg">
            First Page
          </span>
        </a>
      </div>

      <div className="navbar-center text-sm lg:hidden">
        Hello {user && user.displayName}
      </div>

      <div className="navbar-center hidden lg:block">
        <ul className="flex gap-5 px-1 text-sm">
          {paths.map((path) => (
            <NavLink
              key={path.id}
              to={path.path}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              <li>{path.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <span className="mr-3 lg:mr-5"> 
          <button onClick={HandleTheme}>
            {
              lightTheme ? <BsMoonFill></BsMoonFill> : <BsFillSunFill></BsFillSunFill>
            }
          </button>
        </span>
        <span className="hidden lg:flex items-center gap-5">
          {user ? (
            <>
              <button onClick={HandleLogout}>Log Out</button>
              <span className="w-8 h-8 rounded-full">
                <img
                  src={user.photoURL}
                  className="w-full h-full rounded-full"
                  alt=""
                />
              </span>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </span>
        <div className="dropdown lg:hidden dropdown-left">
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
            // tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             {paths.map((path) => (
            <NavLink
              key={path.id}
              to={path.path}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              <li>{path.name}</li>
            </NavLink>
          ))}
          <li>
          {user ? (
            <>
              <button onClick={HandleLogout} className="text-left">Log Out</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
