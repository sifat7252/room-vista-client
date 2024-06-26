import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
<<<<<<< HEAD
import toast from "react-hot-toast";


const FirstNavbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);


=======


const FirstNavbar = () => {
  const { user } = useContext(AuthContext)
  console.log(user);
  // console.log(user.photoURL);
>>>>>>> 0571be587db98e1379988ed623563ceb08f0a3b8
    // TOGGLE THEME CHANGE FUNCTION
  const [mode, setMode] = useState("light");
  function changeTheme() {
    const html = document.documentElement;
    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }
  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  }, []);

  const handelLogOut = () => {
    logOut()
    .then(result =>{
      console.log(result.user)
      toast.success('Sign Out Successfully',{
        position: "bottom-center"
      })
    })
    .catch(error=>{
      console.error(error)
      toast.error(error.message)
    })

  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xs flex flex-col md:flex-row lg:flex-row lg:text-base text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-red-600">
            Contact : <span> +8801631-567252</span>
          </a>
        </div>
        <div className="flex items-center">
          <div className="dropdown flex  items-center gap-3 dropdown-end">
            <div className="border rounded-full p-2 lg:p-3 font-semibold">
<<<<<<< HEAD
              <h2 className="text-sm text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-red-600">{user ? user?.displayName : "Sign In"}</h2>
            </div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user ? <img src={user?.photoURL} alt="" /> : <img src="https://i.ibb.co/HnLSwS2/user-removebg-preview.png" />
                }
                
=======
            {user ? (
                <h2 className="text-sm text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-red-600">
                  {user?.displayName}
                </h2>
              ) : (
                <h2 className="text-sm text-transparent bg-clip-text   bg-gradient-to-r from-blue-900 to-red-600">
                  NO USER
                </h2>
              )}
              
            </div>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
              {user ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img src="https://i.ibb.co/HnLSwS2/user-removebg-preview.png" />
                )}
>>>>>>> 0571be587db98e1379988ed623563ceb08f0a3b8
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handelLogOut}>Logout</a>
              </li>
            </ul>
          </div>
          <div className="theme-control mx-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input onClick={changeTheme} type="checkbox" />
              {/* <button onClick={changeTheme} className=""></button> */}

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
    
};

export default FirstNavbar;