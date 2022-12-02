import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formInfo = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    mobileNumber,
    setMobileNumber,
    email,
    setEmail,
    password,
    setPassword,
  };
  return (
    <div>
      <FormContext.Provider value={formInfo}>{children}</FormContext.Provider>
    </div>
  );
};

export default FormProvider;
