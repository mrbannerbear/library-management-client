import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthProvider);

  return (
    <div className="navbar bg-base-100 py-6">
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

      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
        </ul>

        <div className="dropdown lg:hidden">
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

      </div>
    </div>
  );
};

export default Navbar;
