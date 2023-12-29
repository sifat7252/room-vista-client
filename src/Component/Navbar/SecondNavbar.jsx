import { Link } from "react-router-dom";


const SecondNavbar = () => {
  const navLinks = (
    <>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text antialiased block bg-gradient-to-r from-orange-700 to-orange-500 ">
        <Link to={"/"} className="flex items-center">
          Home
        </Link>
      </li>
      <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-orange-700 to-orange-500">
        <Link to={"/services"} className="flex items-center">
          Services
        </Link>
      </li>
      {
        // user &&
        <>
          {/* <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-orange-700 to-orange-500">
            <Link to={"/addProduct"} className="flex items-center">
              Add Product
            </Link>
          </li> */}
          <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-orange-700 to-orange-500">
            <Link to={"/myOrders"} className="flex items-center">
              My Orders
            </Link>
          </li>
        </>
      }

      {
        // !user &&
        <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-orange-700 to-orange-500">
          <Link to={"/signUp"} className="flex items-center">
            SignUp
          </Link>
        </li>
      }
      {
        // !user &&
        <li className="p-1 font-sans text-sm md:text-base lg:text-base text-black lg:font-semibold md:font-medium font-normal     text-transparent bg-clip-text   bg-gradient-to-r from-orange-700 to-orange-500">
          <Link to={"/signIn"} className="flex items-center">
            SignIn
          </Link>
        </li>
      }
    </>
  );
  return (
    <div>
      <div className="navbar  bg-base-100 border-t border-b  ">
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
          <div className="">
            <Link to={"/"}>
              <img src="https://i.ibb.co/xMsMwxh/room-vista-high-resolution-logo-transparent-1.png" alt="logo" className="n h-16 rounded-lg" />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-sm btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link className="btn-outline btn btn-warning">Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default SecondNavbar;
