import { NavLink } from "react-router-dom";

const Navbar = () => {
  const routes = (
    <>
      <li>
        <NavLink to={"/"} className={({ isActive }) => isActive ? 'mx-2 text-green-600 font-bold rounded-lg border border-green-500 bg-transparent' : 'mx-1'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/list"} className={({ isActive }) => isActive ? 'mx-2 text-green-600 font-bold rounded-lg border bg-transparent border-green-500' : 'mx-1'}>
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink to={"/pagesToRead"} className={({ isActive }) => isActive ? 'mx-2 text-green-600 font-bold rounded-lg border bg-transparent border-green-500' : 'mx-1'}>
          Pages To Read
        </NavLink>
      </li>
    </>
  );


  return (
    <div className="navbar bg-base-100 lg:px-[133px] lg:py-[55px] md:px-5 md:py-3 py-2">
      <div className="navbar-start flex items-center">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {routes}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl h-[100px] md:px-3 md:py-2 py-1">
        <img src="/logo.svg" width={50} alt=""/>
          BookaHolic™
        </a>
      </div>
      <div className="navbar-center hidden lg:flex flex-grow justify-center">
      <ul className="menu menu-horizontal px-1">{routes}</ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div>
          <button className="btn w-[130px] h-[56px] px-[25px] py-[16px] border-green-500 bg-green-500 hover:bg-green-600 focus:bg-green-600 text-white">
            Sign In
          </button>
        </div>
        <div className="mr-2 hidden sm:block">
          <button className="btn w-[110px] sm:w-[130px] h-[56px] px-[20px] sm:px-[30px] py-[16px] border-blue-500 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
