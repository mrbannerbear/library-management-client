import { useContext } from "react";
import { AuthProvider } from "../../context/AuthContext";

const Register = () => {

    const { signup } = useContext(AuthProvider)

    const HandleRegister = e => {
        
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signup(email, password)
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body"
            onSubmit={HandleRegister}
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
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Register"  />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;