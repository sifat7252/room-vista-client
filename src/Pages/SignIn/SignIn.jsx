import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
<<<<<<< HEAD
// import { toast } from 'sonner';
import toast from "react-hot-toast";

const SignIn = () => {
  const { signIn ,googleSignIn } = useContext(AuthContext);
=======
import Swal from 'sweetalert2';
// import { toast } from 'sonner';

const SignIn = () => {
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
>>>>>>> 0571be587db98e1379988ed623563ceb08f0a3b8
    const [showPasswordIcon, setShowPasswordIcon] = useState(false);

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const signInUser = {email, password}
        console.log({signInUser});

<<<<<<< HEAD
        // ::: CONDITION FOR PASSWORD :::
        if (password.length < 6) {
          toast.error('Password should be At least 6 character')
          return;
        }

        // ::: SIGN IN WITH EMAIL AND PASSWORD :::
        signIn(email,password)
        .then(result => {
          console.log(result.user);
          console.log("sign in button clicked");
          toast.success('Successfully Logged In!!');

        })
        .catch(error => {
          console.error(error);
          toast.error('Your email or password is incorrect!!');
=======
        // ::: SIGN IN WITH EMAIL AND PASSWORD :::
        signIn(email, password)
        .then(result =>{
          console.log(result.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sign In Successful",
            showConfirmButton: false,
            timer: 1500
          })
          .catch(error =>{
            console.error(error);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Your Email or Password is Incorrect",
              showConfirmButton: false,
              timer: 1500
            });
          })
>>>>>>> 0571be587db98e1379988ed623563ceb08f0a3b8
        })
    };
    

    // ::: LOG IN WITH GOOGLE :::
    const handleGoogleLogin = ()=> {
      console.log("google sign in button clicked");
<<<<<<< HEAD
        googleSignIn()
        .then(result =>{
          console.log(result);
          toast.success('Google Sign In Successful')
        })
        .catch(error =>{
          console.log(error.message);
          toast.error('error.message')
        })
        //   // setSignInSuccessMessage('Google Log In Successful')
        //   // swal("Congratulation !!", 'Google Log In Successful' || signInSuccessMessage , "success");
        //   toast.success('Google Sign IN Successful');

        // })
        // .catch(error=>{
        //   // setSignInError(error.message)
        //   // swal("Opps !!", signInError , "error");
        //   toast.error('Your email or password is incorrect');
        // });
=======
      googleSignIn()
      .then(result =>{
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google Sign In Successful",
          showConfirmButton: false,
          timer: 1500
        })
        .catch(error =>{
          console.error(error);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something is went wrong",
            showConfirmButton: false,
            timer: 1500
          });
        })
      })
>>>>>>> 0571be587db98e1379988ed623563ceb08f0a3b8
  
      };
      
      // :::: LOG IN WITH GITHUB :::

      const handleGithubLogin = ()=> {
        githubSignIn()
        .then(result =>{
          console.log(result.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Github Sign In Successful",
            showConfirmButton: false,
            timer: 1500
          })
          .catch(error =>{
            console.error(error);
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Something is went wrong",
              showConfirmButton: false,
              timer: 1500
            });
          })
        })
  
      }


    return (
        <div>
            <div className="flex justify-center items-center mt-8">
        <div className="relative  lg:w-1/2 mx-auto lg:flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-xl p-5 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        <div className="flex  justify-center items-center"><img src="https://i.ibb.co/g7Vqxbh/room-vista-high-resolution-logo-transparent.png" alt="" className="h-20 " /></div>
          <div className=" flex flex-col justify-center items-center">
          <div className="flex flex-col justify-start ">
          {/* <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-transparent bg-clip-text  bg-gradient-to-r from-blue-900 to-blue-500">
            Log In
          </h4> */}
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Enter your Email and Password for Sign In.
          </p>
          </div>
          <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              
              <div className="relative h-11 w-full min-w-[200px]">
                <input name="email" type="email" required 
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  
                  
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative flex h-11 w-full min-w-[200px] ">
                <input
                  type={showPasswordIcon ? "text" : "password"} name="password" required
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-violet-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  
                />
                <span onClick={()=> setShowPasswordIcon(!showPasswordIcon)} className="absolute flex right-2 top-4 ">{showPasswordIcon ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violet-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violet-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violet-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </div>
           
            <button
              className="mt-6 block w-full select-none rounded-lg bg-gradient-to-r from-blue-900 to-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-fuchsia-500/20 transition-all hover:shadow-lg hover:shadow-fuchsia-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Sign In
            </button>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              New Here ?
              <Link to="/register">
                <button
                  className=" btn-link font-medium text-blue-900 transition-colors hover:text-blue-700"
                  
                >
                  Register
                </button>
              </Link>
            </p>
            <hr className="mt-4 bg-gradient-to-r from-blue-900  to-blue-500 h-1" />
            
            <div className="p-4">
              
                <button onClick={handleGoogleLogin} className='btn btn-outline flex text-sky-500 w-full m-2 mx-auto'><FaGoogle></FaGoogle> Google Sign In</button>
                <button onClick={handleGithubLogin} className='btn btn-outline flex text-black-500 w-full m-2 mx-auto'><FaGithub></FaGithub> Github Sign In</button>
            </div>
          </form>
          </div>
        </div>
      </div>

        </div>
    );
};

export default SignIn;