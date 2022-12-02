import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormProvider";

const Page3 = () => {
  const { password, setPassword } = useContext(FormContext);
  console.log(password);
  return (
    <form className="mt-20">
      <label htmlFor="">
        <input
          onChange={(e) => {
            if (e.target.value.length < 8) {
              return alert(" Your password must be 8 characters");
            }
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          name="password"
          required
          minLength="8"
          placeholder="Write Your Password"
          className="border-b-2 outline-0 w-[300px] lg:w-[370px]"
        />
        <label
          htmlFor=""
          value=""
          className="block mr-20 lg:mr-36 text-sm text-[#7E7E7E]"
        >
          Your password must be 8 characters
        </label>
      </label>
    </form>
  );
};

export default Page3;
