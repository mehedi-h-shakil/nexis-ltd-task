import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormProvider";

const Page2 = () => {
  const { mobileNumber, setMobileNumber, email, setEmail } =
    useContext(FormContext);
  return (
    <form className="mt-20">
      <label htmlFor="">
        <input
          type="text"
          name="countryCode"
          disabled
          placeholder="+880"
          className="border-b-2 outline-0 text-center w-[70px] mr-1 mb-20"
        />
      </label>
      <label htmlFor="">
        <input
          onChange={(e) => {
            setMobileNumber(e.target.value);
          }}
          value={mobileNumber}
          type="text"
          name="mobileNumber"
          required
          placeholder="Write Your Number"
          className="border-b-2 outline-0 w-[230px] lg:w-[300px] mb-20"
        />
      </label>
      <label htmlFor="">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          name="email"
          required
          placeholder="Write Your Email"
          className="border-b-2 outline-0 w-[300px] lg:w-[370px]"
        />
      </label>
    </form>
  );
};

export default Page2;
