import React, { useContext, useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import banner from "../../assets/banner.png";
import logo from "../../assets/logo.png";
import { FormContext } from "../../contexts/FormProvider";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { BsArrowRight } from "react-icons/bs";

const Signup = () => {
  const { signup, updateUserProfile } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const { firstName, lastName, mobileNumber, email, password } =
    useContext(FormContext);
  const fullName = firstName + " " + lastName;

  const handleSignup = () => {
    console.log(email, password);
    signup(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUserProfile(fullName).then(() => {
          const currentUser = {
            firstName: firstName,
            lastName: lastName,
            mobileNumber: mobileNumber,
            email: email,
            password: password,
          };
          fetch("https://test.nexisltd.com/signup", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ currentUser }),
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
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
            <h2 className="text-xl font-semibold mt-20">SignUp Form</h2>
            {page === 1 ? <Page1 /> : page === 2 ? <Page2 /> : <Page3 />}
            <div className="mt-20">
              {page > 1 && (
                <label
                  htmlFor=""
                  className="mr-20"
                  onClick={() => {
                    const backPage = page - 1;
                    setPage(backPage);
                  }}
                >
                  Back
                </label>
              )}
              {page === 3 ? (
                <button
                  className="btn btn-primary bg-[#1678CB] hover:bg-[#1678CB]"
                  onClick={handleSignup}
                >
                  Sign Up
                </button>
              ) : (
                <button
                  className="btn btn-primary bg-[#1678CB] px-5 hover:bg-[#1678CB]"
                  onClick={() => {
                    const nextPage = page + 1;
                    setPage(nextPage);
                  }}
                >
                  Next Step{" "}
                  <span className="ml-3">
                    <BsArrowRight />
                  </span>
                </button>
              )}
            </div>
            {page === 1 && (
              <div className="mt-24 text-right mr-16">
                <p>
                  <span className="text-sm mr-2">Already have an account?</span>
                  <span className="text-[#1678CB] font-semibold underline">
                    <Link to="/login">LOGIN HERE</Link>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
