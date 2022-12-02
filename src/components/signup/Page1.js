import React, { useContext } from "react";
import { FormContext } from "../../contexts/FormProvider";

const Page1 = () => {
  const { firstName, setFirstName, lastName, setLastName } =
    useContext(FormContext);
  return (
    <>
      <form className="mt-20">
        <label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            type="text"
            name="firstName"
            required
            placeholder="Write First Name"
            className="border-b-2 outline-0 w-[300px] lg:w-[370px] mb-20"
          />
        </label>
        <label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            name="lastName"
            required
            placeholder="Write Last Name"
            className="border-b-2 outline-0 w-[300px] lg:w-[370px]"
          />
        </label>
      </form>
    </>
  );
};

export default Page1;
