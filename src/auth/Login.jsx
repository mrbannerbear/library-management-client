import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";

const Login = () => {

    const { login, logout, user } = useContext(AuthProvider)

    const HandleLogin = e => {
        
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
        .then(res => {console.log(res)}
        )
        .catch(err => console.log(err))

    }

    const HandleLogout = () => {
        logout()
        .then()
        .catch()
    }

    return (
        user ? 
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <button onClick={HandleLogout}>
                Log Out
            </button>
            </div>
            </div>
            :
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body"
            onSubmit={HandleLogin}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Login"  />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;