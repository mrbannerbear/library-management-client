import { useContext, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from 'react-icons/fc'
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import axios from "axios";

const Register = () => {
  const { signup, googleAuth } = useContext(AuthProvider);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const location = useLocation()

  const HandleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Your password must be at least six characters long.");
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password)) {
      setError(
        "Your password must contain an uppercase letter, a lowercase letter, and a special character"
      );
      return;
    }

    signup(email, password)
      .then((data) => {
        console.log(data);
        setError(null);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image
        })
        .then(toast("Signed up successfully"))
        .catch(err => console.log(err));
        const user = { email };
        axios
          .post("http://localhost:4000/jwt", user, { withCredentials: true })
          .then((res) => {
            toast("Registration successful");
            if (res.data.success) {
              window.location.href = "/"
              navigate(location?.state ? location?.state : "/");
            }
          })

          .catch((error) => {
            console.log(error);
          });
        // window.location.href = "/";
        // navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {console.log(err)
        setError(err.message)});
  };

  const HandleGoogleAuth = () => {
    googleAuth()
      .then((data) => {
        console.log(data);
        setError(null);
        const user = { email: data.user.email };
        axios
          .post("http://localhost:4000/jwt", user, { withCredentials: true })
          .then((res) => {
            toast("Registration successful");
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          })

          .catch((error) => {
            console.log(error);
          });
        // toast("Signed up successfully");
        // navigate(location?.state ? location.state : "/")
      })
      .catch((err) => {console.log(err)
      setError(err.message)});
  };

  return (
    <>
      <Helmet>
        <title>FirstPage | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-300">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card flex-shrink-0 lg:w-1/3 drop-shadow-md border-[1.5px] bg-base-100 rounded-none">
            <div className="card-body">

            <p className="text-center text-sm">
            
            <p className="w-full justify-center flex">
            <button className="text-sm flex my-3 border-[1.5px] items-center justify-center gap-2 border-blue-500/30
            w-full
            py-2" onClick={HandleGoogleAuth}>
              <FcGoogle></FcGoogle> Sign up with Google
            </button>
              </p>
              <span className="my-5"> Or</span> 
          </p>

              <form className="" onSubmit={HandleRegister}>

              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="username"
                    name="name"
                    className="input input-bordered rounded-none"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="image url"
                    name="image"
                    className="input input-bordered rounded-none"
                    required
                  />
                </div>

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
                </div>
                <span className="text-red-500 my-3 text-xs text-center">
                  {error}
                </span>
                <div className="form-control mt-6">
                  <input className="border-[1.5px] py-1"  type="submit" value="Register" />
                </div>
              </form>
              <p className="text-xs text-center">
                Already have an account? <NavLink className="underline" to="/login">Login</NavLink>{" "}
                here.
              </p>
            </div>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </>
  );
};

export default Register;
