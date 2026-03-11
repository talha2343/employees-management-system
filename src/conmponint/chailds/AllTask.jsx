import React, { useContext } from "react";
import { AuthContexts } from "../../context/AuthContext";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContexts);

  return (
    <div className="p-5 mt-8 h-60 w-4/5 bg-gray-900 rounded-xl">
      <div className="py-2 px-4  mb-3 flex justify-between bg-emerald-800 items-center">
        <h1 className="w-1/1 md:w-1/5">Employee</h1>
        <h1 className="w-1/1 md:w-1/5">New</h1>
        <h1 className="w-1/1 md:w-1/5">Active</h1>
        <h1 className="w-1/1 md:w-1/5">Completed</h1>
        <h1 className="w-1/1 md:w-1/5">Failed</h1>
      </div>
      <div id="tasklist" className="h-40  overflow-auto">
        {userData.map((elem,idx) => {
          return (
            <div key={idx} className="py-2 px-4 mb-3 flex justify-between bg-gray-600 items-center">
              <h1 className="w-1/1 md:w-1/5">{elem.firstName}</h1>
              <h1 className="w-1/1 md:w-1/5">{elem.taskNumbers.newTask}</h1>
              <h1 className="w-1/1 md:w-1/5">{elem.taskNumbers.active}</h1>
              <h1 className="w-1/1 md:w-1/5">{elem.taskNumbers.completed}</h1>
              <h1 className="w-1/1 md:w-1/5">{elem.taskNumbers.failed}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
