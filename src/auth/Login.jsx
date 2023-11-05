/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from 'react-icons/fc'
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { login,  googleAuth } = useContext(AuthProvider);
  const [ error, setError ] = useState(null)
  const navigate = useNavigate();
  const location = useLocation()

  const HandleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        console.log(res);
        setError(null);
        toast("Log in successful");
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {console.log(err)
        setError(err.message)});
  };

  const HandleGoogleAuth = () => {
    googleAuth()
      .then((data) => {
        console.log(data);
        setError(null);
        toast("Log in successful");
        navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {console.log(err)
        setError(err.message)});
  };

  return (
    <>
         <Helmet>
        <title>FirstPage | Login</title>
      </Helmet>
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-xl drop-shadow-md border-[1.5px] rounded-none bg-base-100">
          <div className="card-body rounded-none">

          <p className="text-center text-sm">
              <p className="w-full justify-center flex">
              <button className="text-sm flex my-3 border-[1.5px] items-center justify-center gap-2 border-blue-500/30
              w-full
              py-2" onClick={HandleGoogleAuth}>
                <FcGoogle></FcGoogle> Login with Google
              </button>
                </p>
                <span className="my-5"> Or</span> 
            </p>

            <form onSubmit={HandleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered rounded-none"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <span className="text-red-500 my-3 text-xs text-center">
                  {error === "Firebase: Error (auth/invalid-login-credentials)." && "Invalid email or password"}
                </span>
              <div className="form-control mt-6">
                <input type="submit" className="border-[1.5px] py-1" value="Login" />
              </div>
            </form>

            <p className="text-xs text-center my-3">
              Don't an account? <NavLink to="/register" className="underline">Register</NavLink>{" "}
              for free.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Toaster></Toaster>
    </>
  );
};

export default Login;
