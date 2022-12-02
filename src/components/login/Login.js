import React, { useContext } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: email,
          password: password,
        };
        fetch("https://test.nexisltd.com/login ", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        });
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-screen mt-10 text-center">
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className=" flex justify-center items-center mb-10">
        <div className="shadow-xl h-[630px] w-[350px] lg:w-[516px]">
          <h2 className="text-xl font-semibold mt-20">Log in Form</h2>
          <form onSubmit={handleSubmit} className="mt-20">
            <label>
              <input
                type="text"
                name="email"
                required
                placeholder="Write Your Email"
                className="border-b-2 outline-0 w-[300px] lg:w-[370px] mb-20"
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                required
                placeholder="Write Your Password"
                className="border-b-2 outline-0 w-[300px] lg:w-[370px]"
              />
            </label>
            <div className="mt-20">
              <button
                type="submit"
                className="btn border-blue-500 bg-blue-500 hover:bg-blue-700"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-24 text-right mr-16">
            <p>
              <span className="text-sm mr-2">Don't have an account?</span>
              <span className="text-blue-500 font-semibold underline">
                <Link to="/signup">SIGNUP HERE</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
