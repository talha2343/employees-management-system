import React, { createContext, useEffect, useState } from "react";
import { getlocalstroge, Setlocalstroge } from "../Utils/Localstroge";
export const AuthContexts = createContext();

function AuthContext({ children }) {
  
  const [userData, setUserData] = useState(() => {
  const storedData = localStorage.getItem("employees")
  return storedData ? JSON.parse(storedData) : []
});
  useEffect(() => {
    Setlocalstroge();
    const { employees} = getlocalstroge();
    setUserData(employees);
  }, []);

  return (
    <div>
      <AuthContexts.Provider value={[userData,setUserData]}>{children}</AuthContexts.Provider>
    </div>
  );
}

export default AuthContext;
